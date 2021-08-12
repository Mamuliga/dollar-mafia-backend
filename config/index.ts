export default {
  PORT: 3300,
  APP_NAME: "Dollar Mafia",
  APP_VERSION: "1.0.0-dev",
  DB_HOST: "localhost",
  DB_NAME: "blog-db",
  DB_USER: "root",
  DB_PASSWORD: "",
  DB_PORT: 3306,
  BCRYPT_SALT: 12,
  JWT_SECRET: "secret_key",
  ...process.env,
};
