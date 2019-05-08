const fs = require('fs');
//fs.writeFileSync('abc.txt', "Hello World");
const d = fs.readFileSync('abc.txt');
console.log(d.toString());