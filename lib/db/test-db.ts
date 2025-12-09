// import { drizzle } from "drizzle-orm/postgres-js";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as testSchema from "./testSchema";

// import postgres from "postgres";
// import { env } from "@/lib/env";

// import { RDSDataClient } from "@aws-sdk/client-rds-data";
// import { fromIni } from "@aws-sdk/credential-providers";
// const testClient = postgres({
//   host: env.DATABASE_HOST, // Postgres ip address[s] or domain name[s]
//   port: Number(env.DATABASE_PORT), // Postgres server port[s]
//   database: "melodymaker", // Name of database to connect to
//   username: env.DATABASE_USERNAME, // Username of database user
//   password: env.DATABASE_PASS,
//   max: 1,
//  ssl: {
//   require: false,

//  }
// });

// export const testdb = drizzle(testClient, { schema: testSchema });
// const client = postgres(process.env.DATABASE_URL!, { max: 1 });

const client = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 50, // Use 50 connections out of the 72 available
  idleTimeoutMillis: 30000, // This setting closes idle connections after 30 seconds, which helps manage resource usage.
  connectionTimeoutMillis: 2000, // This setting times out connection attempts after 2 seconds, preventing long waits if the database is unreachable.
});

export const testdb = drizzle(client, { schema: testSchema });

client.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});
