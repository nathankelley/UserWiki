// const path = require('path');
const routes = require('express').Router();
const viewsController = require('../controllers/viewsController.js');

routes.get('/login', viewsController.loginHandler);

// routes.get('/register', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../frontend/register.html'));
// });

// routes.get('/dashboard', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../frontend/dashboard.html'));
// });

// routes.use('/', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../frontend/index.html'));
// });
