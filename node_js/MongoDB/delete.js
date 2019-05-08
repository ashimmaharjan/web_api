const mongodb = require('mongodb');
const express = require('express');

const url = "mongodb://localhost:27017";

const MongoClient = mongodb.MongoClient;
const databaseName = "students"

MongoClient.connect(url, { useNewUrlParser: true }, function (err, res) {

    if (err) {
        return console.log("problem in db" + err);
    }
    const db = res.db(databaseName);
    db.collection('students').deleteMany({name:"Sunil"});
})