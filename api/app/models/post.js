// app/models/post.js
// get mongoose module
var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
  title: String,
  body: String, 
  athlete_id: String, 
  user_id: String,
  author: String,
  date: Date, 
  likes: [String], 
  comments: [{
    body: String, 
    date: Date, 
    user: {
      name: String, 
      athlete_id: String, 
      profilePicUrl: String,
      id: String
    }
  }], 
  result_id: String, 
  photo_url: String
}); 

postSchema.index({ user_id: 1 })
postSchema.index({ result_id: 1 })
module.exports = mongoose.model('Post', postSchema)