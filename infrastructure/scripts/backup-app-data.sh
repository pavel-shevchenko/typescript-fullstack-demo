#!/bin/sh
# App-data only: Postgres + SeaweedFS bind trees under *_branch_backup_data/.
# Usage: backup-app-data.sh main|test [/backup/comfort]
set -eu
branch=${1:?usage: backup-app-data.sh main|test [dest_root]}
dest_root=${2:-/backup/comfort}
src="/srv/comfort_apps/comfort_${branch}_branch_backup_data"
dest="${dest_root}/${branch}"
[ -d "$src" ] || { echo "missing $src" >&2; exit 1; }
mkdir -p "$dest"
rsync -aH --delete "$src/" "$dest/"
echo "ok $src -> $dest"
