const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const { token } = req.body;
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      source: token.id, // obtained with Stripe.js
      description: '$5 for 5 emaily credits'
    });

    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
