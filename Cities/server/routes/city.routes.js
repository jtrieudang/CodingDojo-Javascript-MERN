const citiesCtl = require('../controllers/city.controller');

module.exports = app => {
    app.get('/api/cities', citiesCtl.getAll);
    app.post('/api/cities', citiesCtl.createCity);
    app.get('/api/cities/:id', citiesCtl.getOne);
    app.put('/api/cities/:id', citiesCtl.update);
    app.delete('/api/cities/:id', citiesCtl.delete);
}
