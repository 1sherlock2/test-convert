FROM node:16.10.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV PORT=4000
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --silent
RUN yarn global add react-scripts@5.0.1

COPY . .

# start app
CMD ["yarn", "start"]