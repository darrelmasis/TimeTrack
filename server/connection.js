require('dotenv').config()

const mysql = require('mysql')
const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE, MYSQL_HOST_local, MYSQL_USER_local, MYSQL_PASSWORD_local, MYSQL_DATABASE_local } = process.env

  const database = {
    remote: {
      connectionLimit: 1000,
      host: MYSQL_HOST,
      user: MYSQL_USER,
      password: MYSQL_PASSWORD,
      database: MYSQL_DATABASE,
      connectTimeout: 30000 //10000 default
    },
    local: {
      host: MYSQL_HOST_local,
      user: MYSQL_USER_local,
      password: MYSQL_PASSWORD_local,
      database: MYSQL_DATABASE_local,
    },
  }

const pool = mysql.createPool(database.local)


// pool.getConnection((error, connection) => {
//   if (error) {
//     throw error
//   } else {
//     console.log('Conexión con la base de datos exitosa');
//     return connection
//   }
// })

module.exports = pool
