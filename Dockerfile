FROM node:14.16.1-alpine3.10

RUN apk add g++ make python
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npx webpack --env=prod
CMD ["node", "server.js"]

EXPOSE 3000
