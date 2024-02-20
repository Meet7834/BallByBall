const express = require('express');
const Match = require('../models/MatchModel');

const router = express.Router();

// Route to create a new Match
router.post('/matches', async (req, res) => {
    try {
        const matchData = req.body;
        const newMatch = new Match(matchData);
        await newMatch.save();
        res.status(201).json({ message: 'Match created successfully', match: newMatch });
    } catch (error) {
        res.status(400).json({ message: 'Failed to create match', error: error.message });
    }
});

// Route to get all Matches
router.get('/matches', async (req, res) => {
    try {
        const matches = await Match.find();
        res.status(200).json(matches);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch matches', error: error.message });
    }
});

// Route to get a specific match by ID
router.get('/matches/:id', async(req, res) => {
    try {
        const match = await Match.find(req.params.id);
        if(!match) {
            return res.status(404).json({ message: 'Match not found' });
        }
        res.status(200).json(match);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch match', error: error.message });
    }
});

module.exports = router;