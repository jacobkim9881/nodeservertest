const express = require('express')
const mysql = require('mysql')

const app = express();

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your-password',
    database: 'databasename'
});

app.get('/', (err, result) => {
    con.query('SELECT * FROM api', (err, res) => {
       result.json(res);
    });    
});

app.listen(port, console.log(`Server is connected`));