FROM node:14-alpine
RUN apk add --no-cache python g++ make
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build
RUN yarn start