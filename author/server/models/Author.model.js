const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            'Please provide a name!'
        ]}})

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;