const routes = require('express').Router();
const users = require('./users');
const pokemon = require('./pokemon');
const eldenring = require('./eldenring');
const halo = require('./halo');
const path = require('path');
const passport = require('passport');

routes.use('/', require('./swagger'));

routes.use('/', users);
routes.use('/', pokemon);
routes.use('/', eldenring);
routes.use('/', halo);

routes.use('/login', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../frontend/login.html'));
});

routes.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

module.exports = routes;
