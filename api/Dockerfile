FROM node:stretch-slim
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
EXPOSE 3154
ENV MONGO_URL mongodb://localhost/racebase
LABEL org.opencontainers.image.source https://github.com/racebase-run/racebase
CMD [ "node", "server.js" ]
COPY . .