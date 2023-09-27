import dotenv from "dotenv";
import { Sequelize } from "sequelize";
dotenv.config();

const dbConfig = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host        : process.env.DB_HOST,
    port        : process.env.DB_PORT,
    dialect     : process.env.DB_CONNECTION,
    logging     : false,
    pool        : {
      max       : 100,
      min       : 10,
      acquire   : 5000,
      idle      : 60000,
    },
    logging: console.log,  
  }
);

export default dbConfig;
