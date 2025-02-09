FROM node:20-alpine

WORKDIR /app

RUN npm install -g vite 

COPY package.json /app

COPY package-lock.json /app

RUN npm install 

COPY . .

EXPOSE 5173
