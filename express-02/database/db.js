const db = require('mysql2/promise')

async function connectionDB(){
    const connection = await db.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'express'
    })
    
    const result = await connection.query('SELECT 8 + 1 AS Result')
    console.log(result)
}
module.exports = connectionDB
