const express = require('express');
const router = express.Router();
const ScorecardController = require('../controllers/scorecardController');

// Get scorecard by ID
router.get('/:scorecardId', ScorecardController.getScorecardById);

// Create a new scorecard
router.post('/', ScorecardController.createScorecard);

// Update scorecard by ID
router.put('/:scorecardId', ScorecardController.updateScorecard);

// Delete scorecard by ID
router.delete('/:scorecardId', ScorecardController.deleteScorecard);

module.exports = router;