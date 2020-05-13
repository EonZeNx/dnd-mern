const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ability_scoreSchema = new Schema({
    short_hand: {type: String, required: true, trim: true, minlength: 3},
    name: {type: String, required: true, trim: true, minlength: 3},
    description: {type: [String], required: true},
    skills: {type: [mongoose.Schema.Types.ObjectId], ref: 'Skill'},
    url: {type: String}
});

const Ability_Score = mongoose.model('Ability_Score', ability_scoreSchema);

module.exports = Ability_Score;