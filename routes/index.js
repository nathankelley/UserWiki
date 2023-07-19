const routes = require('express').Router();
const users = require('./users');
const pokemon = require('./pokemon');
const eldenring = require('./eldenring');
const views = require('./views');
const { appendFile } = require('fs');

routes.use('/', require('./swagger'));

routes.use('/', users);
routes.use('/', pokemon);
routes.use('/', eldenring);
routes.use('/', views);

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['email', 'profile'] })
// );

// app.get('auth/google/callback', 
//     passport.authenticate('google', {
//         successRedirect: '/dashboard',
//         failureRedirect: '/auth/failure'
    
//     }))

// app.get('auth/failure', (req, res))

module.exports = routes;
