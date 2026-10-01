FROM jenkins/agent:latest

USER root

# Install docker cli
# RUN apt update && curl -fsSL https://get.docker.com | sh
RUN apt-get update && apt-get install -y lsb-release
RUN curl -fsSLo /usr/share/keyrings/docker-archive-keyring.asc \
  https://download.docker.com/linux/debian/gpg
RUN echo "deb [arch=$(dpkg --print-architecture) \
  signed-by=/usr/share/keyrings/docker-archive-keyring.asc] \
  https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" > /etc/apt/sources.list.d/docker.list
RUN apt-get update && apt-get install -y docker-ce-cli

# Install envsubst
RUN apt-get update && apt-get install -y gettext-base

# Pinned Bun runtime for pre-deploy typecheck and focused tests.
RUN curl -fsSL https://bun.sh/install | bash -s "bun-v1.2.23" \
  && install -m 0755 /root/.bun/bin/bun /usr/local/bin/bun

# Add jenkins user to docker group
ARG DOCKERGID=988
# Release DOCKERGID for reuse
RUN set -eux; \
  existing_group="$(getent group "${DOCKERGID}" | cut -d: -f1 || true)"; \
  if [ -n "${existing_group}" ]; then groupdel "${existing_group}"; fi

# Setup users and groups
RUN addgroup --gid ${DOCKERGID} docker
RUN usermod -aG docker jenkins

# Ensures that /var/run/docker.sock exists
RUN touch /var/run/docker.sock

# Changes the ownership of /var/run/docker.sock and gives jenkins user permissions to access /var/run/docker.sock
RUN chgrp docker /var/run/docker.sock && chown root:docker /var/run/docker.sock

USER jenkins
