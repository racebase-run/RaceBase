// app/routes/logRoutes.js
var express = require('express')
var router = express.Router()

var Entry = require('../models/entry')
var authCheck = require('../auth')

var moment = require('moment')

router.get('/:date?', authCheck, (req, res) => {

  let dateFormat = "MM-DD-YYYY"
  let m 
  if (moment(req.params.date, dateFormat).isValid()) m = moment(req.params.date, dateFormat)
  else m = moment(new Date()) 

  let day  = m.startOf('day').toDate()

  Entry.findOne({ date: day, userId: req.userId }, (err, data) => {
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

router.get('/list/week',authCheck, (req, res) => {
  let today = moment()
  let monday = today.startOf('isoWeek').toDate()
  let sunday = today.endOf('isoWeek').toDate()
  Entry.find({ userId: req.userId, date: { $gte: monday, $lt: sunday }}, (err, data) => {
    if (err)
      res.status(500).send(err)
    else
      res.send(data)
  })
})

router.get('/avg/moving/rhr',authCheck, (req, res) => {
  let today = moment().toDate()
  let daysago = moment().subtract(5, 'days').toDate()
  Entry.find({ userId: req.userId, date: { $gte: daysago, $lt: today }}, (err, data) => {
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

router.get('/avg/moving/sleep',authCheck, (req, res) => {
  let today = moment().toDate()
  let daysago = moment().subtract(5, 'days').toDate()
  Entry.find({ userId: req.userId, date: { $gte: daysago, $lt: today }}, (err, data) => {
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
      let formattedAvg = hours + ":" + minutes

      res.send({ avg: formattedAvg })

    } else res.send("No entries to average")
  })
})

router.post('/:date?', authCheck, (req, res) => {
  let entry = req.body

  entry.userId = req.userId

  let dateFormat = "MM-DD-YYYY"
  let m 
  if (moment(req.params.date, dateFormat).isValid()) m = moment(req.params.date, dateFormat)
  else m = moment(new Date()) 

  let day  = m.startOf('day').toDate()

  entry.date = day

  Entry.findOneAndUpdate({ date: day, userId: req.userId }, entry, { upsert: true, new: true }, 
  (err, data) => {
    if (err)
      res.status(500).send(err)
    else 
      res.send({ message: "Successfully created entry.", entry: data })
  })
})

module.exports = router 