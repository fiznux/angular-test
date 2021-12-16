FROM node:14-alpine as build

COPY ./ulventech /app/

WORKDIR /app

RUN npm install -g ionic
RUN npm install
RUN ionic build --prod

EXPOSE 80/tcp

FROM nginx:1.17.1-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/www /usr/share/nginx/html
