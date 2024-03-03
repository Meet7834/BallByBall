const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const extrasSchema = new Schema({
    noBalls: {
        type: Number,
        default: 0,
    },
    legByes: {
        type: Number,
        default: 0,
    },
    byes: {
        type: Number,
        default: 0,
    },
    wides: {
        type: Number,
        default: 0,
    }
});

const matchSchema = new Schema({
    isLive: {
        type: Boolean,
        default: true
    },
    hostId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    scorecard: {
        type: Schema.Types.ObjectId,
        ref: 'Scorecard'
    },
    totalOvers: {
        type: Number,
        default: 1
    },
    battingTeam: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    bowlingTeam: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    extras: extrasSchema,
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;