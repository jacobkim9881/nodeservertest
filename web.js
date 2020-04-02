const express = require('express')
const mysql = require('mysql')

const app = express();

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node'
});

app.get('/', (err, result) => {
    con.query('SELECT * FROM api', (err, res) => {
       result.json(res);
    });    
});

const port = 3000;

app.listen(port, console.log(`Server is connected :  http://localhost:${port}/`));