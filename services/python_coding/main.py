"""Comfort coding microservice with live schemas, retrieval, and safe fallback."""

from __future__ import annotations

import hashlib
import json
import os
import re
import tempfile
import time
from pathlib import Path
from typing import Any, Literal

import httpx
import yaml
from fastapi import FastAPI, Header, HTTPException, Request
from fastapi.responses import JSONResponse
from pydantic import BaseModel, Field

app = FastAPI(title="comfort-python-coding", version="0.2.0")

GENERATED_ROOT = Path(os.environ.get("COMFORT_GENERATED_ROOT", "/workspace/generated/runtime"))
CMS_SCHEMA_URL = os.environ.get("PYTHON_CMS_SCHEMA_URL", "http://api-cms:3000/api-cms/public/coding/schema")
CRM_SCHEMA_URL = os.environ.get("PYTHON_CRM_SCHEMA_URL", "http://api-crm:3000/api-crm/public/coding/schema")
SEARCH_BASE_URL = os.environ.get(
  "BASE_URL_OF_API_SEARCH", "http://api-search:3000/api-search/"
).rstrip("/") + "/"
CMS_AUTH_SESSION_URL = os.environ.get(
  "PYTHON_CMS_AUTH_SESSION_URL",
  "http://api-cms:3000/api-cms/public/auth/session",
)
GROQ_API_KEY = os.environ.get("GROQ_API_KEY", "")
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY", "")

ALLOWED_OPS = {
  "prisma-get-many",
  "prisma-create-many",
  "prisma-update-many",
  "prisma-delete-many",
}
ARTIFACT_NAME_RE = re.compile(r"^[a-z0-9][a-z0-9._-]{0,63}$")
MAX_ARTIFACT_BYTES = 1_000_000


@app.middleware("http")
async def reject_oversized_artifact_requests(request: Request, call_next):
  if request.url.path == "/artifacts/compile":
    content_length = request.headers.get("content-length")
    if content_length and content_length.isdigit() and int(content_length) > MAX_ARTIFACT_BYTES + 16_384:
      return JSONResponse(status_code=413, content={"detail": "Artifact request is too large"})
  return await call_next(request)


class RecommendRequest(BaseModel):
  prompt: str
  userContext: dict[str, Any] = Field(default_factory=dict)
  missingFields: list[str] = Field(default_factory=list)


class RecommendationItem(BaseModel):
  targetService: Literal["cms", "crm"]
  title: str
  explanation: str
  payloadJson: dict[str, Any]
  requiresAdminConfirm: bool = False


class RecommendResponse(BaseModel):
  recommendations: list[RecommendationItem]
  provider: str = "heuristic"


class ArtifactCompileRequest(BaseModel):
  artifactName: str
  spec: dict[str, Any]


def normalize_artifact_name(value: str) -> str:
  normalized = value.strip().lower()
  if not ARTIFACT_NAME_RE.fullmatch(normalized):
    raise HTTPException(status_code=400, detail="Invalid artifact name")
  return normalized


def atomic_write(path: Path, content: bytes) -> None:
  path.parent.mkdir(parents=True, exist_ok=True)
  fd, temporary_name = tempfile.mkstemp(prefix=f".{path.name}.", dir=path.parent)
  try:
    with os.fdopen(fd, "wb") as temporary:
      temporary.write(content)
      temporary.flush()
      os.fsync(temporary.fileno())
    os.replace(temporary_name, path)
  except BaseException:
    try:
      os.unlink(temporary_name)
    except FileNotFoundError:
      pass
    raise


async def require_verified_session(authorization: str | None) -> None:
  if not authorization or not authorization.startswith("Bearer "):
    raise HTTPException(status_code=401, detail="Authentication required")
  async with httpx.AsyncClient(timeout=10.0) as client:
    try:
      response = await client.get(
        CMS_AUTH_SESSION_URL,
        headers={"authorization": authorization},
      )
    except httpx.HTTPError as exc:
      raise HTTPException(status_code=503, detail="Authentication service unavailable") from exc
  if response.status_code != 200:
    raise HTTPException(status_code=401, detail="Invalid session")


