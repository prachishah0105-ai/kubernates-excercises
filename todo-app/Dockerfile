FROM node:18-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# The application uses the PORT environment variable to listen
CMD ["node", "index.js"]
