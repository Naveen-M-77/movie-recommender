# Step 1: Build the React app
FROM node:18 as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Prevent OpenSSL error during build
ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm run build

# Step 2: Serve with nginx
FROM nginx:alpine

# Copy build output to nginx public folder
COPY --from=build /app/build /usr/share/nginx/html

# Remove default config and optionally add a custom one
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
