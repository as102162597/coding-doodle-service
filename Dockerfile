FROM node:18.13.0

WORKDIR /usr/src/app
COPY src /usr/src/app

RUN /bin/rm -rf node_modules
RUN npm install
RUN npm install express mysql2 sequelize

EXPOSE 3000

CMD [ "npm", "start" ]
