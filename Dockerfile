FROM node
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate
RUN npx prisma migrate deploy
RUN npx prisma db seed

ENV ESLINT_NO_DEV_ERRORS=true

RUN npm run build
CMD ["npm", "run", "start"]

EXPOSE 3000

# CMD ["npm", "run", "dev"]
