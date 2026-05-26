# Dockerfile for Node.js + Prisma + PostgreSQL backend
FROM node:20-alpine

WORKDIR /app

COPY ./package.json ./package-lock.json* ./yarn.lock* ./
RUN npm install --production

COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose the port (default 5000)
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
