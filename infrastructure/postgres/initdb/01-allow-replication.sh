#!/bin/sh
set -eu
cat >> "$PGDATA/pg_hba.conf" <<'EOF'

host replication all 0.0.0.0/0 md5
host all all 0.0.0.0/0 md5
EOF
