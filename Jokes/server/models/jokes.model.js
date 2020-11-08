const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        require:[
            true, 
            'Please provide a setup up for your joke!'
        ]
    },
    punchline: {
        type: String,
        require:[
            true,
            'Please have a punchline!'
        ]
    }
}, {
    timestamps: true
});

const Jokes = mongoose.model('Jokes', JokesSchema);

module.exports= Jokes;