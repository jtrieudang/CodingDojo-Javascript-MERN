const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pirate', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})