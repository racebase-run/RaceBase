// app/models/roster.js
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var rosterSchema = mongoose.Schema({
    name: String, 
    team_id: String, // human readable team ID
    athletes: [String] // array of Athlete IDs, not MongoDB user IDs
    // this is because a coach can add athletes to a roster even if they aren't signed up yet
});

module.exports = mongoose.model('Roster', rosterSchema);
