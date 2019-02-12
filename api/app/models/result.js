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
  post_id: {type: String}
});

resultSchema.plugin(mongoosePaginate);

resultSchema.index({ 
  athlete : 'text', 
  race : 'text', 
  team : 'text'
}, { 
  weights: {
    athlete: 10, 
    team: 9, 
    race: 1
  } 
});
resultSchema.index({ race_id: 1, gender: 1, event: 1 })
resultSchema.index({ team_id: 1, date: 1 })
resultSchema.index({ athlete_id: 1 })

module.exports = mongoose.model('Result', resultSchema);