const Pirate = require('../models/Pirate.model');

//create
module.exports.createPirate = (req,res) => {
    Pirate.create(req.body)
        .then(createPirate => res.json(createPirate))
        .catch(err => res.status(400).json(err));
}

//get all
module.exports.getAllPirates = (_req, res) => {
    Pirate.find()
        .then(pirates => res.json(pirates))
        .catch(err => res.json(err));
}

//get one pirate
module.exports.getOnePirate = (req, res) => {
    Pirate.findById(req.params.id)
        .then(onepirate => res.json(onepirate))
        .catch(err => res.json(err));
}

//delete a pirate
module.exports.deletePirate = (req, res) => {
    Pirate.findByIdAndDelete(req.params.id)
        .then(() => res.json({ status: 'Deleted!' }))
        .catch(err => res.json(err));
}