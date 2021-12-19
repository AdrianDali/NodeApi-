require('dotenv').config();

//configuracion base para leer las variables de entorno

const config = {
  //con process se leen variables de entorno
  //en que entorno esta
  env: process.env.NODE_ENV || 'dev',
  //leere el puerto
  port: process.env.PORT || 3000,

  dbUser: process.env.DB_USER,

  dbPassword: process.env.DB_PASSWORD,

  dbHost: process.env.DB_HOST,

  dbName: process.env.DB_NAME,

  dbPort: process.env.DB_PORT
}
//exportar el modulo
module.export = { config}
