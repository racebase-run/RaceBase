var express = require('express')
var router = express.Router()
const _ = require('underscore')

var Race = require('../models/race');
var Result = require('../models/result')
var User = require('../models/user')
var authCheck = require('../auth')

const moment = require('moment')

router.get('/count', async function(req, res) {
  try {
    let count = await Result.find({}).count()
    res.send({count: count}) 
  } catch(e) { res.status(500).send(e) }
})

// Get team scores for specified race, gender, and event
router.get('/teamlist/:id/:gender/:event/', (req, res) => {

  var womens = true; 
  if (req.params.gender == "mens")
    womens = false; 

  Result.find({ 
    'race_id' : req.params.id, 
    'event' : decodeURI(req.params.event), 
    'womens' : womens
  })
  .lean().exec((err, results) => {
    if (results.length > 0) {

      let teamScores = []
      let teams = _.groupBy(results, 'team')

      // iterate through teams
      for (var team in teams) {
        if (team.toUpperCase() !== "UNATTACHED") {

          teams[team] = _.sortBy(teams[team], 'place')

          let score = 0
          let athletes = []
          let team_id = teams[team][0].team_id

          // iterate through first 5 results in team
          for (const result of teams[team]) {
            if (athletes.length < 5 && Number(result.place) > 0) {
              athletes.push(result)
              score += Number(result.place)
            }
          }

          // only count it if there's 5 or more athletes
          if (athletes.length >= 5) {
            teamScores.push({
              team: team, 
              score: score,
              team_id: team_id, 
              athletes: athletes
            })
          }
        }
      }
      res.send(_.sortBy(teamScores, 'score'))
    } else {
      res.send(null)
    }
  })
})

// Get years for a specified team and gender
router.get('/list/team/:id/:gender/years', function(req,res) {
  var womens = true; 
  if (req.params.gender == "mens")
    womens = false; 
  Result.find({ 'team_id' : req.params.id, 'womens' : womens })
        .lean()
        .select('date')
        .exec((err, data) => {
          if (err)
            res.status(500).send(err);
          else {
            var years = [];
            for (x in data) {
              var curYear = parseInt(moment(data[x].date).format('YYYY')); 
              if (!years.includes(curYear)) {
                years.push(curYear); 
              }
            }
            res.send(years.sort((a, b) => { return a < b }));     
          }
        });
});

// Get results for a specified team and year
router.get('/list/team/:id/:year', function(req, res) {
  let year = parseInt(req.params.year)
  let yearStart = moment(year + "-01-01").toDate()
  let yearEnd = moment(year + "-12-31").toDate()
  Result.find({ 'team_id' : req.params.id, 'date': { $gte : yearStart, $lt: yearEnd } })
        .sort({ date: -1 })
        .lean()
        .exec((err, data) => {
          if (err)
            res.status(500).send(err);
          else {
            for (x in data) {
              data[x].date = moment(data[x].date).format('MMMM D YYYY'); 
            }
            res.send(data);
          }
        })
});

// Get results for a specified team, year, and gender
router.get('/list/team/:id/:year?/:gender?', function(req, res) {

  let query = {
    'team_id' : req.params.id, 
  }

  if (req.params.year) {
    let year = parseInt(req.params.year)
    let yearStart = moment(year + "-01-01").toDate()
    let yearEnd = moment(year + "-12-31").toDate()
    query.date = { $gte : yearStart, $lt: yearEnd }
  }

  if (req.params.gender) {
    query.womens = true; 
    if (req.params.gender == "mens")
      query.womens = false; 
  }

  Result.find(query).sort({ date: -1 }).lean().exec(function(err, data) {
    if (err)
      res.status(500).send(err);
    else {
      for (x in data) {
        data[x].date = moment(data[x].date).format('MMMM D YYYY'); 
      }
      res.send(data);
    }
  })

});

