const express = require('express');
const router = express.Router();

const eldenController = require('../controllers/eldenController.js');

router.get('/eldenring/', eldenController.getAll);
router.post('/eldenring/', eldenController.create);
router.get('/eldenring/:_id', eldenController.getBoss);
router.put('/eldenring/:_id', eldenController.updateBoss);
router.delete('/eldenring/:_id', eldenController.deleteBoss);

module.exports = router;