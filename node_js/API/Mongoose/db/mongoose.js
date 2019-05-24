const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mongoose-practise-api',{      //task-manager-api = name of database
useNewUrlParser: true,
useCreateIndex: true

});