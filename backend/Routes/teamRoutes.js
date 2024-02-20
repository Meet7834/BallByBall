const express = require('express');
const Team = require('../models/TeamModel');

const router = express.Router();

// Route to create a new Team
router.post('/teams', async (req, res) => {
    try {
        const teamData = req.body;
        const newTeam = new Team(teamData);
        await newTeam.save();
        res.status(201).json({ message: 'team created successfully', Team: newTeam });
    } catch (error) {
        res.status(400).json({ message: 'Failed to create team', error: error.message });
    }
});

// Route to get all Teams
router.get('/teams', async (req, res) => {
    try {
        const teams = await Team.find();
        res.status(200).json(Teams);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch Team', error: error.message });
    }
});

// Route to get a specific team by ID
router.get('/teams/:id', async (req, res) => {
    try {
        const team = await Team.findById(req.params.id);
        if (!team) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch team', error: error.message });
    }
});

module.exports = router;