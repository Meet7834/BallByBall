const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const extrasSchema = new Schema({
    noBalls: Number,
    legByes: Number,
    byes: Number,
    wides: Number
});

const matchSchema = new Schema({
    isLive: {
        type: Boolean,
        default: false
    },
    venue: String,
    teams: [{
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }],
    hostId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    matchDate: Date,
    scoreCardID: {
        type: Schema.Types.ObjectId,
        ref: 'Scorecard'
    },
    tossWinner: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    tossDecision: String,
    manOfTheMatch: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    extras: extrasSchema,
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;