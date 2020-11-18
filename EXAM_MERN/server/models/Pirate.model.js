const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please have a name!"]
        },
    imageUrl: {
        type: String,
        required: [true, "Please have a image URL!"]
        },
    chest: {
        type: Number,
        required: [true, "Please have a number of chest(s)!"]
        },
    phrase: {
        type: String,
        required: [true, "Please have a catch phrase!"]
        },
    position: {
        type: String,
        required: [true, "Please have a position!"]
        },
    leg: {
        type: Boolean,
        required: [true, "Peg Leg?"]
        },      
    eye: {
        type: Boolean,
        required: [true, "Eye Patch?"]
        },   
    hand: {
        type: Boolean,
        required: [true, "Hook Hand?"]
        }, 
}, {timestamps: true}
    )

const Pirate = mongoose.model('Pirate', PirateSchema);

module.exports = Pirate;