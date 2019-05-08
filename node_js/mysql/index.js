var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "testfornodemysql"
});

const http = require('http');
const fs = require('fs');

const a = fs.readFileSync("entry.json");
const b = a.toString();
const data = JSON.parse(b);

con.connect(function (err) {

    var sql = "insert into users values ( '" + 123 + "','" + data.username + "','" + data.email + "','" + data.contactnumber + "')";
    con.query(sql, function (err, result) {

        console.log(data.username);
        console.log(data.email);
        console.log(data.contactnumber);
    });

})