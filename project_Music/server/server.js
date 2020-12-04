const express = require('express');
const cors = require('cors');

//upload
const fileUpload = require('express-fileupload');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

require('./config/mongoose.config');

const app = express();
app.use(cors())
app.use(fileUpload());
app.use(express.json());

//middleware // upload
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

// app.post('/upload', function(req, res) {
//     if (!req.files || Object.keys(req.files).length === 0) {
//       return res.status(400).send('No files were uploaded.');
//     }

const soundsRoutesFunc = require('./routes/sound.routes');
soundsRoutesFunc(app);

app.listen(8000, () => console.log('listening on port 8000'));