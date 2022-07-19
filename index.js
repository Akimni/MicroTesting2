const express = require('express');
const pg = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());

var connect = pg.createPool({
  host: "ec2-52-72-56-59.compute-1.amazonaws.com",
  user: "qekmfhbqusidva",
  password: "22cff620d0b06f17950d4f4669a1e0f11f168c04053c0a218b1d83ee130fddb9",
  database: "dd29m58g7a4tda"
});

app.get('/', (req, res) => {
  res.send('hello world!');
  console.log('Running');
});

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


app.listen(process.env.PORT, () => {
  console.log('Example app listening to port 4005');
});