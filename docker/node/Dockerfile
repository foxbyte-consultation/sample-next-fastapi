FROM node:18

WORKDIR /app

COPY ../app/package*.json /app/
RUN npm install

COPY ../app/ /app/

RUN npm run build

CMD ["npm", "run", "build"]