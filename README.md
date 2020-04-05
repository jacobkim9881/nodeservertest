# nodejs server with MySQL
This git page is for running test node server with MySQL. 

## Extracting form git 
Type `git clone https://github.com/jacobkim9881/nodeservertest.git ` on your terminal.
Open web.js file and you can see MySQL connection configuration like this :

~~~
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your-password',
    database: 'databasename'
});
~~~

You should add connection information before running nodejs server.