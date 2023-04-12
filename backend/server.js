const express = require("express");
const app = express();
const mysql = require('mysql2');
const cors = require("cors");

app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: 3306,
    database: 'guardians_of_the_globe'
});

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    connection.query(
        'SELECT * FROM heroes',
        function (err, results, fields) {
            console.log("Results " + results); 
            console.log("Fields " + fields); 
            res.json(results)
        }
    );
})

app.get("/heroe/:id", (req, res) => {
    const { id } = req.params;
    console.log("id: " + id)
    connection.query(
        'SELECT * FROM heroes WHERE id = ?', [id],
        function (err, results, fields) {
            console.log("Results " + results);
            console.log("Fields " + fields);
            res.json(results)
        }
    );
})

app.listen(3004, () => {
    console.log('Listening server 3004');
})