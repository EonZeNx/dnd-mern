const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const languageSchema = new Schema({
    name: {type: String, required: true, trim: true, minlength: 2},
    typical_speakers: {type: [mongoose.Schema.Types.ObjectId], ref: 'Race'},
});

const Language = mongoose.model('Language', languageSchema);

module.exports = Language;