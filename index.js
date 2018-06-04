const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys.js');
const bodyParser = require('body-parser');
require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());
//init routes
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server run on ${PORT}`);
});
