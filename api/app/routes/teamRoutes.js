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
const uuidv1 = require('uuid/v1')

// get list of all athletes on team's current roster
router.get('/:id/roster', authCheck, async (req, res) => {
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

router.post('/leave/', authCheck, async (req, res) => {
  let user = await User.findById(req.userId)
  user.team_id = null
  await user.save()
  res.send("Left team")
})

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

router.post('/claim/:id', authCheck, async (req, res) => {
  let user = await User.findById(req.userId)
  if (!user.coach) res.send("You are not a coach")
  else if (user.team_id) res.send("You already own a team")
  else {
    let team_id = req.params.id

    // get Team object if one exists; if not, create one
    let team = await Team.findOne({ team_id: team_id })
    if (!team) team = createTeam(user._id, team_id)   

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
  let user = await User.findById(user_id)
  // make sure user is a coach
  if (!user.coach) res.send("You are not a coach")
  // make sure user owns this team
  if (user.team_id != req.params.id) res.send("You don't own this team")
  // make sure people aren't messing with data they shouldn't be
  delete req.body.join_code
  delete req.body.coach
  // then, update their team and send updated object
  let team = await Team.findOneAndUpdate({ team_id: req.params.id }, req.body)
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

module.exports = router