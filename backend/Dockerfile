FROM node:16.10.0-alpine

ENV MODE=production

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN yarn
RUN yarn build

CMD ["yarn", "start"]
