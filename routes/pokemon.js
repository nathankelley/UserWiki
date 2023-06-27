const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/Pokemon/pokemoncontroller.js');
// const { requiresAuth } = require('express-openid-connect');

// GET all users
router.get('/pokemon', pokemonController.getAllPokemon);

// GET a user
router.get('/pokemon/:id', pokemonController.getPokemonById);

// POST create user
router.post('/add-pokemon', pokemonController.createPokemon);

// PUT update user
router.put('/update-pokemon/:id', pokemonController.updatePokemon);

// DELETE a user
router.delete('/remove-pokemon/:id', pokemonController.deletePokemon);

module.exports = router;