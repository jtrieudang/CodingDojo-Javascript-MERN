const Author = require('../models/Author.model');

module.exports.createAuthor = (req,res) => {
    Author.create(req.body)
        .then(createdAuthor => res.json(createdAuthor))
        .catch(err => res.status(400).json(err));
}

module.exports.getAllAuthors =(_req, res) => {
    Author.find()
        .then(authors => res.json(authors))
        .catch(err => res.json(err));
}

module.exports.getOneAuthor = (req, res) => {
    Author.findById(req.params.id)
        .then(author => res.json(author))
        .catch(err => res.json(err));
}

module.exports.updateAuthor = (req, res) =>{
    Author.findByIdAndUpdate(
        req.params.id, 
        req.body,{
        new: true,
        runValidators: true
    })
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err));
}

module.exports.deleteAuthor  = (req, res) => {
    Author.findByIdAndDelete(req.params.id)
        .then(() => res.json({ status: 'success' }))
        .catch(err => res.json(err));
}