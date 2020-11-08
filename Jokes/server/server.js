const express = require('express');
const app = express();

require('./config/mongoose.config');

app.use(express.json());

const AllJokesFunc = require('./routes/jokes.routes');
AllJokesFunc(app);

app.listen(8000, () => console.log("The server is up on 8000!"));