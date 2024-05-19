import { Sequelize } from 'sequelize';
import { DB_DATABASE, DB_DIALECT, DB_HOST, DB_PASSWORD, DB_PORT, DB_TIMEZONE, DB_USERNAME } from './config';

const sequelize = new Sequelize({
  dialect: DB_DIALECT,
  host: DB_HOST,
  port:DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  dialectModule: require('pg'),
    logging: false,
    dialectOptions: {
        timezone: DB_TIMEZONE
    },
    define: {
        freezeTableName: true,
        timestamps: false
    }
});

export default sequelize;