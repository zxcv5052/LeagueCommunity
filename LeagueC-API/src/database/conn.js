const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: process.env.db_host,
    port: process.env.db_port,
    user: process.env.db_user,
    password: process.env.db_pwd,
    database: process.env.db_database
})

module.exports = pool