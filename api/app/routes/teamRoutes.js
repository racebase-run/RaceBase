// setup express and router
var express = require('express')
var router = express.Router()

// import models
var User = require('../models/user')
var Team = require('../models/team')
var Result = require('../models/result')

// import authCheck middleware
var authCheck = require('../auth')

// import extras 
const moment = require('moment')
const uuidv1 = require('uuid/v1')
const fs = require('fs')
const Handlebars = require('handlebars')

// import mail stuff
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// get list of all athletes on team's current roster
router.get('/:id/roster', authCheck, async (req, res) => {
  try {
    let coach = await User.findById(req.userId)
    if (!coach) res.send("No user found")
    if (!coach.coach) res.send("You're not a coach")
    else if (coach.team_id != req.params.id) res.send("This isn't your team")
    let team = await Team.findOne({ team_id: coach.team_id })
    let athletes = []
    for (const athlete of team.roster) {
      let user = await User.findOne({ athlete_id: athlete, coach: false || null })
                          .select({ password: 0, email: 0, emailVer: 0, referrer: 0 })
                          .lean()
      // if a user has claimed that ID, push their data to Athletes array
      if (user) athletes.push(user)
      // otherwise, just push the athlete ID
      else athletes.push({ athlete_id: athlete })
    }
    res.send(athletes)
  } catch (e) { res.send(e) }
})

// get list of all athletes affiliated with a team
router.get('/:id/athletes', async (req, res) => {
  let data = await Result.find({ team_id: req.params.id }).distinct('athlete_id')
  let athletes = []
  // iterate through all distinct athlete ID's
  for (const athlete of data) {
    let user = await User.findOne({ athlete_id: athlete, coach: false || null })
                        .select({ password: 0, email: 0, emailVer: 0, referrer: 0 })
                        .lean()
    // if a user has claimed that ID, push their data to Athletes array
    if (user) athletes.push(user)
    // otherwise, just push the athlete ID
    else athletes.push({ athlete_id: athlete })
  }
  res.send(athletes)
})

router.get('/:id', authCheck, async (req, res) => {
  let user = await User.findById(req.userId)
  if (!user.coach) res.send("You're not a coach")
  else {
    let team = await Team.findOne({ team_id: req.params.id })
    if (!team) res.send("That team doesn't exist")
    else if (team.coach != req.userId || user.team_id != team.team_id) 
      res.send("This isn't your team")
    else res.send(team)
  }
})

router.get('/public/:id', async (req, res) => {
  let team = await Team.findOne({ team_id: req.params.id })
  if (!team) res.send("That team doesn't exist")
  else {
    delete team.join_code
    res.send(team)
  }
})

router.post('/join/:code', authCheck, async (req, res) => {
  let team = await Team.findOne({ join_code: req.params.code })
  if (!team) res.send("No team with that join code exists")
  let user = await User.findById(req.userId)
  user.team_id = team.team_id
  await user.save()
  res.send("Joined team")
})

router.post('/schedule', authCheck, async(req, res) => {
  let user = await User.findById(req.userId)
  if (!user.coach) res.send("You're not a coach")
  let team = await Team.findOne({ team_id: user.team_id })
  team.schedule.push(req.body)
  await team.save()
  res.send("Successfully added meet to schedule")
})

router.post('/leave/', authCheck, async (req, res) => {
  let user = await User.findById(req.userId)
  user.team_id = null
  await user.save()
  res.send("Left team")
})

// small function to create a team with a join code
let createTeam = async (user_id, team_id) => {
  // create join code
  let join_code = uuidv1()

  // create new team
  let props = { 
    join_code: join_code, 
    coach: user_id,
    team_id: team_id
  }

  let newTeam = await Team.create(props)
  return newTeam
}

let sendInviteEmail = async function(email, coachname, firstname, joincode, teamname, callback) {
  fs.readFile('./mail_templates/invite.hbs', 'utf8', (err, source) => {
    let template = Handlebars.compile(source)
    let data = { 
      teamname: teamname, 
      coachname: coachname, 
      firstname: firstname, 
      joincode: joincode
    }
    let content = template(data)
    const msg = {
      to: email,
      from: { email: 'donotreply@racebase.io', name: 'Coach ' + coachname + ' - RaceBase' },
      subject: 'Invitation to join ' + teamname, 
      html: content
    };
    sgMail.send(msg)
    callback()
  })
}

