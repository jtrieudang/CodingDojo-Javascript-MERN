const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nested', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true
});