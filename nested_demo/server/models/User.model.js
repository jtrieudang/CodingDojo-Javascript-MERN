const mongoose = require('mongoose');

//nested schema
const MovieSchema = new mongoose.Schema({
    title: {
     type: String,
     required: [
         true,
         'Please enter a title!'
     ]   
    }
}, { timestamps: true });

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            'Please enter a name!'
        ]
    },
    favoriteMovies: [MovieSchema]
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
module.exports = User;