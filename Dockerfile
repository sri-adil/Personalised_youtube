
FROM node:latest

EXPOSE 8080

RUN mkdir -p /src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install

ADD src /usr/src/app/src
ADD public /usr/src/app/public

RUN npm build

CMD [ "npm", "start" ]
