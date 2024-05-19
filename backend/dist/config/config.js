"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_DATABASE = exports.DB_PASSWORD = exports.DB_USERNAME = exports.DB_HOST = exports.DB_DIALECT = void 0;
const getEnvVariable_1 = require("../utils/getEnvVariable");
exports.DB_DIALECT = (0, getEnvVariable_1.getEnvVariable)('DB_DIALECT');
exports.DB_HOST = (0, getEnvVariable_1.getEnvVariable)('DB_HOST');
exports.DB_USERNAME = (0, getEnvVariable_1.getEnvVariable)('DB_USERNAME');
exports.DB_PASSWORD = (0, getEnvVariable_1.getEnvVariable)('DB_PASSWORD');
exports.DB_DATABASE = (0, getEnvVariable_1.getEnvVariable)('DB_DATABASE');
