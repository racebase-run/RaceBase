// app/models/event.js
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var eventSchema = mongoose.Schema({
    name: String, 
    date: Date,
    race_id: String
});

module.exports = mongoose.model('Event', eventSchema);
