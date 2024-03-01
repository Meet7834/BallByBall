const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name:{
        type: 'string',
        required: true,
    },
    players: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;