#!/bin/bash

# 빌드 스크립트 - 로컬에서 실행
echo "🚀 파티벨롭 웹사이트 빌드 시작..."

# 1. 의존성 설치
echo "📦 의존성 설치 중..."
npm ci

# 2. Next.js 빌드
echo "🔨 Next.js 애플리케이션 빌드 중..."
npm run build

# 3. build 디렉토리 생성 및 파일 복사
echo "📁 build 디렉토리 준비 중..."
rm -rf build
mkdir -p build

# standalone 빌드의 중첩 구조를 평평하게 만들기
if [ -d ".next/standalone/webWorkspace/partybox-company" ]; then
    echo "📦 standalone 빌드 파일 복사 중..."
    
    # server.js와 node_modules 복사
    cp -r .next/standalone/webWorkspace/partybox-company/server.js build/
    cp -r .next/standalone/webWorkspace/partybox-company/node_modules build/
    cp -r .next/standalone/webWorkspace/partybox-company/package.json build/
    
    # .next 디렉토리 복사 (중요!)
    cp -r .next/standalone/webWorkspace/partybox-company/.next build/
    
    # static 파일들 복사 (클라이언트 측 자산)
    cp -r .next/static build/.next/
    
    # public 디렉토리 복사
    cp -r public build/
else
    echo "❌ standalone 빌드를 찾을 수 없습니다."
    exit 1
fi

# Dockerfile을 build 디렉토리에 복사 (Docker 빌드 시 필요)
cp Dockerfile.production build/Dockerfile

echo "✅ 빌드 완료!"
echo ""
echo "📁 build 디렉토리 내용:"
ls -la build/
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📌 서버 배포 가이드:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1️⃣  build 디렉토리를 서버로 복사:"
echo "   scp -r build/* user@your-server:/app/"
echo ""
echo "2️⃣  docker-compose 파일 복사:"
echo "   scp docker-compose.production.yml user@your-server:/app/"
echo ""
echo "3️⃣  서버에서 Docker 이미지 빌드 및 실행:"
echo "   ssh user@your-server"
echo "   cd /app"
echo "   docker build -t partyvelope-web:latest ."
echo "   docker network create partybox-network  # (처음 한 번만)"
echo "   docker-compose -f docker-compose.production.yml up -d"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"