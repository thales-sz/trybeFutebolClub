FROM node:16.14-alpine

WORKDIR /app-frontend

EXPOSE 3000

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

ENTRYPOINT [ "npm" ]

CMD [ "start" ]


