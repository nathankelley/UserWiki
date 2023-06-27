const express = require('express');
const router = express.Router();

const eldenController = require('../controllers/eldenController');

router.get('/', eldenController.getAll);
router.get('/:_id', eldenController.getBoss);
router.post('/', eldenController.create);
router.put('/:_id', eldenController.updateBoss);
router.delete('/:_id', eldenController.deleteBoss);

module.exports = router;