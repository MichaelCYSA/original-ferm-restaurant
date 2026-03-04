FROM node:22-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

FROM node:20-alpine AS runner
RUN apk add --no-cache libc6-compat

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/.next/standalone   ./
COPY --from=builder /app/.next/static       ./.next/static
COPY --from=builder /app/public             ./public        

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    chown -R nextjs:nodejs /app && \
    mkdir -p .next/cache/images && \
    chown -R nextjs:nodejs .next

USER nextjs

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

EXPOSE 3000
CMD ["node", "server.js"]