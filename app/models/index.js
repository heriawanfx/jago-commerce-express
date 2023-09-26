const dbConfig = require('../../config/db.config.js');

const sequelizeModule = require('sequelize');
const sequelize = new sequelizeModule(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
          }
    }
);

const db = {
    sequelizeModule : sequelizeModule,
    sequelize : sequelize,
};

db.banners = require('./banner.model.js')(sequelize, sequelizeModule);

module.exports = db;