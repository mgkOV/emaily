const express = require('express');
require('./services/passport');

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
