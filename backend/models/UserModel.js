const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const battingStatsSchema = new Schema({
    
// });

// const bowlingStatsSchema = new Schema({

// });

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        unqiue: true,
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708300800&semt=ais',
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        default: 'Male',
    },
    playerRole: {
        type: String,
        enum: ['Batsman', 'Bowler', 'All-Rounder', 'Wicketkeeper'],
        default: 'Batsman',
    },
    battingStyle: {
        type: String,
        enum: ['Right-handed', 'Left-handed'],
        default: 'Right-handed',
    },
    bowlingStyle: {
        type: String,
        enum: ['Right-arm fast', 'Right-arm medium', 'Right-arm offbreak', 'Right-arm legbreak', 'Left-arm fast', 'Left-arm medium', 'Left-arm orthodox', 'Left-arm offbreak'],
        default: 'Right-arm fast',
    },
    dateOfBirth: {
        type: Date,
        default: Date.parse('2000-01-01'),
    },
    stats: {
        matches: {
            type: Number,
            default: 0,
        },
        matchesWon: {
            type: Number,
            default: 0,
        },
        matchesLost: {
            type: Number,
            default: 0,
        },
        battingStats: {
            inningsBatted: {
                type: Number,
                default: 0
            },
            notOut: {
                type: Number,
                default: 0
            },
            runs: {
                type: Number,
                default: 0
            },
            highestScore: {
                type: Number,
                default: 0
            },
            battingAvg: {
                type: Number,
                default: 0
            },
            ballsFaced: {
                type: Number,
                default: 0
            },
            halfCenturies: {
                type: Number,
                default: 0
            },
            centuries: {
                type: Number,
                default: 0
            }
        },
        bowlingStats: {
            innings: {
                type: Number,
                default: 0,
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
            bestBowling: {
                type: String,
                default: 'NA'
            },
            bowlingSR: {
                type: Number,
                default: 0,
            },
            bowlingAvg: {
                type: Number,
                default: 0,
            },
            fiveWicketsHaul: {
                type: Number,
                default: 0,
            },
            bowlingEcon: {
                type: Number,
                default: 0,
            }
        }
    },
    matches: [{
        type: Schema.Types.ObjectId,
        ref: 'Match'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
