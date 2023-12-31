const routes = require('express').Router();
const usersController = require('../controllers/usersController.js');
// const { requiresAuth } = require('express-openid-connect');

// GET all users
routes.get('/users', usersController.getAllUsers);

// GET a user
routes.get('/users/:username', usersController.getUser);

// POST create user
routes.post('/addUser', usersController.addUser);

// PUT update user
routes.put('/users/:username', usersController.editUser);

// DELETE a user
routes.delete('/users/:username', usersController.deleteUser);

module.exports = routes;