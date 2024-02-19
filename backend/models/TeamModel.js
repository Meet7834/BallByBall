const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    players: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    captain: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    wk: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    matchesPlayed: {
        type: Number,
        default: 0
    },
    matchesWon: {
        type: Number,
        default: 0
    },
    matchesLost: {
        type: Number,
        default: 0
    }
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;