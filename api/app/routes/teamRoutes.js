// setup express and router
var express = require('express')
var router = express.Router()

// import models
var User = require('../models/user')
var Team = require('../models/team')

// import authCheck middleware
var authCheck = require('../auth')

// import extras 
const uuidv1 = require('uuid/v1')

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

module.exports = router