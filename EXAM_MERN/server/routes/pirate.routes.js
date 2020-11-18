const pirateCtl = require('../controllers/pirate.controller');

module.exports = app => {
    app.post('/api/pirates', pirateCtl.createPirate);
    app.get('/api/pirates', pirateCtl.getAllPirates);
    app.get('/api/pirates/:id', pirateCtl.getOnePirate);
    app.delete('/api/pirates/:id', pirateCtl.deletePirate);
}