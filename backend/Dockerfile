FROM node:14

RUN mkdir -p /usr/src/app
RUN git clone https://gist.github.com/naman-gupta99/daa96ad0e9df3ef7ae01d47775fba897
WORKDIR /usr/src/app

RUN mv /daa96ad0e9df3ef7ae01d47775fba897/config.js . 

COPY package*.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

EXPOSE 8081
CMD ["npm", "start"]