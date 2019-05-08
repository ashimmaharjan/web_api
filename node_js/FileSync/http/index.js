const fs = require('fs'); //merged with this one
const http = require('http');

fs.writeFileSync('abc.txt', "Ghorle vai");
const d = fs.readFileSync('abc.txt');
const e = d.toString();

http.createServer(function (request, respone) {

    respone.write(e);
    respone.end();
}).listen(90);

