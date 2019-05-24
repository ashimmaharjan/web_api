
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')

require('./db/mongoose');
const User = require('./models/user.js');
const Product = require('./models/product.js');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());
app.post("/upload", function(req,res){
     var myData = new User(req.body);
     myData.save().then(function(){
         res.send('okkk!!!!');
     }).catch(function(e){

     });
 console.log(req.body);
});

app.post("/product", function(req,res){
    var myData = new Product(req.body);
    myData.save().then(function(){
        res.send('okkk!!!!');
    }).catch(function(e){

    });
console.log(req.body);
});

app.get('/getUsers', function(req, res){
    User.find().then(function(user){
    res.send(user);
    }).catch(function(e){
     res.send(e)
    });
    });

    app.get('/getProducts', function(req, res){
        Product.find().then(function(product){
        res.send(product);
        }).catch(function(e){
         res.send(e)
        });
        })


//Initalize the application
app.listen(2000);

