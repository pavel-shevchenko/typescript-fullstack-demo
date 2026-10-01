#!/bin/sh
set -eu

ENDPOINT="http://${SEAWEEDFS_S3_HOST:-seaweedfs}:${SEAWEEDFS_S3_PORT:-8333}"
export AWS_ACCESS_KEY_ID="${SEAWEEDFS_S3_ACCESS_KEY:?SEAWEEDFS_S3_ACCESS_KEY is required}"
export AWS_SECRET_ACCESS_KEY="${SEAWEEDFS_S3_SECRET_KEY:?SEAWEEDFS_S3_SECRET_KEY is required}"
export AWS_DEFAULT_REGION="${SEAWEEDFS_S3_REGION:-us-east-1}"
BUCKET="${SEAWEEDFS_S3_DEFAULT_BUCKET:?SEAWEEDFS_S3_DEFAULT_BUCKET is required}"

until aws --endpoint-url "$ENDPOINT" s3 ls >/dev/null 2>&1; do
  echo '...waiting for SeaweedFS S3...'
  sleep 1
done

aws --endpoint-url "$ENDPOINT" s3 mb "s3://${BUCKET}" 2>/dev/null || true
echo "SeaweedFS bucket ready: ${BUCKET}"
exec sleep inf
