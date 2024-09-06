FROM denoland/deno:bin-2.0.0-rc.1 AS deno
FROM mcr.microsoft.com/devcontainers/typescript-node:latest
COPY --from=deno /deno /usr/local/bin/deno
