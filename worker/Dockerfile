FROM node:alpine

WORKDIR /root/worker
COPY package.json .
RUN npm install
COPY . .
CMD ["node","consumer.js"]


