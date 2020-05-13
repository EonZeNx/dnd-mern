import { Schema, mongo, Mongoose } from "mongoose";

const Schema = mongoose.Schema;

const UnlockedFeature = new Schema({
    level: {type: Number, required: true},
    origin: {type: String, enum: ['Race', 'Class', 'Feat']},
    feature: {type: mongoose.Schema.Types.ObjectId, ref: 'Feature'},
});

const UnlockedFeature = mongoose.model('UnlockedFeature', UnlockedFeatureSchema);

module.exports = UnlockedFeature;