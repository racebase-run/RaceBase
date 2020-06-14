// app/models/race.js
// get mongoose module
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var raceSchema = mongoose.Schema({
  name : {type : String, default: ''},
  location: {type : String, default: ''},
  date: {type : Date},
  link: {type : String, default: ''},
  verified: {type : Boolean, default: false},
  user: {type : String, default: ''},
  user_id: {type : String, default: ''},
  upvotes: {type: Number, default: 0},
  downvotes: {type: Number, default: 0}
}, { autoIndex: true });

raceSchema.plugin(mongoosePaginate);

raceSchema.index({ name : 'text', location : 'text', user : 'text'});
raceSchema.index({ user_id: 1 });

module.exports = mongoose.model('Race', raceSchema);
