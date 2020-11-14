const City = require('../models/City.model');

module.exports.createCity = (req,res) => {
    City.create(req.body)
        .then(createdCity => res.json(createdCity))
        .catch(err => res.status(400).json(err));
}

module.exports.getAll =(_req, res) => {
    City.find()
        .then(cities => res.json(cities))
        .catch(err => res.json(err));
}

module.exports.getOne = (req, res) => {
    City.findById(req.params.id)
        .then(city => res.json(city))
        .catch(err => res.json(err));
}

module.exports.update = (req, res) =>{
    // const { name, population, imageUrl, nice } = req.body;
    City.findByIdAndUpdate(
        req.params.id, 
        // {
        //     name,
        //     population,
        //     imageUrl,
        //     nice
        // }, you would need to comment-out the line below V and uncomment the top
        req.body,{
        new: true,
        runValidators: true
    })
        .then(updatedCity => res.json(updatedCity))
        .catch(err => res.status(400).json(err));
}

module.exports.delete = (req, res) => {
    City.findByIdAndDelete(req.params.id)
        .then(() => res.json({ status: 'success' }))
        .catch(err => res.json(err));
}