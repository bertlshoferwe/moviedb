const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const savedMovieSchema = new Schema({
    fireBaseId: { type: String, required: true},
    movieId: { type: String, required: true },
    date: { type: Date, required: true },
},{
    timestamps:true,
});

const SavedMovie = mongoose.model('SavedMovie', savedMovieSchema);

module.exports = SavedMovie;