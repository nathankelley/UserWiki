const mongoose = require('mongoose');
const db = require('../models');
const Species = db.halo;

module.exports.getAll = (req, res) => {
    try {
      Species.find({})
        .then((data) => {
          res.status(200).send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || 'Some error occurred while retrieving the Halo species.'
          });
        });
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  
  module.exports.getSpecies = (req, res) => {
    try {
      const species_id = req.params._id;
      Boss.find({ _id: species_id })
        .then((data) => {
          res.status(200).send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || 'Some error occurred while retrieving the Halo species.'
          });
        });   
    } catch(err) {
        res.status(500).json(err);
    };
  };
  
    
    
    module.exports.create = (req, res) => {
      try {
        if (!req.body.species_name || !req.body.characteristics || !req.body.description || !req.body.image) {
          res.status(400).send({ message: 'Content can not be empty!' });
          return;
        }
        const species = new Species(req.body);
        //validate(authSchema(boss));
        species
          .save()
          .then((data) => {
            console.log(data);
            res.status(201).send(data);
          })
          .catch((err) => {
            res.status(500).send({
              message: err.message || 'Some error occurred while creating the Halo species.'
            });
          });
      } catch (err) {
        res.status(500).json(err);
      }
    };
    
    
    module.exports.updateSpecies = async (req, res) => {
      try {
        const species_id = req.params._id;
        if (!species_id) {
          res.status(400).send({ message: 'Invalid ID Supplied' });
          return;
        }
        Species.replaceOne({ _id: species_id }, {
          species_name: req.params.species_name,
          sub_species: req.body.sub_species,
          avg_height: req.body.avg_height,
          avg_weight: req.body.avg_weight,
          avg_lifespan: req.body.avg_lifespan,
          homeworld: req.body.homeworld,
          characteristics: req.body.characteristics,
          description: req.body.description,
          image: req.body.image
        })
        .then(() => { 
          res.status(204).send();
        })
        .catch((err) => {
              res.status(500).json(err || 'Some error occurred while updating the Halo species.');
            })
      } catch (err) {
        res.status(500).json(err);
      }
    };
    
    
    module.exports.deleteSpecies = async (req, res) => {
      try {
        const species_id = req.params._id;
        if (!species_id) {
          res.status(400).send({ message: 'Invalid ID Supplied' });
          return;
        }
        Species.deleteOne({ _id: species_id }).then(() => {
          res.status(204).send();
        }
        ).catch((err) => {
          res.status(500).json(err || 'Some error occurred while deleting the Halo species.');
        });
      } catch (err) {
        res.status(500).json(err || 'Some error occurred while deleting the Halo species.');
      }
    };