router.post('/invite/:athlete_id', authCheck, async (req, res) => {
  try {
    let coach = await User.findById(req.userId)
    // make sure user is a coach
    if (!coach.coach) res.send("You're not a coach")
    // if they're all good, get the athlete and team
    let athlete = await User.findOne({ athlete_id: req.params.athlete_id })
    let team = await Team.findOne({ team_id: coach.team_id })
    let teamname = team.name ? team.name : team.team_id
    sendInviteEmail(athlete.email, coach.name, athlete.name.split(' ')[0], team.join_code, team.name, () => {
      res.send("Successfully invited athlete to join team")
    })
  } catch(err) {
    res.send(err)
  }
})

router.post('/claim/:id', authCheck, async (req, res) => {
  let user = await User.findById(req.userId)
  if (!user.coach) res.send("You are not a coach")
  else if (user.team_id) res.send("You already own a team")
  else {
    let team_id = req.params.id

    // get Team object if one exists; if not, create one
    let team = await Team.findOne({ team_id: team_id })
    if (!team) team = createTeam(req.userId, team_id)   

    // check if there's a coach who owns this team already
    let taken = await User.findOne({ team_id: team_id, coach: true })
    if (taken) res.send("This team has already been claimed")

    else {
      user.team_id = team_id
      await user.save()
      res.send("Successfully claimed team")
    }

  } 
})

router.post('/roster/athlete/:id', authCheck, async (req, res) => {
  let user = await User.findById(req.userId)
  if (!user.coach) res.send("You are not a coach")
  else if (!user.team_id) res.send("You haven't claimed a team")
  else {
    let team = await Team.findOne({ team_id: user.team_id })
    team.roster.push(req.params.id)
    await team.save()
    res.send("Successfully added athlete to roster")
  }
})

router.post('/:id', authCheck, async (req, res) => {
  let user = await User.findById(user_id)
  let team = await Team.findOne({ team_id: req.params.id })
  // make sure user is a coach
  if (!user.coach) res.send("You are not a coach")
  // make sure this team doesn't already exist
  else if (team) res.send("That team already exists")

  // assign team_id to coach
  user.team_id = team_id
  await user.save()

  // create team
  let newTeam = await createTeam(user._id, req.params.id)
  res.send(newTeam)
})

router.put('/:id', authCheck, async (req, res) => {
  let user = await User.findById(req.userId)
  // make sure user is a coach
  if (!user.coach) res.send("You are not a coach")
  // make sure user owns this team
  if (user.team_id != req.params.id) res.send("You don't own this team")
  // make sure people aren't messing with data they shouldn't be
  delete req.body.join_code
  delete req.body.coach
  // then, update their team and send updated object
  let team = await Team.findOneAndUpdate({ team_id: req.params.id }, req.body, { new: true })
  res.send(team)
})

router.delete('/roster/athlete/:id', authCheck, async (req, res) => {
  let user = await User.findById(req.userId)
  if (!user.coach) res.send("You are not a coach")
  else if (!user.team_id) res.send("You haven't claimed a team")
  else {
    let team = await Team.findOne({ team_id: user.team_id })
    let i = team.roster.indexOf(req.params.id)
    team.roster.splice(i, 1)
    await team.save()
    res.send("Successfully removed athlete from roster")
  }
})

router.delete('/schedule/:date', authCheck, async (req, res) => {
  // make sure date is valid
  let date = moment(req.params.date, 'DDMMYYYY')
  if (!date.isValid()) res.send("Invalid date")

  // make sure user is a coach
  let user = await User.findById(req.userId)
  if (!user.coach) res.send("You're not a coach")
  let team = await Team.findOne({ team_id: user.team_id })
  
  // get index of element to be removed
  let i = team.schedule.map((e) => { 
    return moment(e.date).format('DDMMYYYY') 
  }).indexOf(req.params.date)

  // remove element from array and save
  team.schedule.splice(i, 1)
  await team.save()
  res.send("Successfully removed meet from schedule")
})

module.exports = router