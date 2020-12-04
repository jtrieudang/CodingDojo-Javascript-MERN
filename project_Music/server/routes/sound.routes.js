const soundCtl = require('../controllers/sound.controller');

module.exports = app => {
    app.post('/api/sounds', soundCtl.createSound);
    app.get('/api/sounds', soundCtl.getAllSounds);
    app.get('/api/sounds/:id', soundCtl.getOneSound);
    app.put('/api/sounds/:id', soundCtl.updateSound);
    app.delete('/api/sounds/:id', soundCtl.deleteSound);
}