#!/bin/sh
set -eu

# JCasC must receive the decoded key, never the transport-safe base64 value.
if [ -n "${FORGEJO_SSH_PRIVATE_KEY_IN_BASE64:-}" ]; then
  umask 077
  decoded_key="$(printf '%s' "${FORGEJO_SSH_PRIVATE_KEY_IN_BASE64}" | base64 -d 2>/dev/null)" || {
    echo "Invalid FORGEJO_SSH_PRIVATE_KEY_IN_BASE64" >&2
    exit 1
  }
  case "${decoded_key}" in
    *"BEGIN "*"PRIVATE KEY"*) ;;
    *)
      echo "Decoded Forgejo SSH key is not a private key" >&2
      exit 1
      ;;
  esac
  export FORGEJO_SSH_PRIVATE_KEY="${decoded_key}"
  unset decoded_key FORGEJO_SSH_PRIVATE_KEY_IN_BASE64
fi

exec /sbin/tini -- /usr/local/bin/jenkins.sh "$@"
