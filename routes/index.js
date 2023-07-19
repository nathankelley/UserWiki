const routes = require('express').Router();
const users = require('./users');
const pokemon = require('./pokemon');
const eldenring = require('./eldenring');
const halo = require('./halo');
const { appendFile } = require('fs');
const path = require('path');

routes.use('/', require('./swagger'));

routes.use('/', users);
routes.use('/', pokemon);
routes.use('/', eldenring);
routes.use('/', halo);

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['email', 'profile'] })
// );

// app.get('auth/failure', (req, res))

routes.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/login.html'));
});
routes.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/register.html'));
});
routes.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dashboard.html'));
});

routes.get('/pokemon_index', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/pokemon_index.html'));
})

routes.get('/halo_index', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/halo_index.html'));
})
routes.get('/eldenring_index', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/eldenring_index.html'));
})

module.exports = routes;
