const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const db = require('../database');
const router = require ('./router.js');
const PORT = 3000;

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})




// serve static client folder
// require path (native package)
// app.use('/', express.static(path.join(__dirname, '/../client/dist')))