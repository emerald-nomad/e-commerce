FROM node:10.15.1

WORKDIR /app

COPY package*.json ./

RUN npm install --quiet

COPY ./ ./

RUN npm run build

CMD [ "/bin/bash"]