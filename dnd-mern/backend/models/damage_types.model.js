const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const damage_typeSchema = new Schema({
    name: {type: String, required: true, trim: true, minlength: 2},
    description: {type: String, required: true}
});

const Damage_Type = mongoose.model('Damage_Type', raceSchema);

module.exports = Damage_Type;