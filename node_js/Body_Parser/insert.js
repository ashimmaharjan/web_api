const mongodb = require('mongodb');
const express = require('express');

const url = "mongodb://localhost:27017";

const MongoClient = mongodb.MongoClient;
const databaseName = "new-students"

MongoClient.connect(url, { useNewUrlParser: true }, function (err, res) {

    if (err) {
        return console.log("problem in db" + err);
    }
    const db = res.db(databaseName);
    db.collection('students').insertMany([{ name: 'Prakash', phone: '123654789', address: 'surkhet' },
    { name: "Aashish", phone: '123654789', address: 'gulmi' },
    { name: "Sunil", phone: '123654789', address: 'ktm' }], function (error, mydata) {
        console.log(mydata)
    });
})