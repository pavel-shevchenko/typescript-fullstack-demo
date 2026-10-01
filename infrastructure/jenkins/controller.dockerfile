FROM jenkins/jenkins:2.522-alpine

USER root

COPY --chown=jenkins:jenkins plugins.txt /usr/share/jenkins/ref/plugins.txt
COPY --chown=jenkins:jenkins entrypoint.sh /usr/local/bin/entrypoint.sh

RUN chmod +x /usr/local/bin/entrypoint.sh

# Add jenkins user to docker group
ARG DOCKERGID=988
# Release DOCKERGID for reuse
RUN getent group ${DOCKERGID} | cut -d: -f1 | xargs -I{} delgroup {}

# Setup users and groups
RUN addgroup --gid ${DOCKERGID} docker
RUN addgroup jenkins docker

USER jenkins

RUN jenkins-plugin-cli --plugin-file /usr/share/jenkins/ref/plugins.txt

ENV JAVA_OPTS -Djenkins.install.runSetupWizard=false

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
