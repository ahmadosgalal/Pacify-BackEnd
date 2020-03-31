var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: {type: String, required: true},
    name: {type: String, required: true},
    year: {type: Number, required: true},
    timesPlayed: {type: Number, default: 0},
    userId:{type: Array, default:[]},
    artist: {type: String, required: true},
    songs:{type: Array, default:[]}
});

module.exports = mongoose.model('Album', schema);