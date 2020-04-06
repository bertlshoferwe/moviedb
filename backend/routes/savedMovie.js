const router = require('express').Router();
let SavedMovie = require('../models/savedMovie.model');

//route to get all s from database
router.route('/').get((req,res) => {
    SavedMovie.find()
        .then(savedMovie => res.json(savedMovie))
        .catch(err => res.status(400).json('Error: ' + err));
});

//route to get savedMovie by id
router.route('/:id').get((req,res) => {
    SavedMovie.find( { "fireBaseId": req.body.fireBaseId } )
            .then(savedMovie => res.json(savedMovie))
            .catch(err => res.status(400).json('Error: ' + err))
});

//route to add new savedMovie to database
router.route('/add').post((req, res) => {
    const fireBaseId = req.body.fireBaseId;
    const movieId = req.body.movieId;
    const date = Date.parse(req.body.date)
    
    const newSavedMovie = new SavedMovie({
        fireBaseId,
        movieId,
        date,
    });

    newSavedMovie.save()
        .then(() => res.json('Movie Added!'))
        .catch( err => res.status(400).json('Error: ' + err));
});

//update savedMovie by id
router.route('/update/:id').post((req,res) => {
    SavedMovie.findById(req.params.id)
        .then(savedMovie => {
            savedMovie.fireBaseId = req.body.fireBaseId;
            savedMovie.movieId = req.body.movieId;
            savedMovie.date = req.body.date;

            SavedMovie.save()
            .then(() => res.json('Updated Saved Movie'))
            .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete savedMovie by id
router.route('/:id').delete((req,res) => {
    SavedMovie.findByIdAndDelete(req.params.id)
        .then(() => res.json('Movie Removed'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//export route
module.exports = router;