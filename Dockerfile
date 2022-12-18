FROM node:18.12.1

WORKDIR /app
COPY package.json .

ARG NODE_ENV
RUN npm install

COPY . .
ENV PORT=3000
EXPOSE ${PORT}

CMD ["npm","run","start:dev"]