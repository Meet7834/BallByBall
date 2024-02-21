const express = require('express');
const Team = require('../models/TeamModel');

const router = express.Router();

// Route to create a new Team
router.post('/teams', async (req, res) => {
    try {
        const teamData = req.body;
        const newTeam = new Team(teamData);
        await newTeam.save();
        res.status(201).json({ message: 'Team created successfully', team: newTeam });
    } catch (error) {
        res.status(400).json({ message: 'Failed to create team', error: error.message });
    }
});

// Route to get all Teams
router.get('/teams', async (req, res) => {
    try {
        const teams = await Team.find();
        res.status(200).json(teams);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch team', error: error.message });
    }
});

// Route to get a specific team by name
router.get('/teams/:name', async (req, res) => {
    try {
        const team = await Team.findOne(req.params.name);
        if(!team) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch team', error: error.message });
    }
});

// Route to update a team's info
router.put('/teams/:id', async (req, res) => {
    try {
        const teamId = req.params.id;
        const updatedTeamData = req.body;

        const updatedTeam = await Team.findByIdAndUpdate(teamId, updatedTeamData, { new: true });
        if(!updatedTeam) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.status(200).json({ message: 'Team updated successfully', team: updatedTeam });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update team', error: error.message });
    }
});

// Route to delete a team's info
router.delete('/users/:id', async (req, res) => {
    try {
        const teamId = req.params.id;
        const deletedTeam = await Team.findByIdAndDelete(teamId);

        if(!deletedTeam) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.status(200).json({ message: 'Team deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete team', error: error.message });
    }
});

module.exports = router;