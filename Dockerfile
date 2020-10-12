# Build web static files
FROM node:14.13.1-alpine3.10 as build

ADD . /app
WORKDIR /app

RUN npm install
RUN npm run build

# Start nginx
FROM nginx:mainline-alpine
COPY --from=build /app/build /var/www/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
