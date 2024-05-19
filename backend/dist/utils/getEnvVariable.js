"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvVariable = void 0;
function getEnvVariable(varName) {
    const value = process.env[varName];
    if (!value) {
        throw new Error(`Environment variable ${varName} is not defined`);
    }
    return value;
}
exports.getEnvVariable = getEnvVariable;
