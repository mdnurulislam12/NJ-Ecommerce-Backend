const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "shops",
});

app.get("/", (req, res) => {
  return res.json("From Backend side");
});

app.get("/users", (req, res) => {
  const sql = "select * from users";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(port, () => {
  console.log(`simple not server running on port ${port}`);
});
