var mongoose = require('mongoose');

var teamSchema = mongoose.Schema({
  team_id: String, // human readable identifier 
  join_code: String, // generated UUID to give to athletes to join team
  coach: String, // coach's _id
  roster: [String], // array of current athlete's athlete IDs
  name: String // team name
})

module.exports = mongoose.model('Team', teamSchema);