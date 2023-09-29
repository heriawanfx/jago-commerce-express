import dotenv from "dotenv";
import { Dialect, Sequelize } from "sequelize";
dotenv.config();

const dbConfig = new Sequelize(
  process.env.DB_DATABASE as string,
  process.env.DB_USERNAME as string,
  process.env.DB_PASSWORD,
  {
    host        : process.env.DB_HOST,
    port        : parseInt(process.env.DB_PORT as string, 3000) as number,
    dialect     : process.env.DB_CONNECTION as Dialect,
    logging     : false,
    pool        : {
      max       : 100,
      min       : 10,
      acquire   : 5000,
      idle      : 60000,
    },
  }
);

export default dbConfig;
