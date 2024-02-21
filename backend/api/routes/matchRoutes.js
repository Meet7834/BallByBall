const express = require('express');
const router = express.Router();
const MatchController = require('../controllers/matchController');

// Get match by ID
router.get('/:matchId', MatchController.getMatchById);

// Create a new match
router.post('/', MatchController.createMatch);

// Update match by ID
router.put('/:matchId', MatchController.updateMatch);

// Delete match by ID
router.delete('/:matchId', MatchController.deleteMatch);

module.exports = router;
