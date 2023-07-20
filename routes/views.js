const routes = require('express').Router();
const viewsController = require('../controllers/viewsController.js');

routes.get('/login', viewsController.loginHandler);
routes.get('/register', viewsController.regHandler);
routes.get('/dashboard', viewsController.dashboardHandler);

routes.get('/pokemon_index', viewsController.pokemonPageHandler);

routes.get('/halo_index', viewsController.haloPageHandler);
routes.get('/eldenring_index', viewsController.eldenringPageHandler);

module.exports = routes;