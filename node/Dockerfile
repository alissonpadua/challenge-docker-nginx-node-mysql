FROM arm64v8/node
WORKDIR /app
COPY . /app

RUN npm install -g nodemon
RUN npm install

#Give the path of your endpoint
ENTRYPOINT ["nodemon", "/app/index.js"]  
CMD ["npm", "run", "dev"]