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

// Route to get a specific match by id
router.get('/matches/:id', async(req, res) => {
    try {
        const match = await Match.findById(req.params.id);
        if(!match) {
            return res.status(404).json({ message: 'Match not found' });
        }
        res.status(200).json(match);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch match', error: error.message });
    }
});

// Route to update a match's info
router.put('/matches/:id', async (req, res) => {
    try {
        const matchId = req.params.id;
        const updatedMatchData = req.body;

        const updatedMatch = await Match.findByIdAndUpdate(matchId, updatedMatchData, { new: true });
        if(!updatedMatch) {
            return res.status(404).json({ message: 'Match not found' });
        }
        res.status(200).json({ message: 'Match updated successfully', match: updatedMatch });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update Match', error: error.message });
    }
});

// Route to delete a match's info
router.delete('/matches/:id', async (req, res) => {
    try {
        const matchId = req.params.id;
        const deletedMatch = await Match.findByIdAndDelete(matchId);

        if(!deletedMatch) {
            return res.status(404).json({ message: 'Match not found' });
        }
        res.status(200).json({ message: 'Match deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete match', error: error.message });
    }
});

module.exports = router;