const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const raceSchema = new Schema({
    name: {type: String, required: true, trim: true, minlength: 2},
    speed: {}
});

const Race = mongoose.model('Race', raceSchema);

module.exports = Race;