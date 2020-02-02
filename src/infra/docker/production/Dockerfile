FROM node:12-alpine

WORKDIR /app
COPY package.json yarn.lock ./
COPY . .
RUN yarn install
RUN yarn compile

FROM nginx:mainline-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY src/infra/nginx/conf.d /etc/nginx/conf.d
COPY --from=0 /app/dist /usr/share/nginx/html