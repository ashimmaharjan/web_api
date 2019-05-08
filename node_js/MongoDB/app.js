const express=require('express');
const mongodb=require('mongodb');
const app=express();
const path=require('path');
const publicDirectory=path.join(__dirname,'Public');

const viewPath=path.join(__dirname,'Resources');
app.set('views',viewPath);
app.use(express.static(publicDirectory));
app.set('view engine','hbs');

const url="mongodb://localhost:27017";

const MongoClient=mongodb.MongoClient;
const databaseName="students"

var dataholder;

MongoClient.connect(url,{useNewUrlParser:true},function(err,res){

    if(err)
    {
        return console.log("problem in db"+err);
    }
    const db=res.db(databaseName);
    db.collection('students').find().toArray(function(error,mydata){
        console.log(mydata);
        dataholder=mydata;
    });

  
});

app.get('/students',function(req,res)
{
    res.render('index',{dataholder})
});
app.listen(99);