const express = require('express');
const path = require('path');
const app = express();
const publicDirectory = path.join(__dirname, 'Public');

app.use(express.static(publicDirectory));

app.get('/', function (req, res) {

    res.send("hello ghorle and prakash dada");
})

app.get('/aboutus1', function (req, res) {
    res.send("This is about us page");
})

app.get('/login', function (req, res) {
    res.send("This is login page");
})

app.get('/user/:user_id', function (req, res) {
    res.send("Your id is: " + req.params.user_id);
})

app.get('/:a/:b', function (req, res) {
    res.send("Username is: " + req.params.a + "\n" + " and " + "Password is: " + req.params.b + "\n");
})

app.get('/home', function (req, res) {
    res.sendFile(__dirname + '/home.html');
})

app.get('/aboutus', function (req, res) {
    res.sendFile(__dirname + '/aboutus.html');
})

app.listen(99);