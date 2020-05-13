const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conditionSchema = new Schema({
    name: {type: String, required: true, trim: true, minlength: 2},
    description: {type: [String], required: true},
    url: {type: String}
});

const Condition = mongoose.model('Condition', conditionSchema);

module.exports = Condition;