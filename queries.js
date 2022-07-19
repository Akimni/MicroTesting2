const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'qekmfhbqusidva',
  host: 'ec2-52-72-56-59.compute-1.amazonaws.com',
  database: 'dd29m58g7a4tda',
  password: '22cff620d0b06f17950d4f4669a1e0f11f168c04053c0a218b1d83ee130fddb9',
});
const getUsers = (request, response) => {
  pool.query('SELECT * FROM khairatmember', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  });
};

module.exports = {
  getUsers,
  };