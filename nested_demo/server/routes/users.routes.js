const usersCtl = require('../controllers/users.controller');
const moviesCtl= require('../controllers/movies.controller');

module.exports = app => {
    app.post('/api/users/:userId/movies', moviesCtl.create);
    app.delete('/api/users/:userId/movies/:movieId', moviesCtl.delete);

    app.post('/api/users', usersCtl.create);
    app.get('/api/users', usersCtl.index);

}