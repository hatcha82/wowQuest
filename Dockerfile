FROM node:8


# /app 디렉토리 생성
RUN mkdir -p /app
# /app 디렉토리를 WORKDIR 로 설정
WORKDIR /app
# 현재 Dockerfile 있는 경로의 모든 파일을 /app 에 복사
ADD . /app
RUN npm install

WORKDIR /app/backend
# npm install 을 실행
RUN npm install

WORKDIR /app/frontend
# npm install 을 실행
RUN npm install
RUN npm run build

#환경변수 NODE_ENV 의 값을 development 로 설정
ENV NODE_ENV development

WORKDIR /app

#가상 머신에 오픈할 포트
EXPOSE 3000 3000
EXPOSE 8081 8081

#컨테이너에서 실행될 명령을 지정
CMD ["npm", "start"]