async def fetch_schema() -> dict[str, Any]:
  out: dict[str, Any] = {"cms": {}, "crm": {}}
  async with httpx.AsyncClient(timeout=15.0) as client:
    for key, url in (("cms", CMS_SCHEMA_URL), ("crm", CRM_SCHEMA_URL)):
      try:
        resp = await client.get(url)
        if resp.status_code == 200:
          out[key] = resp.json()
      except httpx.HTTPError:
        out[key] = {"error": "unavailable", "url": url}
  return out


async def fetch_retrieval_context(query: str) -> list[dict[str, Any]]:
  try:
    async with httpx.AsyncClient(timeout=5.0) as client:
      response = await client.post(
        f"{SEARCH_BASE_URL}public/search/query",
        json={"query": query[:500], "page": 1, "pageSize": 5},
      )
      if response.status_code != 200:
        return []
      payload = response.json()
      items = payload.get("items", [])
      return items if isinstance(items, list) else []
  except (httpx.HTTPError, ValueError, TypeError):
    return []


CONTACT_COMMAND_PREFIX_RE = re.compile(
  r"""^[\s«»\"']*
  (?:пожалуйста[,!\s]+|please[,!\s]+|pls[,!\s]+)?
  (?:
    (?:добав(?:ь|ьте|ить)|созда(?:й|йте|ть)|завед(?:и|ите|ить)|внеси(?:те)?|
       add|create|make)
    \s+
  )?
  (?:нов(?:ый|ого|ую|ое)\s+)?
  (?:crm[\s\-]*)?
  (?:контакт(?:а|у|ом)?|клиент(?:а|у|ом)?|contact|client)
  [\s,:.\-–—]*
  """,
  re.IGNORECASE | re.VERBOSE,
)
CONTACT_LABEL_PREFIX_RE = re.compile(
  r"^(?:crm[\s\-]*)?(?:контакт|contact)\s*[:\-–—]\s*",
  re.IGNORECASE,
)
CONTACT_INTENT_RE = re.compile(
  r"(?:crm[\s\-]*контакт|\bконтакт\b|\bcontact\b|\bclient\b|\bклиент\b)",
  re.IGNORECASE,
)
EMAIL_RE = re.compile(r"[\w.+-]+@[\w.-]+\.\w+")
PHONE_RE = re.compile(r"\+?\d[\d\s\-()]{8,}\d")


def strip_contact_command_prefix(text: str) -> str:
  cleaned = text.strip().strip("«»\"'")
  cleaned = CONTACT_COMMAND_PREFIX_RE.sub("", cleaned, count=1)
  cleaned = CONTACT_LABEL_PREFIX_RE.sub("", cleaned, count=1)
  return cleaned.strip(" \t:-")


def leftover_notes(source: str, *extracted: object) -> str | None:
  leftover = source
  for value in extracted:
    if isinstance(value, str) and value:
      leftover = leftover.replace(value, " ", 1)
  leftover = re.sub(r"\s+", " ", leftover).strip(" \t,;:-")
  return leftover[:500] if leftover else None


def parse_crm_contact_fields(prompt: str, ctx: dict[str, Any]) -> dict[str, Any]:
  full_name = ctx.get("fullName")
  phone = ctx.get("phone")
  email = ctx.get("email")
  rest = strip_contact_command_prefix(prompt)
  labeled = re.search(r"(?:crm[- ]?контакт|contact)\s*:\s*(.+)", rest, flags=re.I)
  if labeled:
    rest = labeled.group(1).strip()
  email_m = EMAIL_RE.search(rest)
  if email_m and not email:
    email = email_m.group(0)
  phone_m = PHONE_RE.search(rest)
  if phone_m and not phone:
    phone = re.sub(r"\s+", " ", phone_m.group(0)).strip()
  cut_at = min(
    (phone_m.start() if phone_m else len(rest)),
    (email_m.start() if email_m else len(rest)),
  )
  name_part = rest[:cut_at].strip(" \t:-")
  if isinstance(full_name, str) and full_name.strip():
    full_name = strip_contact_command_prefix(full_name)[:120]
  elif name_part:
    full_name = name_part[:120]
  notes = leftover_notes(rest, full_name, phone, email)
  out: dict[str, Any] = {
    "fullName": (full_name or "Новый клиент")[:120],
  }
  if notes:
    out["notes"] = notes
  if phone:
    out["phone"] = phone
  if email:
    out["email"] = email
  return out


