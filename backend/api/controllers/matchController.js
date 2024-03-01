const Match = require('../../models/MatchModel');

exports.getAllMatches = async (req, res) => {
    try {
        const match = await Match.find({});
        if (!match) {
            return res.status(404).json({ message: 'Match not found' });
        }
        res.status(200).json(match);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getMatchById = async (req, res) => {
    try {
        const match = await Match.findById(req.params.matchId);
        if (!match) {
            return res.status(404).json({ message: 'Match not found' });
        }
        res.status(200).json(match);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createMatch = async (req, res) => {
    try {
        const match = await Match.create(req.body);
        res.status(201).json(match);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateMatch = async (req, res) => {
    try {
        const updatedMatch = await Match.findByIdAndUpdate(req.params.matchId, req.body, { new: true });
        if (!updatedMatch) {
            return res.status(404).json({ message: 'Match not found' });
        }
        res.status(200).json(updatedMatch);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteMatch = async (req, res) => {
    try {
        const deletedMatch = await Match.findByIdAndDelete(req.params.matchId);
        if (!deletedMatch) {
            return res.status(404).json({ message: 'Match not found' });
        }
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
