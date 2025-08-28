# Production runtime image - build 디렉토리 기반
FROM node:20-alpine

WORKDIR /app

# Create a non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Copy pre-built files
# 이 파일들은 로컬에서 npm run build 후 생성된 파일들입니다
COPY --chown=nextjs:nodejs .next/standalone ./
COPY --chown=nextjs:nodejs .next/static ./.next/static
COPY --chown=nextjs:nodejs public ./public

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV NODE_ENV production
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]