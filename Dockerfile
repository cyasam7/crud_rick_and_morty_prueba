FROM node:16.4-alpine

WORKDIR /app

COPY . .

RUN yarn install --production

CMD [ "npm", "start" ]