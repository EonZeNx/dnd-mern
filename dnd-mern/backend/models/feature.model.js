import { Schema, mongo, Mongoose } from "mongoose";

const Schema = mongoose.Schema;

const FeatureSchema = new Schema({
    name: {type: String, required: true, trim: true, minlength: 2},
    description: {type: [String], required: true},
    url: {type: String}
});

const Feature = mongoose.model('Feature', FeatureSchema);

module.exports = Feature;