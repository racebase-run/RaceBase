// app/routes/logRoutes.js
var express = require('express')
var router = express.Router()

var User = require('../models/user')
var Entry = require('../models/entry')
var authCheck = require('../auth')

const moment = require('moment-timezone')
moment.tz.setDefault("America/Los_Angeles")

let createDay = function(date) {
  let dateFormat = "MM-DD-YYYY"
  let m 
  if (moment(date, dateFormat).isValid()) m = moment(date, dateFormat)
  else m = moment(new Date()) 

  let day  = m.startOf('day').toDate()
  return day
}

router.get('/athlete/:id/week/:date?', authCheck, async (req, res) => {
  let coach = await User.findById(req.userId)
  let athlete = await User.findOne({ athlete_id: req.params.id })
  if (!athlete) res.send("No user with that Athlete ID exists")
  else if (athlete._id == coach._id) res.send("These are your logs")
  else {
    // only send data if Coach is authorized to see athlete's data, or if athlete's data is public
    if (athlete.publicLogs || (athlete.team_id == coach.team_id && coach.coach)) {
      let day = moment(createDay(req.params.date))
      let monday = day.startOf('isoWeek').toDate()
      let sunday = day.endOf('isoWeek').toDate()

      let entries = await Entry.find({ date: { $gte: monday, $lte: sunday }, userId: athlete._id }).sort({ date: 1 })
      if (entries) res.send(entries)
      else res.send([])
    } else res.send("You aren't authorized to access this week's entries")
  }
})

router.get('/athlete/:id/month/:date?', async (req, res) => {
  try {
    let athlete = await User.findOne({ athlete_id: req.params.id })
    if (!athlete) res.send("No user with that Athlete ID exists")

    let authorized = true
    // if athlete's logs aren't public, check authorization
    if (!athlete.publicLogs) {
      await authCheck(req, res, () => { authorized = true })
      let coach = await User.findById(req.userId)
      if (req.userId == athlete._id) authorized = true
      else if (athlete.team_id == coach.team_id && coach.coach) authorized = true
    } else {
      authorized = true
    }

    // only send data if Coach is authorized to see athlete's data, or if athlete's data is public
    if (!authorized) { res.send("You're not authorized to view these logs"); }
    else {
      let start = moment(createDay(req.params.date)).subtract(28, 'days').startOf('isoWeek').toDate()
      let end = moment(createDay(req.params.date)).endOf('isoWeek').toDate()

      let entries = await Entry.find({ date: { $gte: start, $lte: end }, userId: athlete._id }).sort({ date: -1 })

      if (entries) res.send(entries)
      else res.send([])
    } 

  } catch(e) { res.send(e) }
})

router.get('/athlete/:id/:date?', authCheck, async (req, res) => {
  let coach = await User.findById(req.userId)
  let athlete = await User.findOne({ athlete_id: req.params.id })
  if (!athlete) res.send("No user with that Athlete ID exists")
  else if (athlete._id == coach._id) res.send("These are your logs")
  else {
    // only send data if Coach is authorized to see athlete's data, or if athlete's data is public
    if (athlete.publicLogs || (athlete.team_id == coach.team_id && coach.coach)) {
      let day = createDay(req.params.date)
      let entry = await Entry.findOne({ date: day, userId: athlete._id })
      if (entry) res.send(entry)
      else res.send({})
    } else res.send("You aren't authorized to access this entry")
  }
})

router.get('/list/week/:date?', authCheck, (req, res) => {
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

router.get('/schedule/:date?', authCheck, (req, res) => {
  let day  = createDay(req.params.date)
  Entry.findOne({ date: day, userId: req.userId }, (err, data) => {
    if (err)
      res.status(500).send(err)
    else if (data)
      res.send({ goal: data.mileageGoal })
    else 
      res.send({ goal: 0 })
  })
})

router.get('/streaks', authCheck, (req, res) => {
  let day = moment(new Date()).subtract(1, 'days').startOf('day').toDate()
  let query = {
    userId: req.userId, 
    date: { $lte: day }, 
  }
  Entry.find(query).sort({ date: -1 }).exec((err, data) => {
    if (err)
      res.status(500).send(err)
    else if (!data)
      res.send({ streak: 0 })
    else {
      let streaks = {}
      if (data[0].checks) {
        data[0].checks.forEach((val, key) => {
          streaks[key] = 0
          for (i in data) {
            if (data[i].checks) {
              if (data[i].checks.get(key)) streaks[key]++
              else break
            }
          }
        })
        res.send(streaks)
      } else res.send("No streak data available."); 
    } 
  })
})

router.get('/:date?', authCheck, (req, res) => {

  let day  = createDay(req.params.date)

  Entry.findOne({ date: day, userId: req.userId }, (err, data) => {
    if (err)
      res.status(500).send(err)
    else if (data) {
      if (data.runs) {
        for (i in data.runs) {
          if (data.runs[i] == null)
            data.runs.splice(i, 1)
        }
        data.save(() => {
          res.send(data)
        })
      } else res.send(data)
    } else res.send({})
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

router.post('/:date/goal', authCheck, (req, res) => {
  let day  = createDay(req.params.date)

  Entry.findOneAndUpdate({ userId: req.userId, date: day }, { mileageGoal : req.body.goal }, { upsert: true, new: true},
    (err, data) => {
      if (err)
        res.status(500).send(err)
      else 
        res.send({ message: "Successfully updated goal.", entry: data })
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