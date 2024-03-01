const Team = require('../../models/TeamModel');

exports.getAllTeams = async (req, res) => {
    try {
        const team = await Team.find();
        if (!team) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTeamById = async (req, res) => {
    try {
        const team = await Team.findById(req.params.teamId).populate('players');
        if (!team) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createTeam = async (req, res) => {
    try {
        const team = await Team.create(req.body);
        res.status(201).json(team);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateTeam = async (req, res) => {
    try {
        const updatedTeam = await Team.findByIdAndUpdate(req.params.teamId, req.body, { new: true });
        if (!updatedTeam) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.status(200).json(updatedTeam);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteTeam = async (req, res) => {
    try {
        const deletedTeam = await Team.findByIdAndDelete(req.params.teamId);
        if (!deletedTeam) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
