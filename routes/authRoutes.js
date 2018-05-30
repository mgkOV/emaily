const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/calback',
    passport.authenticate('google'),
    (req, res) => {
      // Successful authentication, redirect home.
      res.redirect('/');
    }
  );
};