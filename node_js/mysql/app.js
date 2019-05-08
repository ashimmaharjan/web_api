var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "testfornodemysql"
})

con.connect(function (err) {

    var sql = "insert into users values ('','himal78','hello@gmail.com','987776543')";
    con.query(sql);
})