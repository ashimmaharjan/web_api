const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');
const ObjectID = mongodb.ObjectID;

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const MongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017";
const databaseName = "my-first-api";

MongoClient.connect(url, { useNewUrlParser: true }, function (err, res) {

    if (err) {
        return console.log("Database connection error");
    }

    const db = res.db(databaseName);

    app.post('/products', function (req, res) {

        console.log("connected with api. now enjoy your day go on!!!");
        res.send("shut up and leave us alone.");
        console.log(req.body);

        const email = req.body.email;
        const password = req.body.pswd;
        const rememberMe = req.body.remember;

        db.collection('users').insertOne({ email, password, rememberMe });
        console.log(req.body);
    })

    app.get('/show', function (req, res) {
        db.collection('users').find().toArray(function (err, myData) {
            res.send(myData);
        })
    })

    app.get('/delete/:id', function (req, res) {

        var uid = req.params.id.toString();
        console.log(uid);
        db.collection('users').deleteOne({ _id: new ObjectID(uid) });
    })

    app.get('/update/:id',function(req,res){
        res.render('update_form')
    })
})
app.listen(700);