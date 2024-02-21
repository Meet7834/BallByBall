const express = require('express');
const Scorecard = require('../models/ScorecardModel');

const router = express.Router();

// Route to create a new scorecard
router.post('/scorecards', async (req, res) => {
    try {
        const scorecardData = req.body;
        const newScorecard = new Scorecard(scorecardData);
        await newScorecard.save();
        res.status(201).json({ message: 'Scorecard created successfully', scorecard: newScorecard });
    } catch (error) {
        res.status(400).json({ message: 'Failed to create scorecard', error: error.message });
    }
});

// Route to get all scorecard
router.get('/scorecards', async (req, res) => {
    try {
        const scorecards = await Scorecard.find();
        res.status(200).json(scorecards);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch scorecards', error: error.message });
    }
});

// Route to get a specific scorecard by name
router.get('/scorecards/:name', async (req, res) => {
    try {
        const scorecard = await Scorecard.findOne(req.params.name);
        if(!scorecard) {
            return res.status(404).json({ message: 'Scorecard not found' });
        }
        res.status(200).json(scorecard);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch scorecard', error: error.message });
    }
});

// Route to update a scorecard's info
router.put('/scorecards/:id', async (req, res) => {
    try {
        const scorecardId = req.params.id;
        const updatedScorecardData = req.body;

        const updatedScorecard = await Scorecard.findByIdAndUpdate(scorecardId, updatedScorecardData, { new: true });
        if(!updatedScorecard) {
            return res.status(404).json({ message: 'Scorecard not found' });
        }
        res.status(200).json({ message: 'Scorecard updated successfully', scorecard: updatedScorecard });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update scorecard', error: error.message });
    }
});

// Route to delete a scorecard's info
router.delete('/scorecards/:id', async (req, res) => {
    try {
        const scorecardId = req.params.id;
        const deletedScorecard = await Scorecard.findByIdAndDelete(scorecardId);

        if(!deletedScorecard) {
            return res.status(404).json({ message: 'Scorecard not found' });
        }
        res.status(200).json({ message: 'Scorecard deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete scorecard', error: error.message });
    }
});

module.exports = router;