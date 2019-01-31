// app/routes/logRoutes.js
var express = require('express')
var router = express.Router()

var Entry = require('../models/entry')
var authCheck = require('../auth')

var moment = require('moment')

let createDay = function(date) {
  let dateFormat = "MM-DD-YYYY"
  let m 
  if (moment(date, dateFormat).isValid()) m = moment(date, dateFormat)
  else m = moment(new Date()) 

  let day  = m.startOf('day').toDate()
  return day
}

router.get('/list/week/:date?',authCheck, (req, res) => {

  let day = moment(createDay(req.params.date))
  let monday = day.startOf('isoWeek').toDate()
  let sunday = day.endOf('isoWeek').toDate()

  Entry.find({ userId: req.userId, date: { $gte: monday, $lte: sunday }}).sort({ date: 1 }).exec((err, data) => {
    if (err)
      res.status(500).send(err)
    else 
      res.send(data)
  })
})

router.get('/list', authCheck, (req, res) => {
  Entry.find({ userId: req.userId }, (err, data) => {
    if (err)
      res.status(500).send(err)
    else 
      res.send(data)
  })
})

router.get('/:date?', authCheck, (req, res) => {

  let day  = createDay(req.params.date)

  Entry.findOne({ date: day, userId: req.userId }, (err, data) => {
    if (err)
      res.status(500).send(err)
    else 
      res.send(data)
  })
})

router.get('/avg/moving/rhr/:date?', authCheck, (req, res) => {

  let day = createDay(req.params.date)
  let daysago = moment(day).subtract(5, 'days').toDate()

  Entry.find({ userId: req.userId, date: { $gt: daysago, $lte: day }}, (err, data) => {
    if (err)
      res.status(500).send(err)
    else if (data) {
      var sum = 0
      var length = 0
      for (day in data) {
        if (data[day].rhr) {
          sum += data[day].rhr
          length++
        }
      }
      let avg = length > 0 ? (sum / length) : null
      res.send({ avg: avg })
    } else res.send("No entries to average")
  })
})

router.get('/avg/moving/sleep/:date?',authCheck, (req, res) => {

  let day = createDay(req.params.date)
  let daysago = moment(day).subtract(5, 'days').toDate()

  Entry.find({ userId: req.userId, date: { $gt: daysago, $lte: day }}, (err, data) => {
    if (err)
      res.status(500).send(err)
    else if (data) {
      var sum = 0
      var length = 0
      for (day in data) {
        if (data[day].sleep) {
          let a = data[day].sleep.split(':')
          let minutes = (+a[0]) * 60 + (+a[1])

          sum += minutes
          length++
        }
      }
      let avg = length > 0 ? (sum / length) : null

      let hours = Math.floor(avg / 60)
      let minutes = Math.round(((avg/60) - hours) * 60)
      minutes = ("0" + minutes).slice(-2)
      let formattedAvg = hours + ":" + minutes

      res.send({ avg: formattedAvg })

    } else res.send("No entries to average")
  })
})

router.post('/:date?', authCheck, (req, res) => {
  let entry = req.body
  let day  = createDay(req.params.date)

  entry.date = day
  entry.userId = req.userId

  Entry.findOneAndUpdate({ userId: req.userId, date: day }, entry, { upsert: true, new: true }, 
  (err, data) => {
    if (err)
      res.status(500).send(err)
    else 
      res.send({ message: "Successfully created entry.", entry: data })
  })
})

module.exports = router 