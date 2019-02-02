# Build static site
FROM node:latest as builder

RUN mkdir /web
WORKDIR /web

COPY package.json /package.json
COPY yarn.lock /yarn.lock
RUN yarn

COPY . .
RUN yarn run build

# Serve static files from nginx and proxy to api
FROM nginx:stable

COPY --from=builder /web/build/ /var/www
COPY nginx.conf /etc/nginx/nginx.conf

CMD nginx
