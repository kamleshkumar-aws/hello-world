FROM node:12
WORKDIR /use/src/app
COPY . /use/src/app
RUN npm install
USER root 
COPY . .
EXPOSE 4000
CMD ["node", "app.js"]
