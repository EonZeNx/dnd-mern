const router = require('express').Router();
let AbtilityScore = require('../models/ability_score.model');


// get all
router.route('/').get((req, res) => {
    AbtilityScore.find()
        .then(ability_scores => res.json(ability_scores))
        .catch(err => res.status(400).json('Error: ' + err));
});

// get one
router.route('/:id').get((req, res) => {
    AbtilityScore.findById(req.params.id)
        .then(ability_scores => res.json(ability_scores))
        .catch(err => res.status(400).json('Error: ' + err));
});

// delete one
router.route('/:id').delete((req, res) => {
    AbtilityScore.findByIdAndDelete(req.params.id)
        .then(features => res.json('Abtility Score deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// add
router.route('/add').post((req, res) => {
    const short_hand = req.body.short_hand;
    const name = req.body.name;
    const description = req.body.description;

    const newAbtiltyScore = new AbtilityScore({short_hand, name, description});
    newAbtiltyScore.save()
        .then(() => res.json('Ability Score added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;