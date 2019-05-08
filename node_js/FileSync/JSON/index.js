const fs = require('fs');
const http = require('http')
const a = fs.readFileSync("hello.json");
const b = a.toString();
const data = JSON.parse(b);

http.createServer(function (req, res) {

    res.write("<table border='5'><tr><th>BOOK</th><th>Author</th><th>Publish Date</th></tr>"
        + "<tr><td>" + data.book + "</td><td>" + data.author + "</td><td>" + data.pub_date + "</td></tr></table>");
    res.end();

}).listen(90);