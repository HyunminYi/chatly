import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  out: './drizzle', // schema 기반 migration
  schema: './db/schema.ts', // 테이블선언한 경로
  dialect: 'postgresql', // 사용할 db
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
