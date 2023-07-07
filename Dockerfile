FROM node:18 as node
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build --prod
RUN ls /app/dist/poke
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/poke /usr/share/nginx/html