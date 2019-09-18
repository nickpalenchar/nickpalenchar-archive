FROM node:8.16.0-alpine

WORKDIR /code

COPY . .

RUN npm install

CMD ["node", "server.js"]
