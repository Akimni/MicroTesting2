const express = require('express');
const cors = require('cors');
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'qekmfhbqusidva',
  host: 'ec2-52-72-56-59.compute-1.amazonaws.com',
  database: 'dd29m58g7a4tda',
  password: '22cff620d0b06f17950d4f4669a1e0f11f168c04053c0a218b1d83ee130fddb9',
});

const app = express();
app.use(cors());

app.get('/displayaccount', (req, res) => {
  /*var micro_username = req.query.username;

  console.log("username: " + micro_username);*/

  connect.getConnection(function (err, connection) {
    if (err) { res.send('Error Database Connection'); }
    else {
      var sql = "select * from khairatmember";
      connect.query(sql, function (err, result) {
        if (err) { throw err; }
        else {
          res.send(result);
        }
      connection.release();
      });
    }
  });
});