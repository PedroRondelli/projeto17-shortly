import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pkg;

export const connectionDB = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

// host: process.env.HOST,
// port: process.env.PORTP,
// user: process.env.USERP,
// password: process.env.PASSWORD,
// database: process.env.DATABASE,
