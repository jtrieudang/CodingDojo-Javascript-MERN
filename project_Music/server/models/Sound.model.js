const mongoose = require('mongoose');

const SoundSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a sound name!"]
        },
    description: {
        type: String,
        required: [true, "Please provide a description of the sound!"]
        },
}, {timestamps: true}
    )

const Sound = mongoose.model('Sound', SoundSchema);

module.exports = Sound;