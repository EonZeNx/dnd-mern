const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weapon_propertiesSchema = new Schema({
    name: {type: String, required: true, trim: true, minlength: 2},
    description: {type: [String], required: true},
    url: {type: String}
});

const Weapon_Properties = mongoose.model('Weapon_Properties', weapon_propertiesSchema);

module.exports = Weapon_Properties;