def sanitize_crm_contact_payload(payload: dict[str, Any]) -> None:
  if payload.get("model") != "crmContact":
    return
  rows = payload.get("data")
  if not isinstance(rows, list):
    return
  for row in rows:
    if not isinstance(row, dict):
      continue
    name = row.get("fullName")
    if isinstance(name, str):
      row["fullName"] = strip_contact_command_prefix(name)[:120] or "Новый клиент"
    notes = row.get("notes")
    if isinstance(notes, str):
      cleaned = leftover_notes(
        strip_contact_command_prefix(notes),
        row.get("fullName"),
        row.get("phone"),
        row.get("email"),
      )
      if cleaned:
        row["notes"] = cleaned
      else:
        row.pop("notes", None)


def heuristic_recommend(body: RecommendRequest, schema: dict[str, Any]) -> list[RecommendationItem]:
  prompt = body.prompt.lower()
  items: list[RecommendationItem] = []
  if "лендинг" in prompt or "landing" in prompt or "promo" in prompt:
    items.append(
      RecommendationItem(
        targetService="cms",
        title="Обновить hero promo-блок",
        explanation="CMS: prisma-update-many на cmsPromoBlock.",
        payloadJson={
          "model": "cmsPromoBlock",
          "operation": "prisma-update-many",
          "data": [{"where": {"code": "hero-main"}, "data": {"headline": body.prompt[:120]}}],
        },
      )
    )
  if CONTACT_INTENT_RE.search(body.prompt):
    contact_data = parse_crm_contact_fields(body.prompt, body.userContext)
    items.append(
      RecommendationItem(
        targetService="crm",
        title="Создать CRM-контакт",
        explanation="CRM: prisma-create-many на crmContact (tenantId подставится из membership/seed при apply).",
        payloadJson={
          "model": "crmContact",
          "operation": "prisma-create-many",
          "data": [contact_data],
        },
      )
    )
  if not items:
    items.append(
      RecommendationItem(
        targetService="cms",
        title="Черновик статьи",
        explanation=f"DMMF cms={bool(schema.get('cms', {}).get('dmmf'))}",
        payloadJson={
          "model": "cmsArticle",
          "operation": "prisma-create-many",
          "data": [{"title": body.prompt[:80], "slug": f"draft-{int(time.time())}", "published": False, "bodyMarkdown": body.prompt}],
        },
        requiresAdminConfirm=True,
      )
    )
  for field in body.missingFields[:3]:
    items.append(
      RecommendationItem(
        targetService="cms",
        title=f"Уточнить: {field}",
        explanation="Недостающее поле для безопасного apply.",
        payloadJson={"askUserFor": field},
      )
    )
  return items


async def groq_recommend(
  body: RecommendRequest,
  retrieval_context: list[dict[str, Any]],
) -> list[RecommendationItem] | None:
  if not GROQ_API_KEY:
    return None
  schema = await fetch_schema()
  system = (
    "Return JSON array of recommendations. Each item: targetService (cms|crm), title, explanation, "
    "payloadJson with model, operation (from allowedOperations), and data. Only whitelisted models."
  )
  user = json.dumps(
    {
      "prompt": body.prompt,
      "context": body.userContext,
      "retrievalContext": retrieval_context,
      "schema": schema,
    },
    ensure_ascii=False,
  )
  async with httpx.AsyncClient(timeout=30.0) as client:
    resp = await client.post(
      "https://api.groq.com/openai/v1/chat/completions",
      headers={"Authorization": f"Bearer {GROQ_API_KEY}", "content-type": "application/json"},
      json={
        "model": "llama-3.3-70b-versatile",
        "messages": [{"role": "system", "content": system}, {"role": "user", "content": user}],
        "temperature": 0.2,
      },
    )
    if resp.status_code != 200:
      return None
    content = resp.json()["choices"][0]["message"]["content"]
    try:
      parsed = json.loads(content)
      if isinstance(parsed, dict) and "recommendations" in parsed:
        parsed = parsed["recommendations"]
      return [RecommendationItem(**item) for item in parsed]
    except (json.JSONDecodeError, TypeError, ValueError):
      return None


