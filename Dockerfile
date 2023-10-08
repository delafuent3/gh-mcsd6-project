FROM node:18-alpine

WORKDIR /react-app/

COPY public/ /react-app/public
COPY src/ /react-app/src
COPY package.json /react-app/
COPY tailwind.config.js /react-app/

RUN npm install

CMD ["npm", "start"]