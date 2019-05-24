const mongoose = require('mongoose');

const Products = mongoose.model('Products', {
    name: {
        type: String
    },
    type: {
        type: String
    },
    quantity: {
        type: String
    }

})

module.exports = Products