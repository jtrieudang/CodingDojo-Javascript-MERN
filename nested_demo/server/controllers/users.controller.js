const User = require('../models/User.model');

module.exports = {
    create(req, res){
        User.create(req.body)
            .then(user => res.json(user))
            .catch(err => res.status(400).json(err));
    },

    index(_, res){
        User.find()
            .then(users => res.json(users));
    }
}