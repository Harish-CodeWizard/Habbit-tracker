# Deployment Instructions for Backend (Node.js + Prisma + PostgreSQL)

## Prerequisites
- PostgreSQL database (cloud or self-hosted)
- Node.js 20+
- Docker (optional, for containerized deployment)

## Environment Variables
Create a `.env` file in the backend root with:

```
DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<database>
JWT_SECRET=your_secret_key
PORT=5000
```

## Database Setup
1. Run migrations:
   ```
npx prisma migrate deploy
   ```
2. Generate Prisma client:
   ```
npx prisma generate
   ```

## Start Server
- For local/dev:
  ```
npm install
npm run dev
  ```
- For production:
  ```
npm install --production
npm start
  ```

## Docker Deployment
1. Build image:
   ```
docker build -t habit-backend .
   ```
2. Run container:
   ```
docker run -d -p 5000:5000 --env-file .env habit-backend
   ```

## Notes
- Ensure your PostgreSQL is accessible from your deployment environment.
- Update CORS settings in Express for production domains.
- Use a secure JWT secret in production.
