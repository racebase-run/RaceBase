FROM node:lts-buster
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
ENV API_URL=https://api.race.breeze.software
ENV ROOT_URL=http://localhost:3000
RUN npm run build
EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
LABEL org.opencontainers.image.source https://github.com/racebase-run/racebase
CMD [ "npm", "run", "start" ]
