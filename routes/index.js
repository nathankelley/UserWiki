const routes = require('express').Router();
const users = require('./users');
const pokemon = require('./pokemon');
const eldenring = require('./eldenring');
const path = require('path');
const passport = require('passport');

routes.use('/', require('./swagger'));

routes.use('/', users);
routes.use('/', pokemon);
routes.use('/', eldenring);

routes.use('/login', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../frontend/login.html'));
});

routes.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Authentication route
routes.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Callback route
routes.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Handle successful authentication
    res.redirect('/');
  }
);

module.exports = routes;
