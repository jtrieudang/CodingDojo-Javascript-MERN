const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sounds', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})