FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 8099

CMD ["node", "app.js"]
