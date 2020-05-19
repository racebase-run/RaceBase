var mongoose = require('mongoose');

var teamSchema = mongoose.Schema({
  team_id: String, // human readable identifier 
  join_code: String, // generated UUID to give to athletes to join team
  coach: String, // coach's _id
  name: String, // team name
  schedule: [{
    name: String, 
    location: String, 
    date: Date
  }]
})

module.exports = mongoose.model('Team', teamSchema);