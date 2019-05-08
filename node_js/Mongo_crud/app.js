const hbs = require('hbs');
const bodyParser = require('body-parser');
const express = require('express');
const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017";
const databaseName = 'friends';
const path = require('path');

const app = express();
const publicDirectory = path.join(__dirname, 'public');
app.use(express.static(publicDirectory));

app.set('view engine', 'hbs');
app.set('views', publicDirectory);

const ObjectID=mongodb.ObjectID;

app.use(bodyParser.urlencoded({ extended: false }));
MongoClient.connect(url, { useNewUrlParser: true }, function (err, res) {

    if (err) {
        return console.log("database connection error!!");
    }

    const db = res.db(databaseName);

    app.get('/form', function (req, res) {

        res.render('form');
    })

    app.post('/insert-data', function (req, res) {
        db.collection('close').insertOne(req.body);
    })

    db.collection('close').find().toArray(function(err,myData)
    {
        app.get('/show',function(req,res)
        {
            res.render('show',{friends:myData});
        })

        app.get('/update/:id',function(req,res)
        {
            var uid=req.params.id.toString();
            res.render('update_details',{friends:uid});
        })

    })
    app.get('/delete/:id',function(req,res)
        {
            var uid=req.params.id.toString();
            console.log(uid);
            db.collection('close').deleteOne({_id: new ObjectID(uid)});
        })

   

    

})
app.listen(1500);