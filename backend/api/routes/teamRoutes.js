const express = require('express');
const router = express.Router();
const TeamController = require('../controllers/teamController');

// Get team by ID
router.get('/:teamId', TeamController.getTeamById);

// Create a new team
router.post('/', TeamController.createTeam);

// Update team by ID
router.put('/:teamId', TeamController.updateTeam);

// Delete team by ID
router.delete('/:teamId', TeamController.deleteTeam);

module.exports = router;