import { cwd } from "process";
import { loadEnvConfig } from "@next/env";
import { defineConfig } from "drizzle-kit";

import type { Config } from "drizzle-kit";

import { siteConfig } from "@/config/site";

loadEnvConfig(cwd());

if (!process.env.DATABASE_URL) {
  console.error("'DATABASE_URL' is not set in the environment variables");
  process.exit(1);
}

export default defineConfig({
  // schema: "./src/lib/db/schema.ts",
  schema: "./src/lib/db/testSchema.ts",
  // out: "./src/lib/db/migrations",
  out: "./src/lib/db/migrations2",
  dialect: "postgresql",
  verbose: true,
  dbCredentials: { url: process.env.DATABASE_URL! },
  // dbCredentials: {
  //   host: process.env.DATABASE_HOST!,
  //   port: Number(process.env.DATABASE_PORT) as unknown as number,
  //   user: process.env.DATABASE_USERNAME,
  //   password: process.env.DATABASE_PASS,
  //   database: "melodymaker",
  // },
  // tablesFilter: [`${siteConfig.name.toLowerCase().replace(/\s/g, "_")}_*`],
}) satisfies Config;
