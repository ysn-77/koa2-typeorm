FROM node:10.15.1-alpine
RUN apk add --no-cache --virtual .gyp \
  python \
  make

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4001
EXPOSE 5858

ENTRYPOINT ["./entrypoint.sh"]
CMD ["node", "./bin/server"]
