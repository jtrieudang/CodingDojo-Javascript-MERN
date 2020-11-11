const authorCtl = require('../controllers/author.controller');

module.exports = app => {
    app.post('/api/authors', authorCtl.createAuthor);
    app.get('/api/authors', authorCtl.getAllAuthors);
    app.get('/api/authors/:id', authorCtl.getOneAuthor);
    app.put('/api/authors/:id', authorCtl.updateAuthor);
    app.delete('/api/authors/:id', authorCtl.deleteAuthor);
}