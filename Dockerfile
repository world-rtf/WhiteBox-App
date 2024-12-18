FROM node

WORKDIR /app

COPY package*.json ./

RUN npm ci
COPY . .

RUN npx prisma generate

RUN npm run build
CMD ["npm", "run", "start"]

EXPOSE 3000

# CMD ["npm", "run", "dev"]
