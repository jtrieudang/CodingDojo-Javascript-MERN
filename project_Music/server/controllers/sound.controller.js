const Sound = require('../models/Sound.model');

//create
module.exports.createSound = (req,res) => {
    Sound.create(req.body)
        .then(createSound => res.json(createSound))
        .catch(err => res.status(400).json(err));
}

//get all
module.exports.getAllSounds = (_req, res) => {
    Sound.find()
        .then(Sounds => res.json(Sounds))
        .catch(err => res.json(err));
}

//get one sound
module.exports.getOneSound = (req, res) => {
    Sound.findById(req.params.id)
        .then(oneSound => res.json(oneSound))
        .catch(err => res.json(err));
}

module.exports.updateSound = (req, res) =>{
    Sound.findByIdAndUpdate(
        req.params.id, 
        req.body,{
        new: true,
        runValidators: true
    })
        .then(updatedSound => res.json(updatedSound))
        .catch(err => res.status(400).json(err));
}

//delete
module.exports.deleteSound = (req, res) => {
    Sound.findByIdAndDelete(req.params.id)
        .then(() => res.json({ status: 'Deleted!' }))
        .catch(err => res.json(err));
}