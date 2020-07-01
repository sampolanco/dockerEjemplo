FROM node:12.11.1-stretch-slim  AS builder
COPY . ./application
WORKDIR /application
RUN npm install
RUN $(npm bin)/ng build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /application/dist/angularClient/ /usr/share/nginx/html