@app.get("/health")
def health() -> dict[str, str]:
  return {"status": "ok", "version": "0.2.0"}


@app.get("/schemas")
async def schemas() -> dict[str, Any]:
  return await fetch_schema()


@app.post("/recommend", response_model=RecommendResponse)
async def recommend(
  body: RecommendRequest,
  request: Request,
  x_correlation_id: str | None = Header(default=None),
) -> RecommendResponse:
  started = time.time()
  cid = x_correlation_id or "no-cid"
  schema = await fetch_schema()
  retrieval_context = await fetch_retrieval_context(body.prompt)
  provider = "heuristic"
  items: list[RecommendationItem] | None = await groq_recommend(
    body, retrieval_context
  )
  if items:
    provider = "groq"
  else:
    items = heuristic_recommend(body, schema)

  for item in items:
    op = item.payloadJson.get("operation")
    if op and op not in ALLOWED_OPS:
      item.payloadJson["operation"] = "prisma-create-many"
    sanitize_crm_contact_payload(item.payloadJson)

  latency = int((time.time() - started) * 1000)
  GENERATED_ROOT.mkdir(parents=True, exist_ok=True)
  log_path = GENERATED_ROOT / "ai-call-log.jsonl"
  log_path.open("a", encoding="utf-8").write(
    json.dumps(
      {
        "correlationId": cid,
        "provider": provider,
        "latencyMs": latency,
        "promptChars": len(body.prompt),
        "responseCount": len(items),
      },
      ensure_ascii=False,
    )
    + "\n"
  )
  return RecommendResponse(recommendations=items, provider=provider)


@app.post("/artifacts/compile")
async def compile_artifact(
  body: ArtifactCompileRequest,
  authorization: str | None = Header(default=None),
) -> dict[str, str]:
  await require_verified_session(authorization)
  artifact_name = normalize_artifact_name(body.artifactName)
  root = GENERATED_ROOT.resolve()
  root.mkdir(parents=True, exist_ok=True)
  json_path = root / f"{artifact_name}.json"
  yaml_path = root / f"{artifact_name}.yaml"
  manifest_path = root / f"{artifact_name}.manifest.json"

  json_bytes = json.dumps(body.spec, ensure_ascii=False, indent=2).encode("utf-8")
  yaml_bytes = yaml.safe_dump(body.spec, allow_unicode=True).encode("utf-8")
  if len(json_bytes) > MAX_ARTIFACT_BYTES or len(yaml_bytes) > MAX_ARTIFACT_BYTES:
    raise HTTPException(status_code=413, detail="Artifact is too large")

  atomic_write(json_path, json_bytes)
  atomic_write(yaml_path, yaml_bytes)
  manifest = {
    "artifactName": artifact_name,
    "sha256": {
      "json": hashlib.sha256(json_bytes).hexdigest(),
      "yaml": hashlib.sha256(yaml_bytes).hexdigest(),
    },
    "size": {"json": len(json_bytes), "yaml": len(yaml_bytes)},
  }
  atomic_write(
    manifest_path,
    json.dumps(manifest, ensure_ascii=False, indent=2).encode("utf-8"),
  )
  return {
    "json": str(json_path),
    "yaml": str(yaml_path),
    "manifest": str(manifest_path),
  }


if __name__ == "__main__":
  import uvicorn

  # In-container listen port (compose maps host PYTHON_CODING_PORT → 8200).
  # Do not reuse PYTHON_CODING_PORT here — that env is the published host port (e.g. 4503).
  port = int(os.environ.get("PORT", "8200"))
  uvicorn.run(app, host="0.0.0.0", port=port)
