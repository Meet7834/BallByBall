const Scorecard = require('../../models/ScorecardModel');

exports.getAllScorecards = async (req, res) => {
    try {
        const scorecard = await Scorecard.find({}).populate();
        if (!scorecard) {
            return res.status(404).json({ message: 'Scorecard not found' });
        }
        res.status(200).json(scorecard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getScorecardById = async (req, res) => {
    try {
        const scorecard = await Scorecard.findById(req.params.scorecardId).populate();
        if (!scorecard) {
            return res.status(404).json({ message: 'Scorecard not found' });
        }
        res.status(200).json(scorecard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createScorecard = async (req, res) => {
    try {
        const scorecard = await Scorecard.create(req.body);
        res.status(201).json(scorecard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateScorecard = async (req, res) => {
    try {
        const updatedScorecard = await Scorecard.findByIdAndUpdate(req.params.scorecardId, req.body, { new: true });
        if (!updatedScorecard) {
            return res.status(404).json({ message: 'Scorecard not found' });
        }
        res.status(200).json(updatedScorecard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteScorecard = async (req, res) => {
    try {
        const deletedScorecard = await Scorecard.findByIdAndDelete(req.params.scorecardId);
        if (!deletedScorecard) {
            return res.status(404).json({ message: 'Scorecard not found' });
        }
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
