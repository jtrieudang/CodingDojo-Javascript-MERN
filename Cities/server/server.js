const express = require('express');
const cors = require('cors');

require('./config/mongoose.config');

const app = express();

app.use(cors())
app.use(express.json());

const citiesRoutesFunc = require('./routes/city.routes');
citiesRoutesFunc(app);

app.listen(8000, () => console.log('listening on port 8000'));