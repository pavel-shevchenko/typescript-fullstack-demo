#!/bin/sh
# Install hunspell RU/EN from distro packages into PostgreSQL tsearch_data.
# Build fails if en_us / ru_ru files are missing (no silent snowball-only image).
set -eu

if command -v pg_config >/dev/null 2>&1; then
  PG_CONFIG=$(command -v pg_config)
else
  PG_CONFIG=$(ls /usr/lib/postgresql/*/bin/pg_config 2>/dev/null | head -n 1)
fi
if [ -z "${PG_CONFIG:-}" ] || [ ! -x "$PG_CONFIG" ]; then
  echo "FATAL: pg_config not found" >&2
  exit 1
fi

TSEARCH="$("$PG_CONFIG" --sharedir)/tsearch_data"
mkdir -p "$TSEARCH"

if command -v apk >/dev/null 2>&1; then
  apk add --no-cache hunspell-en hunspell-ru || apk add --no-cache hunspell-en-us hunspell-ru
else
  export DEBIAN_FRONTEND=noninteractive
  apt-get update
  apt-get install -y --no-install-recommends hunspell-en-us hunspell-ru
  rm -rf /var/lib/apt/lists/*
fi

find_hunspell() {
  iname="$1"
  find /usr/share/hunspell /usr/share/myspell /usr/share/hunspell/dicts \
    -iname "$iname" 2>/dev/null | head -n 1
}

install_pair() {
  dest="$1"
  aff_name="$2"
  dic_name="$3"
  aff=$(find_hunspell "$aff_name")
  dic=$(find_hunspell "$dic_name")
  if [ -z "$aff" ] || [ -z "$dic" ] || [ ! -f "$aff" ] || [ ! -f "$dic" ]; then
    echo "FATAL: hunspell sources for ${dest} not found (${aff_name} / ${dic_name})" >&2
    echo "looked under /usr/share/hunspell and /usr/share/myspell:" >&2
    ls -la /usr/share/hunspell /usr/share/myspell 2>/dev/null || true
    exit 1
  fi
  cp "$aff" "$TSEARCH/${dest}.affix"
  cp "$dic" "$TSEARCH/${dest}.dict"
  chmod 644 "$TSEARCH/${dest}.affix" "$TSEARCH/${dest}.dict"
  echo "tsearch: ${dest} <- ${aff} + ${dic}"
}

install_pair en_us en_US.aff en_US.dic
install_pair ru_ru ru_RU.aff ru_RU.dic

for f in en_us.affix en_us.dict ru_ru.affix ru_ru.dict; do
  if [ ! -s "$TSEARCH/$f" ]; then
    echo "FATAL: missing $TSEARCH/$f" >&2
    exit 1
  fi
done

echo "tsearch: hunspell dictionaries ready in $TSEARCH"
ls -l "$TSEARCH"/en_us.* "$TSEARCH"/ru_ru.*
