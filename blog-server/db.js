import mysql from "mysql2"

const db = mysql.createConnection({
  host: "localhost",
  database: "blog",
  user: "root",
  password: "Gee@2002",
});
export default db