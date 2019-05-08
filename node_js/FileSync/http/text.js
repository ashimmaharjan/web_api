const fs = require('fs');
const http = require('http');

const display = fs.copyFileSync('one.txt', 'two.txt');
const show = fs.readFileSync('two.txt')
const lh = show.toString();

http.createServer(function (req, res) {
    res.write(lh);
    res.end();
}).listen(90);