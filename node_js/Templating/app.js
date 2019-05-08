const express = require('express');
const path = require('path');
const app = express();
const viewPath = path.join(__dirname, 'Pages');
app.set('views', viewPath);
app.set('view engine', 'hbs');



app.get('/myURL', function (req, res) {
    res.render('abc', {
        name: 'Ghorle Dada',
        email: 'ghorle@gmail.com',
        address: 'Samakhusi'
    })
})
app.get('/home', function (req, res) {
    res.render('home', {
        name: 'Aashish Aryal',
        address: 'Kirtipur,Kathmandu'
    })
})
app.get('/people', function (req, res) {
    res.render('people',
        {
            people: ['parakash', 'sunil', 'ashish'],
            countries: ['Nepal', 'India', 'China']
        });
})
// app.get('/people2', function (req, res) {
//     res.render('people', {
//         people: ['parakash', 'sunil', 'ashish'],
//         countries: ['Nepal', 'India', 'China']
//     )
// };
// })
app.listen(99);

//nodemon app.js