const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const partialPath = path.join(__dirname, 'Pages/Partials');
app.set('views', partialPath);

const viewpath = path.join(__dirname, 'Pages');
app.set('views', viewpath);
app.set('view engine', 'hbs');

hbs.registerPartials(partialPath);

app.get('/cv', function (req, res) {
    res.render('cv');
})

app.get('/home', function (req, res) {
    res.render('home', {
        name: 'Aashish Aryal',
        address: 'Kirtipur,Kathmandu'
    })
})
app.get('/aboutus', function (req, res) {
    res.render('aboutus');
})
app.listen(65);