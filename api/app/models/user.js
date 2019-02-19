// app/models/user.js
// get mongoose module
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name : {type : String, default: ''},
  email: {type : String, default: ''},
  password: {type : String, default: ''},
  athlete_id: {type: String, default: ''},
  aliases: [String], 
  following: [String],
  followers: [String],
  stravaUrl: {type: String},
  trainer: {type: String}, 
  racer: {type: String},
  location: {type: String},
  mileage: {type: String},
  profilePicUrl: {type: String},
  profilePic_id: {type: String},
  brandPicUrl: {type: String},
  brandPic_id: {type: String},
  featuredPicUrl: {type: String},
  featuredPic_id: {type: String}, 
  premium: Boolean, 
  coach: Boolean, 
  referralCode: String,
  referrer: String, 
  active: { type: Boolean, default: false }, 
  emailVer: String
});

module.exports = mongoose.model('User', userSchema);
