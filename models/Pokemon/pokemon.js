const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  pokeName: { type: String, required: true },
  pokeSpecie: { type: String, required: true },
  pokeTypeOne: { type: String, required: true },
  pokeTypeTwo: { type: String }, // Make it optional by removing "required: true"
  pokeDescription: { type: String, required: true },
  pokeAbilityOne: { type: String, required: true },
  pokeAbilityTwo: { type: String }, // Make it optional by removing "required: true"
  pokeDexNum: { type: Number, required: true },
  pokeImage: { type: String, required: true }
});
const Pokemon = mongoose.model('Pokemon', pokemonSchema, 'pokemon');

module.exports = Pokemon;
