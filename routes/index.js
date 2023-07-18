const routes = require('express').Router();
const users = require('./users');
const pokemon = require('./pokemon');
const eldenring = require('./eldenring');
const path = require('path');
const passport = require('passport');
const { appendFile } = require('fs');

routes.use('/', require('./swagger'));

routes.use('/', users);
routes.use('/', pokemon);
routes.use('/', eldenring);

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['email', 'profile'] })
// );

// app.get('auth/google/callback', 
//     passport.authenticate('google', {
//         successRedirect: '/dashboard',
//         failureRedirect: '/auth/failure'
    
//     }))

// app.get('auth/failure', (req, res))



routes.use('/login', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../frontend/login.html'));
});

routes.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

module.exports = routes;
