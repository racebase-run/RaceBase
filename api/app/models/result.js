// app/models/result.js
// get mongoose module
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var resultSchema = mongoose.Schema({
  time: {type : String, default: ''},
  athlete: {type : String, default: ''},
  athlete_id: {type: String, default: ''},
  verified: {type : Boolean, default: false},
  user: {type : String, default: ''},
  user_id: {type: String, default: ''},
  race: {type: String, default: ''},
  race_id: {type: String, default: ''}, 
  womens: {type: Boolean, default: true},
  team: {type: String, default: ''},
  team_id: {type: String, default: ''},
  place: {type: Number},
  event: {type: String},
  date: {type: Date}, 
  post_id: {type: String}, 
  version: Number
});

resultSchema.plugin(mongoosePaginate);

resultSchema.index({ 
  'athlete' : 'text', 
  'athlete_id': 'text', 
  'race' : 'text', 
  'team' : 'text'
}, { 
  weights: {
    'athlete': 10, 
    'athlete_id': 9,
    'team': 5, 
    'race': 1
  } 
});

module.exports = mongoose.model('Result', resultSchema);