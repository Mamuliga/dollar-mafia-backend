import { Sequelize } from "sequelize-typescript";
import sqlite from "sqlite";
// import * as Sequelize from "sequelize";
import config from "../config";

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT } = config;

const sequelize = new Sequelize({
  // dialect: "mysql",
  dialect: "sqlite",
  storage: "./data.sqlite",
  host: DB_HOST,
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  dialectModule: sqlite,
  models: [],
});

export default sequelize;
