// app/models/entry.js
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var entrySchema = mongoose.Schema({
  userId: String,
  run: {
    distance: Number, 
    time: String, 
    elevationGain: Number, 
    difficulty: { type: Number, min: 1, max: 5 }, 
    feel: { type: Number, min: 1, max: 5 }
  },
  weights: [{
    name: String, 
    sets: Number, 
    reps: Number
  }],
  sleep: String, 
  rhr: Number, 
  weight: Number,
  checks: { type: Map, of: Boolean }, 
  note: String, 
  date: Date, 
  metricUnits: { type: Boolean, default: false }
});

entrySchema.index({ date: 1, userId: 1 }, { unique: true })

module.exports = mongoose.model('Entry', entrySchema);