const router = require('express').Router();
let Feature = require('../models/feature.model');


// get all
router.route('/').get((req, res) => {
    Feature.find()
        .then(features => res.json(features))
        .catch(err => res.status(400).json('Error: ' + err));
});

// get one
router.route('/:id').get((req, res) => {
    Feature.findById(req.params.id)
        .then(features => res.json(features))
        .catch(err => res.status(400).json('Error: ' + err));
});

// delete one
router.route('/:id').delete((req, res) => {
    Feature.findByIdAndDelete(req.params.id)
        .then(features => res.json('Feature deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// add
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const url = req.body.url;

    const newFeature = new Feature({name, description, url});
    newFeature.save()
        .then(() => res.json('Feature added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;