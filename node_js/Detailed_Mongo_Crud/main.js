const hbs=require('hbs');
const bodyParser=require('body-parser')
const express=require('express');
const mongodb=require('mongodb');

const MongoClient=mongodb.MongoClient;
const url="mongodb://localhost:27017";
const databaseName="customers";
const path=require('path');

const app=express();
const publicDirectory=path.join(__dirname,'public');
app.use(express.static(publicDirectory));

app.set('view engine','hbs');
app.set('views',publicDirectory);

const ObjectID=mongodb.ObjectID;

app.use(bodyParser.urlencoded({extended:false}));
MongoClient.connect(url,{useNewUrlParser:true},function(err,res)
{
    if(err)
    {
        return console.log("database connection error!!");
    }

    const db=res.db(databaseName);

    app.get('/form',function(req,res)
    {
        res.render('form');
    })

    app.get('/index',function(req,res)
    {
        res.render('index');
    })
})
app.listen(900);