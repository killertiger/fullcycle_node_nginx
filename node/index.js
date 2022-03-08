const express = require('express')
const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const mysql = require('mysql')



app.get('/', (req, res) => {
      const connection = mysql.createConnection(config)

      connection.query(`INSERT INTO people VALUES('Marcus')`);

      connection.query("SELECT * FROM people", function(err, result, fields) {
        let html = "";

        for(let i=0; i < result.length; i++)
        {
          html += "<p>" + result[i].name + "</p>"
        }

        res.send('<h1>Full cycle</h1><div>' + html + '</div>')
    })

    connection.end()
})

app.listen(port, () => {
  console.log('Rodando na porta ' + port)  
})