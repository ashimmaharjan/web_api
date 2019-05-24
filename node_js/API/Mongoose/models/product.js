const mongoose = require('mongoose');


//model of the application
const Product = mongoose.model('Product',{
    pname:{
        type:String
    },
    price: {
        type: Number
    }
});

module.exports = Product;