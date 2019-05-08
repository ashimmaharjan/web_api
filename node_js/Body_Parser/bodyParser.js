const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const url = "mongodb://localhost:27017";
const bodyParser=require('body-parser');
const mongodb=require('mongodb');

const MongoClient = mongodb.MongoClient;
const databaseName = "new-students"

const viewpath = path.join(__dirname, 'Public');
app.set('views', viewpath);
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({extended:false}));
MongoClient.connect(url, { useNewUrlParser: true }, function (err, res) {

    if (err) {
        return console.log("problem in db" + err);
    }
    const db = res.db(databaseName);
    app.post('/form',function(req,res)
    {
        console.log(req.body);
        db.collection('students').insertOne(req.body);
    })
    app.get('/form',function(req,res)
    {
        res.render('form');
    })
    
})

app.listen(65);