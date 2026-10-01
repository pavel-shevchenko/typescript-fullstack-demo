#!/bin/sh
set -eu
PRIMARY_HOST="${PRIMARY_HOST:?}"
SLOT="${SLOT:?}"
if [ ! -s "$PGDATA/PG_VERSION" ]; then
  rm -rf "$PGDATA"/*
  until pg_isready -h "$PRIMARY_HOST" -p 5432 -U "$POSTGRES_USER"; do
    sleep 2
  done
  until pg_basebackup -h "$PRIMARY_HOST" -p 5432 -D "$PGDATA" -U "$POSTGRES_USER" -Fp -Xs -P -R --create-slot --slot="$SLOT"; do
    sleep 2
  done
fi
chown -R postgres:postgres /var/lib/postgresql
exec docker-entrypoint.sh postgres -c hot_standby=on
