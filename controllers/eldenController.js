const mongoose = require('mongoose');
const db = require('../models');
const Boss = db.eldenring;


module.exports.getAll = (req, res) => {
  try {
    Boss.find({})
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving the Elden Ring Bosses.'
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};


module.exports.getBoss = (req, res) => {
  try {
    const boss_id = req.params._id;
    Boss.find({ _id: boss_id })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving the Elden Ring boss.'
        });
      });   
  } catch(err) {
      res.status(500).json(err);
  };
};

  
  
  module.exports.create = (req, res) => {
    try {
      if (!req.body.boss_name || !req.body.hp || !req.body.defense || !req.body.stance || !req.body.parryable || !req.body.required || !req.body.weaknesses || !req.body.strengths) {
        res.status(400).send({ message: 'Content can not be empty!' });
        return;
      }
      const boss = new Boss(req.body);
      //validate(authSchema(boss));
      boss
        .save()
        .then((data) => {
          console.log(data);
          res.status(201).send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || 'Some error occurred while creating the Elden Ring boss.'
          });
        });
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  
  module.exports.updateBoss = async (req, res) => {
    try {
      const _id = req.params._id;
      if (!_id) {
        res.status(400).send({ message: 'Invalid ID Supplied' });
        return;
      }
      Boss.replaceOne({ _id: _id }, {
        bossName: req.params.bossName,
        hp: req.body.hp,
        defense: req.body.defense,
        stance: req.body.stance,
        parryable: req.body.parryable,
        required: req.body.required,
        weaknesses: req.body.weaknesses,
        strengths: req.body.strengths,
        image: req.body.image
      })
      .then(() => { 
        res.status(204).send();
      })
      .catch((err) => {
            res.status(500).json(err || 'Some error occurred while updating the Elden Ring boss.');
          })
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  
  module.exports.deleteBoss = async (req, res) => {
    try {
      const _id = req.params._id;
      if (!boss_id) {
        res.status(400).send({ message: 'Invalid ID Supplied' });
        return;
      }
      Boss.deleteOne({ _id: _id }).then(() => {
        res.status(204).send();
      }
      ).catch((err) => {
        res.status(500).json(err || 'Some error occurred while deleting the Elden Ring boss.');
      });
    } catch (err) {
      res.status(500).json(err || 'Some error occurred while deleting the Elden Ring boss.');
    }
  };