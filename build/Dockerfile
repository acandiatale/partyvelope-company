# Production runtime image - build 디렉토리 기반
FROM node:20-alpine

WORKDIR /app

# Create a non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Copy pre-built files from build directory
COPY --chown=nextjs:nodejs . ./

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV NODE_ENV production
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]