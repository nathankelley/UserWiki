// const path = require('path');
const routes = require('express').Router();
// const viewsController = require('../controllers/viewsController.js');
const path = require('path');

// routes.get('/login', viewsController.loginHandler);

// routes.get('/register', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../frontend/register.html'));
// });

// routes.get('/dashboard', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../frontend/dashboard.html'));
// });

// routes.use('/', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../frontend/index.html'));
// });

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