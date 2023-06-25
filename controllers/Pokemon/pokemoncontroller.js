const Pokemon = require('../../models/Pokemon/pokemon');

// Get all pokemon
async function getAllPokemon(req, res) {
  try {
    const pokemon = await Pokemon.find();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(pokemon);
  } catch (err) {
    console.error(err);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({ error: 'Error getting pokemon' });
  }
}

// Get a specific pokemon by ID
async function getPokemonById(req, res) {
  try {
    const id = req.params.id;
    const pokemon = await Pokemon.findById(id).exec();
    if (pokemon) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(pokemon);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.status(404).json({ message: 'Pokemon not found' });
    }
  } catch (err) {
    console.error(err);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({ error: err });
  }
}

// Create a new pokemon
async function createPokemon(req, res) {
  const {
    pokeName,
    pokeSpecie,
    pokeTypeOne,
    pokeTypeTwo,
    pokeDescription,
    pokeAbilityOne,
    pokeAbilityTwo,
    pokeDexNum,
    pokeImage
  } = req.body;

  if (!pokeName || !pokeSpecie || !pokeTypeOne || !pokeDescription || !pokeAbilityOne || !pokeDexNum || !pokeImage) {
    return res.setHeader('Content-Type', 'application/json')
      .status(400)
      .json({ error: 'pokeName, pokeSpecie, pokeTypeOne, pokeDescription, pokeAbilityOne, pokeDexNum, and pokeImage are required and cannot be null' });
  }

  try {
    const newPokemon = new Pokemon({
      pokeName,
      pokeSpecie,
      pokeTypeOne,
      pokeTypeTwo, // It can be undefined if not provided
      pokeDescription,
      pokeAbilityOne,
      pokeAbilityTwo, // It can be undefined if not provided
      pokeDexNum,
      pokeImage
    });

    // Save the new Pokemon to the "pokemon" collection explicitly
    const savedPokemon = await newPokemon.save({ collection: 'pokemon' });

    res.setHeader('Content-Type', 'application/json');
    res.status(201).json({ id: savedPokemon._id });
  } catch (err) {
    console.error(err);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({ error: 'Error creating pokemon' });
  }
}

// Update the pokemon
async function updatePokemon(req, res) {
  try {
    const id = req.params.id;
    const updatedPokemon = req.body;

    const options = {
      new: true, // Return the modified document
      runValidators: true, // Run model validators on update
    };

    const updated = await Pokemon.findByIdAndUpdate(id, updatedPokemon, options);

    if (updated) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(updated);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.status(404).json({ message: 'Pokemon not found' });
    }
  } catch (err) {
    console.error(err);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({ error: 'Error updating pokemon' });
  }
}



// Delete a pokemon by ID
async function deletePokemon(req, res) {
  try {
    const id = req.params.id;
    const result = await Pokemon.deleteOne({ _id: id });

    if (result.deletedCount > 0) {
      res.setHeader('Content-Type', 'application/json');
      res.sendStatus(200);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.status(404).json({ message: 'Pokemon not found' });
    }
  } catch (err) {
    console.error(err);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({ error: 'Error deleting pokemon' });
  }
}

module.exports.getAllPokemon = getAllPokemon;
module.exports.getPokemonById = getPokemonById;
module.exports.createPokemon = createPokemon;
module.exports.updatePokemon = updatePokemon;
module.exports.deletePokemon = deletePokemon;
