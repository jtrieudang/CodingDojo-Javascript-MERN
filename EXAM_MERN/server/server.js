const express = require('express');
const cors = require('cors');

require('./config/mongoose.config');

const app = express();
app.use(cors())
app.use(express.json());

const piratesRoutes = require('./routes/pirate.routes');
piratesRoutes(app);

app.listen(8000, () => console.log('listening on port 8000'));