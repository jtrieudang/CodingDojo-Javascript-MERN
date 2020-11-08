const Jokes = require('../models/jokes.model');

//get all jokes
function getAllJokes(_req, res){
    Jokes.find()
    .then(jokes => res.json(jokes))
    .catch(err=> res.json(err));
};

//return a joke with ID
function getJoke(req, res){
    Jokes.findOne({_id: req.params.id })
    .then(oneJokes => res.json(oneJokes))
    .catch(err=> res.json(err));
};

//return a random jokes
// function randomJokes(req, res){
//     // Jokes. NEEEDD HELP

// };

//create a new joke
function createJoke(req, res){
    Jokes.create(req.body)
    .then(createdJoke => res.json(createdJoke))
    .catch(err => res.json(err));
};


//update a joke with id
function updateJoke(req, res){
    Jokes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ joke: updatedJoke }))
    .catch(err=> res.json(err));
};


//delete a joke with id
function deleteJoke(req, res){
    Jokes.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err=> res.json(err));
};

module.exports ={
    getAllJokes,
    getJoke,
    // randomJokes,
    createJoke,
    updateJoke,
    deleteJoke
}

//the differences between module.exports used as a function 