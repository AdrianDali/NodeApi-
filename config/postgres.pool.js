//simulacion de conexion a una base de datos en postgres

const {Pool} = require('rg');

const {config} = require('./config');

//proteger variables
const USER =encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`


const pool = new Pool({
  /*host: 'localhost',
  port: 5432,
  user: 'nico',
  password: 'admin123',
  database: 'my_store'
*/connectionString: URI
})

module.exports = pool
