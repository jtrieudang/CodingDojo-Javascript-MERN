const express = require('express');

const app = express();
app.use(express.json());

require('./config/mongoose.config');
const userRoutes = require('./routes/users.routes');
userRoutes(app);

app.listen(4000);