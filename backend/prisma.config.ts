// prisma.config.ts
import 'dotenv/config';
import { defineConfig } from 'prisma/config'; // Ensure this matches your import

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL,
  },
  migrations: {
    // 💡 This is the part that was missing or incorrect
    seed: 'npx tsx prisma/seed.ts', 
  },
});