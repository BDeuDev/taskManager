import { Dialect } from 'sequelize';
import { getEnvVariable } from '../utils/getEnvVariable';

export const DB_DIALECT = getEnvVariable('DB_DIALECT') as Dialect;
export const DB_HOST = getEnvVariable('DB_HOST') ;
export const DB_USERNAME = getEnvVariable('DB_USERNAME');
export const DB_PASSWORD = getEnvVariable('DB_PASSWORD');
export const DB_DATABASE = getEnvVariable('DB_DATABASE');
export const URL_BLUEPRINT = getEnvVariable('URL_BLUEPRINT');
export const URL_BASE = getEnvVariable('URL_BASE');