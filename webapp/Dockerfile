FROM node:8 AS build-deps

# Create app directory
WORKDIR /usr/src/webapp

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

RUN npm run build



FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/webapp/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]