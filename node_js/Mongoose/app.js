require('./db/database');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const User = require('./model/user');
const Products = require('./model/products');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
//me.save();
//to get value from users user body-parser

app.post('/upload', (req, res) => {
    var myData = new User(req.body);
    myData.save().then(function () {
        res.send('fine');
    }).catch(function (e) {
        res.send(e)
    })
})

app.post('/productsUpload', (req, res) => {
    var myData = new Products(req.body);
    myData.save().then(function () {
        res.send('Product Uploaded');
    }).catch(function (e) {
        res.send(e)
    })
})

app.get('/getUsers', function (req, res) {
    User.find().then(function (user) {
        res.send(user);
    }).catch(function (e) {
        res.send(e)
    })
})

app.get('/getProducts', function (req, res) {
    Products.find().then(function (products) {
        res.send(products);
    }).catch(function (e) {
        res.send(e)
    })
})

app.delete('/deleteuser/:id', function (req, res) {
    User.findByIdAndDelete(req.params.id).then(function () {

    }).catch(function () {

    })
})

app.listen(9898);

