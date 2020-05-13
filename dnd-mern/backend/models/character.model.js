const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: {type: String, required: true, trim: true, minlength: 2},
    race: {type: mongoose.Schema.Types.ObjectId, ref: 'Race'},
    exp: {type: Number, required: true},
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;