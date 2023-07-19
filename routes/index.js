const routes = require('express').Router();
const users = require('./users');
const pokemon = require('./pokemon');
const eldenring = require('./eldenring');
const halo = require('./halo');
const { appendFile } = require('fs');
const views = require('./views');

routes.use('/', require('./swagger'));

routes.use('/', users);
routes.use('/', pokemon);
routes.use('/', eldenring);
routes.use('/', halo);
routes.use('/', views);

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['email', 'profile'] })
// );

// app.get('auth/failure', (req, res))

module.exports = routes;
