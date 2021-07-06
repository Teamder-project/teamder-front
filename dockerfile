FROM node:14 AS builder
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist/Teamder .
CMD ["nginx", "-g", "daemon off;"]