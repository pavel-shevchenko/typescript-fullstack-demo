# C4: архитектура Comfort

Диаграммы описывают текущие границы. Стрелки между Next.js и API — прямые вызовы; отдельного
gateway/BFF нет.

## System context

```mermaid
C4Context
  title System context
  Person(customer, "Customer", "Читает контент и работает со своим CRM tenant")
  Person(admin, "Administrator", "Управляет CMS, CRM и подтверждает AI-рекомендации")
  System(comfort, "Comfort", "SSR-сайт, CMS, CRM и подтверждаемые AI-рекомендации")
  System_Ext(llm, "LLM provider", "Опциональный генератор рекомендаций")
  Rel(customer, comfort, "HTTPS")
  Rel(admin, comfort, "HTTPS")
  Rel(comfort, llm, "HTTPS, optional")
```

## Container

```mermaid
C4Container
  title Container view
  Person(user, "User")
  Container(web, "comfort_public", "Next.js", "SSR, UI и server actions use-case layer")
  Container(cms, "api-cms", "Hono", "Контент, auth, AI pending и audit")
  Container(crm, "api-crm", "Hono", "Tenant-scoped CRM")
  Container(coding, "python-coding", "FastAPI", "DMMF-aware recommendation drafts")
  ContainerDb(cmsdb, "CMS PostgreSQL", "PostgreSQL", "CMS/auth/AI/audit")
  ContainerDb(crmdb, "CRM PostgreSQL", "PostgreSQL", "Tenant CRM")
  ContainerDb(redis, "Redis", "Redis", "Throttle/cache")
  ContainerDb(files, "SeaweedFS", "S3-compatible", "Файлы")
  Rel(user, web, "HTTPS")
  Rel(web, cms, "Direct HTTP")
  Rel(web, crm, "Direct HTTP")
  Rel(web, coding, "Direct HTTP via server action")
  Rel(coding, cms, "Schema HTTP")
  Rel(coding, crm, "Schema HTTP")
  Rel(cms, cmsdb, "Prisma through PgCat")
  Rel(crm, crmdb, "Prisma through PgCat")
  Rel(cms, redis, "Cache/throttle")
  Rel(crm, redis, "Cache/throttle")
  Rel(cms, files, "S3 API")
  Rel(crm, files, "S3 API")
```

## Deployment

```mermaid
C4Deployment
  title Main deployment
  Deployment_Node(host, "VPS", "Docker host") {
    Deployment_Node(edge, "Edge network") {
      Container(caddy, "Caddy", "TLS and branch routing")
      Container(web, "comfort_public", "Next.js")
      Container(cms, "api-cms", "Hono")
      Container(crm, "api-crm", "Hono")
      Container(coding, "python-coding", "FastAPI")
    }
    Deployment_Node(data, "Database network") {
      ContainerDb(cmscluster, "CMS cluster", "Primary + 2 replicas + PgCat")
      ContainerDb(crmcluster, "CRM cluster", "Primary + 2 replicas + PgCat")
      ContainerDb(redis, "Redis", "Cache/throttle")
    }
    Deployment_Node(objectstore, "SeaweedFS network") {
      ContainerDb(files, "SeaweedFS", "S3-compatible storage")
    }
  }
  Rel(caddy, web, "HTTP")
  Rel(web, cms, "Direct HTTP")
  Rel(web, crm, "Direct HTTP")
  Rel(web, coding, "Direct HTTP")
  Rel(cms, cmscluster, "PostgreSQL")
  Rel(crm, crmcluster, "PostgreSQL")
  Rel(cms, redis, "Redis")
  Rel(crm, redis, "Redis")
  Rel(cms, files, "S3")
  Rel(crm, files, "S3")
```

В test/local CI каждый PostgreSQL-кластер заменяется одним узлом; границы баз и публичные
контракты не меняются.
