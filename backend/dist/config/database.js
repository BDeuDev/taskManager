"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("./config");
const sequelize = new sequelize_1.Sequelize({
    dialect: config_1.DB_DIALECT,
    host: config_1.DB_HOST,
    port: config_1.DB_PORT,
    username: config_1.DB_USERNAME,
    password: config_1.DB_PASSWORD,
    database: config_1.DB_DATABASE,
    dialectModule: require('pg'),
    logging: false,
    dialectOptions: {
        timezone: 'UTC'
    },
    define: {
        freezeTableName: true,
        timestamps: true
    }
});
exports.default = sequelize;
