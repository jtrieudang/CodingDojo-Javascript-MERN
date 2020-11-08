const JokesController = ('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', JokesController.getAllJokes);
    app.get('/api/jokes/:_id', JokesController.getJoke);
    app.get('/api/jokes/random', JokesController.randomJokes);
    app.post('/api/jokes/new', JokesController.createJoke);
    app.put('/api/jokes/update/:_id', JokesController.updateJoke);
    app.delete('/api/jokes/delete/:_id', JokesController.deleteJoke);
};