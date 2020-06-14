// app/models/vote.js
// get mongoose module
var mongoose = require('mongoose');

var voteSchema = mongoose.Schema({
  up: {type : Boolean, default: true},
  user_id: {type : String, default: ''},
  race_id: {type : String, default: ''}
}, { autoIndex: true });

module.exports = mongoose.model('Vote', voteSchema);