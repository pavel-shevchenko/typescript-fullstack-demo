pipelineJob('comfort_main_branch_pipeline') {
  definition {
    cps {
      script(
'''pipeline {
  agent { label 'agent_w_docker' }
  triggers {
    GenericTrigger(
      genericVariables: [
        [key: 'FORGEJO_REF', value: '$.ref']
      ],
      tokenCredentialId: 'forgejo-webhook-token',
      causeString: 'Forgejo push $FORGEJO_REF',
      printContributedVariables: true,
      printPostContent: false,
      regexpFilterText: '$FORGEJO_REF',
      regexpFilterExpression: 'refs/heads/main'
    )
  }
  options {
    disableConcurrentBuilds()
    lock(resource: 'comfort-production-deployment', inversePrecedence: true)
    timeout(time: 30, unit: 'MINUTES')
  }
  environment { DEPLOYED = 'false' }
  stages {
    stage('Checkout') {
      steps {
        dir('/home/jenkins/agent/bind_host_srv_apps/') {
          sh 'rm -rf comfort_main_branch_monorepo_temp'
          checkout([$class: 'GitSCM',
            branches: [[name: 'main']],
            doGenerateSubmoduleConfigurations: false,
            extensions: [
              [$class: 'CleanBeforeCheckout'],
              [$class: 'SubmoduleOption', disableSubmodules: false, parentCredentials: true,
                recursiveSubmodules: true, trackingSubmodules: false],
              [$class: 'RelativeTargetDirectory', relativeTargetDir: 'comfort_main_branch_monorepo_temp/']
            ],
            submoduleCfg: [],
            userRemoteConfigs: [[credentialsId: 'forgejo-ssh-key',
              url: env.COMFORT_FORGEJO_REPOSITORY_SSH_URL]]
          ])
        }
      }
    }
    stage('Quality gates') {
      steps {
        dir('/home/jenkins/agent/bind_host_srv_apps/comfort_main_branch_monorepo_temp') {
          sh @@@#!/bin/sh
            set -eu
            bun install --frozen-lockfile
            bun run typecheck
            bun run test:focused
          @@@
        }
      }
    }
    stage('Validate and deploy') {
      steps {
        dir('/home/jenkins/agent/bind_host_srv_apps/') {
          withCredentials([
            string(credentialsId: 'comfort-jwt-secret', variable: 'DEPLOY_JWT_SECRET'),
            string(credentialsId: 'comfort-pg-password', variable: 'DEPLOY_PG_PASSWORD'),
            string(credentialsId: 'comfort-pgcat-admin-password', variable: 'DEPLOY_PGCAT_PASSWORD'),
            string(credentialsId: 'comfort-seaweedfs-access-key', variable: 'DEPLOY_S3_ACCESS_KEY'),
            string(credentialsId: 'comfort-seaweedfs-secret-key', variable: 'DEPLOY_S3_SECRET_KEY'),
            string(credentialsId: 'comfort-openai-api-key', variable: 'DEPLOY_OPENAI_API_KEY'),
            string(credentialsId: 'comfort-groq-api-key', variable: 'DEPLOY_GROQ_API_KEY'),
            string(credentialsId: 'comfort-smtp-password', variable: 'DEPLOY_SMTP_PASSWORD'),
            string(credentialsId: 'comfort-infisical-token', variable: 'DEPLOY_INFISICAL_TOKEN')
          ]) {
          sh @@@#!/bin/sh
            set -eu
            cd comfort_main_branch_monorepo_temp
            export _JWT_SECRET="$DEPLOY_JWT_SECRET"
            export _PG_PASSWORD="$DEPLOY_PG_PASSWORD"
            export _PGCAT_ADMIN_PASSWORD="$DEPLOY_PGCAT_PASSWORD"
            export _SEAWEEDFS_S3_ACCESS_KEY="$DEPLOY_S3_ACCESS_KEY"
            export _SEAWEEDFS_S3_SECRET_KEY="$DEPLOY_S3_SECRET_KEY"
            export _OPENAI_API_KEY="$DEPLOY_OPENAI_API_KEY"
            export _GROQ_API_KEY="$DEPLOY_GROQ_API_KEY"
            export _SMTP_PASSWORD="$DEPLOY_SMTP_PASSWORD"
            export _INFISICAL_TOKEN="$DEPLOY_INFISICAL_TOKEN"
            required="_DOMAIN_MAIN_BRANCH _NEXT_PUBLIC_SERVER_URL _JWT_SECRET _PG_PASSWORD _PGCAT_ADMIN_PASSWORD _SEAWEEDFS_S3_ACCESS_KEY _SEAWEEDFS_S3_SECRET_KEY _SEAWEEDFS_S3_DEFAULT_BUCKET"
            for name in $required; do
              eval "value=\\${$name:-}"
              [ -n "$value" ] || { echo "Required deployment variable $name is empty" >&2; exit 1; }
            done
            envsubst < .env.template > .env
            if grep -Eq '\\$\\{[^}]+\\}' .env; then
              echo "Unresolved placeholder remains in generated .env" >&2
              exit 1
            fi
          @@@
          sh @@@#!/bin/sh
            set -eu
            rm -rf comfort_main_branch_monorepo_previous
            if [ -d comfort_main_branch_monorepo_run ]; then
              mv comfort_main_branch_monorepo_run comfort_main_branch_monorepo_previous
            fi
            mv comfort_main_branch_monorepo_temp comfort_main_branch_monorepo_run
            cd comfort_main_branch_monorepo_run
            CONTAINER_NAME_PREFIX="${MAIN_BR_MONO_CONTAINER_PREFIX}" \
            MONOREPO_ABS_PATH="${MAIN_BR_MONO_ABS_PATH}" \
            BACKUP_DATA_ABS_PATH="${MAIN_BR_BUP_DATA_ABS_PATH}" \
            docker compose -p comfort-main -f docker-compose-prod-common.yml -f docker-compose-for-main-branch.yml up -d --build --remove-orphans
          @@@
          script { env.DEPLOYED = 'true' }
          }
        }
      }
    }
    stage('Smoke through DinD') {
      steps {
        dir('/home/jenkins/agent/bind_host_srv_apps/comfort_main_branch_monorepo_run') {
          sh @@@#!/bin/sh
            set -eu
            probe() {
              url="$1"
              attempt=1
              while [ "$attempt" -le 30 ]; do
                curl --connect-timeout 2 --max-time 5 -fsS "$url" >/dev/null && return 0
                attempt=$((attempt + 1))
                sleep 4
              done
              echo "Smoke probe failed after 30 attempts: $url" >&2
              return 1
            }
            probe "http://docker:${MAIN_BRANCH_API_CMS_PORT}/api-cms/public/coding/schema"
            probe "http://docker:${MAIN_BRANCH_API_CRM_PORT}/api-crm/public/coding/schema"
            probe "http://docker:${MAIN_BRANCH_API_SEARCH_PORT}/api-search/health"
            probe "http://docker:${MAIN_BRANCH_FRONTEND_PORT}/"
            docker compose -p comfort-main -f docker-compose-prod-common.yml -f docker-compose-for-main-branch.yml exec -T python-coding python -c "import urllib.request; urllib.request.urlopen('http://127.0.0.1:8200/health', timeout=5)"
          @@@
        }
      }
    }
    stage('Playwright E2E smoke') {
      options { timeout(time: 12, unit: 'MINUTES') }
      steps {
        dir('/home/jenkins/agent/bind_host_srv_apps/comfort_main_branch_monorepo_run') {
          withCredentials([string(credentialsId: 'comfort-main-e2e-admin-password',
            variable: 'E2E_ADMIN_PASSWORD_SECRET')]) {
            sh @@@#!/bin/sh
            set -eu
            set +x
            for name in MAIN_BRANCH_E2E_ADMIN_EMAIL E2E_ADMIN_PASSWORD_SECRET; do
              eval "value=\\${$name:-}"
              [ -n "$value" ] || { echo "Required E2E credential $name is empty" >&2; exit 1; }
            done

            artifact_dir="${WORKSPACE}/e2e-artifacts"
            env_file="${WORKSPACE}/.e2e-main.env"
            container_name="comfort-main-e2e-${BUILD_NUMBER}"
            rm -rf "$artifact_dir"
            mkdir -p "$artifact_dir"
            umask 077
            printf '%s\n' \
              "CI=true" \
              "E2E_BASE_URL=${MAIN_BRANCH_E2E_BASE_URL}" \
              "E2E_CMS_URL=${MAIN_BRANCH_E2E_CMS_URL}" \
              "E2E_CRM_URL=${MAIN_BRANCH_E2E_CRM_URL}" \
              "E2E_SEARCH_URL=${MAIN_BRANCH_E2E_SEARCH_URL}" \
              "E2E_ADMIN_EMAIL=${MAIN_BRANCH_E2E_ADMIN_EMAIL}" \
              "E2E_ADMIN_PASSWORD=${E2E_ADMIN_PASSWORD_SECRET}" > "$env_file"

            cleanup() {
              rm -f "$env_file"
              docker rm -f "$container_name" >/dev/null 2>&1 || true
            }
            trap cleanup EXIT INT TERM

            set +e
            docker run --name "$container_name" --rm \
              --user 0:0 \
              --add-host docker:host-gateway \
              --shm-size=1gb \
              --env-file "$env_file" \
              -e HOST_UID="$(id -u)" \
              -e HOST_GID="$(id -g)" \
              -v "$(pwd):/workspace" \
              -w /workspace \
              oven/bun:1.2.23 \
              sh -lc 'bun install --frozen-lockfile; install_status=$?; if [ "$install_status" -eq 0 ]; then bunx playwright install --with-deps chromium; install_status=$?; fi; if [ "$install_status" -eq 0 ]; then bun run e2e:smoke; install_status=$?; fi; chown -R "$HOST_UID:$HOST_GID" /workspace; exit "$install_status"'
            status=$?
            set -e

            for source in applications/comfort_public/playwright-report applications/comfort_public/test-results; do
              if [ -d "$source" ]; then cp -R "$source" "$artifact_dir/"; fi
            done
            exit "$status"
            @@@
          }
        }
      }
    }
  }
  post {
    success {
      dir('/home/jenkins/agent/bind_host_srv_apps/') {
        sh 'rm -rf comfort_main_branch_monorepo_previous; docker image prune -f --filter until=168h'
      }
    }
    failure {
      dir('/home/jenkins/agent/bind_host_srv_apps/') {
        sh @@@#!/bin/sh
          set -u
          if [ "${DEPLOYED}" = "true" ] && [ -d comfort_main_branch_monorepo_previous ]; then
            if [ -d comfort_main_branch_monorepo_run ]; then
              cd comfort_main_branch_monorepo_run
              docker compose -p comfort-main -f docker-compose-prod-common.yml -f docker-compose-for-main-branch.yml down --remove-orphans || true
              cd ..
              rm -rf comfort_main_branch_monorepo_run
            fi
            mv comfort_main_branch_monorepo_previous comfort_main_branch_monorepo_run
            cd comfort_main_branch_monorepo_run
            CONTAINER_NAME_PREFIX="${MAIN_BR_MONO_CONTAINER_PREFIX}" MONOREPO_ABS_PATH="${MAIN_BR_MONO_ABS_PATH}" BACKUP_DATA_ABS_PATH="${MAIN_BR_BUP_DATA_ABS_PATH}" \
              docker compose -p comfort-main -f docker-compose-prod-common.yml -f docker-compose-for-main-branch.yml up -d --remove-orphans
          fi
        @@@
      }
    }
    always {
      dir('/home/jenkins/agent/bind_host_srv_apps/') {
        sh 'docker rm -f "comfort-main-e2e-${BUILD_NUMBER}" >/dev/null 2>&1 || true; rm -rf comfort_main_branch_monorepo_temp'
      }
      archiveArtifacts artifacts: 'e2e-artifacts/playwright-report/**,e2e-artifacts/test-results/**',
        allowEmptyArchive: true, fingerprint: false
      cleanWs(deleteDirs: true)
    }
  }
}'''.replace('@@@', "'''"))
      sandbox()
    }
  }
}
