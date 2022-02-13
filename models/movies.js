var mongoose = require('mongoose');
var movieSchema = mongoose.Schema({
    name: String,
    rating: Number
})

module.exports = mongoose.models('movies', movieSchema);