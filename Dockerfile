FROM node:latest

RUN mkdir /web
WORKDIR /web

COPY package.json /package.json
COPY yarn.lock /yarn.lock
RUN yarn

COPY . .

CMD yarn start
