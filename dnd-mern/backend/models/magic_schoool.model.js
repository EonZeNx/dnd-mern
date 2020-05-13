const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const magic_schoolSchema = new Schema({
    name: {type: String, required: true, trim: true, minlength: 2},
    description: {type: [String], required: true},
    url: {type: String}
});

const Magic_School = mongoose.model('Magic_School', magic_schoolSchema);

module.exports = Magic_School;