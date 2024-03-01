const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const overSchema = new Schema({
    balls:[{
        type: String
    }]
});

const extrasSchema = new Schema({
    noBalls: {
        type:Number,
        default: 0
    },
    legByes: {
        type:Number,
        default: 0
    },
    byes: {
        type:Number,
        default: 0
    },
    wides: {
        type:Number,
        default: 0
    },
});

const bowlingStatsSchema = new Schema({
    playerId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    overs: {
        type: Number,
        default: 0,
    },
    balls: {
        type: Number,
        default: 0,
    },
    maidens: {
        type: Number,
        default: 0,
    },
    runsConceded: {
        type: Number,
        default: 0,
    },
    wickets: {
        type: Number,
        default: 0,
    },
    extras: extrasSchema
});

const battingStatsSchema = new Schema({
    playerId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    didBat: {
        type: Boolean,
        default: false
    },
    runs: {
        type:Number,
        default: 0,
    },
    balls: {
        type:Number,
        default: 0,
    },
    dots: {
        type:Number,
        default: 0,
    },
    ones: {
        type:Number,
        default: 0,
    },
    twos: {
        type:Number,
        default: 0,
    },
    threes: {
        type:Number,
        default: 0,
    },
    fours: {
        type:Number,
        default: 0,
    },
    sixes: {
        type:Number,
        default: 0,
    },
    outMethod: {
        type: String,
        enum: ['dnb', 'notout', 'lbw', 'stumped', 'runout', 'bowled', 'caught'],
        default: 'dnb'
    },
    wicketTaker: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const inningSchema = new Schema({
    inningNum: {
        type: Number,
        default: 0,
    },
    runs: {
        type: Number,
        default: 0,
    },
    wickets: {
        type: Number,
        default: 0,
    },
    extras: extrasSchema,
    currOver: {overSchema},
    overs:[overSchema],
    currBatters: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    currBowler: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    battingStats: [battingStatsSchema],
    bowlingStats: [bowlingStatsSchema],
});

const scorecardSchema = new Schema({
    innings: [inningSchema],
    currInnings: {
        type: Number,
        default: 1,
    }
});

const Scorecard = mongoose.model('Scorecard', scorecardSchema);

module.exports = Scorecard;