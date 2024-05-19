import { Sequelize } from 'sequelize';
import { DB_DATABASE, DB_DIALECT, DB_HOST, DB_PASSWORD, DB_USERNAME } from './config';

const sequelize = new Sequelize({
  dialect: DB_DIALECT,
  host: DB_HOST,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

export default sequelize;