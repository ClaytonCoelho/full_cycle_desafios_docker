const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

app.get('/', (req,res) => {

    const connection = mysql.createConnection(config)
    const sql = `INSERT INTO people(name) values('Clayton'),('Gonçalves'),('Coelho')`
    connection.query(sql)
    connection.query(`SELECT * from people`, (err, results) => {
        if (err) {
          throw err;
        }
        const arr = []
        for (let i=0; i < results.length; i++) {
          arr.push(results[i].name)
        }
        const list = arr.join('</li><li>')
        res.send(`<h1>Full Cycle Rocks!</h1>
                    <ul>
                      <li>${list}</li>
                    </ul>`);
    });
    connection.end();

})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})