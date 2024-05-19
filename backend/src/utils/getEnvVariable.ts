export function getEnvVariable(varName:string) {
    const value = process.env[varName];
    if (!value) {
        throw new Error(`Environment variable ${varName} is not defined`);
    }
    return value;
}