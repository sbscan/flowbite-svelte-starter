import mariadb from 'mariadb';
import { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } from '$env/static/private';

const db = mariadb.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME
});

export default db;
