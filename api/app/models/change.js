// app/models/change.js
var mongoose = require('mongoose');

var changeSchema = mongoose.Schema({
  date: Date, 
  type: String, 
  version: Number,
  author: String, // user ID of author
  document_id: String,
  document: {}
});

module.exports = mongoose.model('Change', changeSchema);
// create new change document on every update of Result or Race