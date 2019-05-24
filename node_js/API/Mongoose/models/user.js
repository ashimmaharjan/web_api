const mongoose = require('mongoose');


//model of the application
const User = mongoose.model('User',{
    sname:{
        type:String
    },
    age:{
        type: Number
    },
    address: {
        type: String
    }
});

module.exports = User;
//object of the application
/*
const me = new User({
    name: 'Nikhil',
    age: 20,
    address: 'Yetkha'
})
*/