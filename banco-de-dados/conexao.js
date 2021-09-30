const mysql = require('mysql')

const dataBaseConection = mysql.createConnection({

    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123',
    database: 'RPG'
})
    

module.exports = dataBaseConection
