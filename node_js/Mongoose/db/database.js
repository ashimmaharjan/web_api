const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mongoose-api', {
    useNewUrlParser: true,
    useCreateIndex: true

    //mongoose-api is database name.
})