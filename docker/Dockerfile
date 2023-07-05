FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
RUN ls /app/dist/poke
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/poke /usr/share/nginx/html
