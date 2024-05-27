FROM public.ecr.aws/docker/library/node:20.12.2-slim AS base
WORKDIR /usr/src/app
RUN chown -R node:node /usr/src/app && chmod -R 770 /usr/src/app

## for local development
FROM base AS development
ENV NODE_ENV development


## for builer stage
FROM base AS builder
COPY --chown=node:node backend .
RUN npm install -g @nestjs/cli@10.2.1 \
  && npm install --omit=dev \
  && npm run build \
  && npm cache clean --force


## for produuction
FROM base AS production
ENV NODE_ENV production
COPY --chown=node:node --from=builder /usr/src/app/package*.json ./
COPY --chown=node:node --from=builder /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=builder /usr/src/app/dist ./dist
EXPOSE 3001
USER node
CMD ["node", "dist/main.js"]