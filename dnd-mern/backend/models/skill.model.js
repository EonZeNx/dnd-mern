const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    name: {type: String, required: true, trim: true, minlength: 3},
    description: {type: [String], required: true},
    ability_score: {type: mongoose.Schema.Types.ObjectId, ref: 'Stat'},
    url: {type: String}
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;