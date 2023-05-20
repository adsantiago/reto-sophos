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

//All heroes
app.get("/", (req, res) => {
    connection.query(
        'SELECT * FROM heroes',
        function (err, results, fields) {
            res.json(results)
        }
    );
})

//Single hero
app.get("/hero/:id", (req, res) => {
    const { id } = req.params;
    connection.query(
        'SELECT * FROM heroes WHERE id = ?', [id],
        function (err, results, fields) {
            res.json(results)
        }
    );
})

//Single schedule
app.get("/schedule/:id", (req, res) => {
    const { id } = req.params;
    connection.query(
        'SELECT * FROM schedule WHERE heroe_id = ?', [id],
        function (err, results, fields) {
            console.log("Results " + results);
            console.log("Fields " + fields);
            res.json(results)
        }
    );
})

//All villains
app.get("/villains", (req, res) => {
    connection.query(
        'SELECT * FROM villains',
        function (err, results, fields) {
            res.json(results)
        }
    );
})

//All fight
app.get("/fight", (req, res) => {
    connection.query(
        'SELECT * FROM fight',
        function (err, results, fields) {
            res.json(results)
        }
    );
})

//Single villain
app.get("/villain/:id", (req, res) => {
    const { id } = req.params;
    connection.query(
        'SELECT * FROM villains WHERE id = ?', [id],
        function (err, results, fields) {
            res.json(results)
        }
    );
})

//All sponsor
app.get("/sponsor/:id", (req, res) => {
    const { id } = req.params;
    connection.query(
        'SELECT * FROM sponsor WHERE heroe_id = ?', [id],
        function (err, results, fields) {
            res.json(results)
        }
    );
})

app.listen(3004, () => {
    console.log('Listening server 3004');
})