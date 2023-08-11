const mysql = require("mysql2/promise");

// Establish connection to database
const connection = mysql.createPool({
  host: "mysql",
  user: "root",
  password: "root",
  database: "node",
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
});

exports.connection = connection;
