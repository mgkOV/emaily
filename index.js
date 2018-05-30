const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys.js');
require('./models/User.js');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
//init routes
require('./routes/authRoutes')(app);

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server run on ${PORT}`);
});
