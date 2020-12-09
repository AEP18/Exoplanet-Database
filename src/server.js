// Import Statement
import mysql from 'mysql';

// instantiations

init()
{
    const { host, port, user, password, database } = {
        host: 'mysql',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'master'
      };

      const connection = mysql.createConnection({
        host,
        port,
        user,
        password,
        database
      });
}

// MySQL Connection

function makeQuery(query)
{
    connection.connect();

    connection.query(query, (err, rows, fields) => {
      if (err) res.send(err);
  
      res.send(rows);
    });
  
    connection.end();
}

// Setup of files

init();

