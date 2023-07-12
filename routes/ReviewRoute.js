const express = require('express');
const ReviewController = require('../controllers/ReviewController');

const router = express.Router();

// Routes for reviews
router.post('/', ReviewController.create);
router.get('/', ReviewController.getAll);
router.get('/:id', ReviewController.getById);
router.put('/:id', ReviewController.update);
router.delete('/:id', ReviewController.delete);

module.exports = router;
