var mongoose = require('mongoose');

var workoutgroupSchema = mongoose.Schema({
    name: String,
    team_id: String, 
    athletes: [String]
}); 

module.exports = mongoose.model('WorkoutGroup', workoutgroupSchema);