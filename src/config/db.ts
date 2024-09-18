import { createPool } from "mysql2";
import * as dotenv from "dotenv";
dotenv.config();
// Create a pool of connections
export const connection = createPool({
  // host: "127.0.0.1",
  // port: 1150,
  // user: "root",
  // password: "admin",
  // database: "product_db",
  host: process.env.DATABASE_HOST,
  port: parseInt("1150", 10),
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  // `connectionLimit` is optional but a good idea to define
  connectionLimit: 10,
});

// Wrap the pool in a promise-based API if needed
export const promisePool = connection.promise();
