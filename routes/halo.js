const express = require('express');
const router = express.Router();

const haloController = require('../controllers/haloController.js');

router.get('/halo', haloController.getAll);
router.post('/halo/', haloController.create);
router.get('/halo/:_id', haloController.getSpecies);
router.put('/halo/:_id', haloController.updateSpecies);
router.delete('/halo/:_id', haloController.deleteSpecies);

module.exports = router;