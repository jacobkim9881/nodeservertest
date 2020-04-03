const express = require('express')
const mysql = require('mysql')

const app = express();

const con = mysql.createConnection({
    host: 'localhost',
    user: 'kytdark',
    password: 'xowhswkf7*',
    database: 'kytdark'
});

app.get('/', (err, result) => {
    con.query('SELECT * FROM api', (err, res) => {
       result.json(res);
    });    
});

const port = 8001;

app.listen(port, console.log(`Server is connected :  http://localhost:${port}/`));