// Get results for a specified athlete
router.get('/list/athlete/:id', function(req, res) {
  User.findOne({ 'athlete_id' : req.params.id }, function(err, user) {
    var aliasArray = [];
    if (err)
      res.status(500).send(err);
    else if (user) {
      if (user.aliases.length > 0) {
        user.aliases.forEach(function(alias) {
          aliasArray.push({ 'athlete_id' : alias });
        }); 
      }
    }
    aliasArray.push({ 'athlete_id' : req.params.id });
    Result.find({ $or : aliasArray }).lean().exec(function(err, data) {
      if (err)
        res.status(500).send(err);
      else {
        for (x in data) {
          data[x].date = moment(data[x].date).format('MMMM D YYYY'); 
        }
        res.send(data);
      }
    });
  });
});

const getResults = (req, res) => {
  let id = req.params.id
  let query = { "race_id" : req.params.id }

  if (req.params.gender) {
    query.womens = true; 
    if (req.params.gender == "mens")
      query.womens = false; 
  }

  if (req.params.event)
    query.event = decodeURI(req.params.event)

  Result.find(query).lean()
  .sort({ 'place': 1, 'name' : 1 }) 
  .exec(function(err, results) {

    results.sort((a, b) => {
      if (a.place === null || typeof a.place !== "number") return 1
      else if (b.place === null || typeof b.place !== "number") return -1
    })

    if (err) res.status(500).send(err)

    if (!results)
      res.status(400).send("No results for that race were found.");

    else {
      res.send(results);
    }

  });
}

// Get results for a specified race (gender and event are optional)
router.get('/list/:id/:gender?/:event?', (req, res) => {

  getResults(req, res)
  
})

router.get('/:id', async (req, res) => {
  if (req.params.id == 'undefined') res.status(400).send("Please submit a valid ID")

  let result = await Result.findById(req.params.id) 
  if (result) res.send(result)
  else res.status(400).send("That result doesn't exist")
  
})

// route to handle creating a result
router.post('/', authCheck, function(req, res) {

  var result = new Result(req.body);
  result.user_id = req.userId

  Race.findById(req.body.race_id, function(err, data) {
    if (!data)
      res.send("No race with that ID exists.");

    else { 
      result.save(function(err, data) {
        if (err) res.status(500).send(err);
        res.send(data);
      });
    }

  });

});

// route to handle updating results
router.put('/:_id', authCheck, function(req, res) {
  Result.findById(req.params._id, function(err, data) {
    if (err)
      res.status(500).send(err);
    else if (data) {
      if (data.user_id == req.userId || !data.user_id) {
        data.athlete = req.body.athlete || data.athlete;
        data.verified = req.body.verified;
        data.time = req.body.time || data.time;
        data.race = req.body.race || data.race; 
        data.story = req.body.story || data.story;
        data.place = req.body.place || data.place;
        data.athlete_id = req.body.athlete_id || data.athlete_id; 
        data.womens = req.body.womens || data.womens; 
        data.team = req.body.team || data.team;
        data.team_id = req.body.team_id || data.team_id; 
        data.event = req.body.event || data.event;
        data.date = data.date || moment(req.body.date, 'MMMM D YYYY').toDate();

        data.markModified("date");

        data.save(function(err, data) {
          if (err)
            res.status(500).send(err);
          res.send(data);
        });
      } else {
        res.status(403).send("Not authorized to update result.");
      }
    }
  });
});

router.delete('/:_id', authCheck, function(req, res) {
  Result.findById(req.params._id, function(err, result) {
    if (!result) {
      res.status(400).send("No result with that ID found.")
    } else if (result.user_id == req.userId || !result.user_id) {
      Result.remove({ _id: req.params._id}, function(err, result) {
        if (err)
          res.status(500).send(err);
        res.send("Successfully deleted result");
      });
    } else {
      res.status(403).send("You are not authorized to delete this result.");
    }
  });
});

module.exports = router; 