# build environment
FROM node:19-buster as builder
WORKDIR /build
ENV PATH /build/node_modules/.bin:$PATH
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build --verbose

# production environment
FROM node:19-alpine
WORKDIR /

RUN yarn global add serve
COPY --from=builder /build/public dist
COPY --from=builder /build/serve.json dist

EXPOSE 8080
CMD serve -s dist -l 8080

