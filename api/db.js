import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "Holat",
  password: "holat",
  database: "blog",
});

export default db;
