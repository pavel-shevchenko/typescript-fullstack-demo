ARG SEARCH_POSTGRES_IMAGE=pgvector/pgvector:0.8.6-pg18
FROM ${SEARCH_POSTGRES_IMAGE}

# Hunspell RU/EN come from distro packages at build time (not from the git repo).
# Stay root like the official postgres image: entrypoint must mkdir/chown
# /var/lib/postgresql before gosu to postgres.
USER root
ENV DEBIAN_FRONTEND=noninteractive
COPY install-hunspell-tsearch.sh /usr/local/bin/install-hunspell-tsearch.sh
RUN sed -i 's/\r$//' /usr/local/bin/install-hunspell-tsearch.sh \
  && chmod +x /usr/local/bin/install-hunspell-tsearch.sh \
  && /usr/local/bin/install-hunspell-tsearch.sh
