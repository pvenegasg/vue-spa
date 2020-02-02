FROM node:12-alpine

WORKDIR /app

COPY package.json yarn.lock ./

COPY . .

RUN yarn install