const mongoose = require('mongoose');

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    },
    address: {
        type: String
    }

})

module.exports = User

/*const me = new User({
    name: 'Prakash',
    age: 23,
    address: 'Samakhusi'
})*/