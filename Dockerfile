# Stage 1: Build the application
FROM --platform=$BUILDPLATFORM node:20-alpine as build
WORKDIR /app
COPY web/package.json web/yarn.lock ./
RUN yarn install --frozen-lockfile
COPY web/ .
RUN yarn build

# Stage 2: Serve the application from Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
