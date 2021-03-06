var express = require('express');
var router = express.Router();
const _ = require('underscore');
let mongoose = require('mongoose');

var Race = require('../models/race');
var Result = require('../models/result');
var Change = require('../models/change'); 
var Event = require('../models/event'); 
var User = require('../models/user');
var authCheck = require('../auth');

const moment = require('moment'); 

router.get('/count', async function(req, res) {
  try {
    let count = await Result.find({}).count()
    res.send({count: count}) 
  } catch(e) { res.status(500).send(e) }
});

router.get('/:id/history', async (req, res) => {
  try {  
    let changeHistory = await Change.find({ 'document_id' : req.params.id, 'type': 'result' }).sort({ 'version': -1 }); 
    res.send(changeHistory);  
  } catch (err) {
    res.status(400).send(err); 
  }
});

router.get('/:id/version/:number', async (req, res) => {
  let doc = await Change.findOne({
    'document_id' : req.params.id, 
    'type' : 'result', 
    'version' : Number(req.params.number)
  });
  res.send(doc); 
});

// Get team scores for specified race and event
router.get('/teamlist/:id/event/:event/', (req, res) => {

  Result.find({ 
    'race_id' : req.params.id, 
    'event_id' : req.params.event 
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

// Get years for a specified team
router.get('/list/team/:id/years', function(req,res) {

  Result.find({ 'team_id' : req.params.id })
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

router.get('/list/race/:race_id/event/:event_id/team/:team_id', async (req, res) => {
  let results = await Result.find({ 
    'team_id' : req.params.team_id,
    'race_id' : req.params.race_id, 
    'event_id' : req.params.event_id
  }).sort({ place: 1 }); 
  res.send(results); 
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

// Get results for a specified team and year
router.get('/list/team/:id/:year?', function(req, res) {

  let query = {
    'team_id' : req.params.id, 
  }

  if (req.params.year) {
    let year = parseInt(req.params.year)
    let yearStart = moment(year + "-01-01").toDate()
    let yearEnd = moment(year + "-12-31").toDate()
    query.date = { $gte : yearStart, $lt: yearEnd }
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
  Result.find({
    "race_id" : req.params.id, 
    "event_id" : req.params.event
  }).lean()
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

// Get results for a specified race
router.get('/list/:id/event/:event?', (req, res) => {
  getResults(req, res);
})

router.get('/:id', async (req, res) => {
  if (req.params.id == 'undefined') res.status(400).send("Please submit a valid ID")

  let result = await Result.findById(req.params.id) 
  if (result) res.send(result)
  else res.status(400).send("That result doesn't exist")
  
})

// route to handle creating a result
router.post('/', authCheck, async (req, res) => {

  var result = new Result(req.body);
  result.user_id = req.userId; 
  result.version = 1; 

  let data = await Race.findById(req.body.race_id); 
  if (!data) res.send("No race with that ID exists.");

  try {
    await Change.create({
      author: result.user_id, 
      date: new Date(), 
      version: result.version, 
      type: "result", 
      document: result, 
      document_id: result._id
    });
    let event = null;
    if (result.event_id) event = await Event.findById(result.event_id);
    if (!event) 
      event = await Event.create({ race_id: result.race_id, name: result.event, date: result.date }); 
    result.event_id = event._id;
    result.event = event.name;
    await result.save(); 
    res.send(result); 
  } catch(err) {
    res.status(500).send(err);
  }

});

router.post('/:id/revert/:version', async (req, res) => {
  if (!req.params.id) {
    res.status(500).send("Invalid ID"); 
    return;
  } else if (!req.params.version) {
    res.status(500).send("Invalid version"); 
    return;
  }

  try { 

    let versionToRevert = await Change.findOne({
      'document_id' : req.params.id, 
      'type' : 'result', 
      'version' : Number(req.params.version)
    });

    let result = await Result.findById(req.params.id);
    let latest = 1; 
    if (!result) {
      let changeHistory = await Change.find({
        'document_id' : req.params.id, 
        'type' : 'result'
      }).sort({ 'version': -1 }); 
      latest = changeHistory[0].version;
    } else {
      await Result.deleteOne({ _id: req.params.id });
      latest = result.version; 
    }

    result = await Result.create({ ...versionToRevert.document });
    result._id = mongoose.Types.ObjectId(req.params.id); 
    result.version = latest+1;
    await result.save(); 

    await Change.create({
      author: result.user_id, 
      date: new Date(), 
      version: result.version, 
      type: "result", 
      document: result, 
      document_id: result._id
    });

    res.send(result); 

  } catch (e) {
    console.log(e);
  }

});

router.post('/:id/restore', async (req, res) => {
  let result = await Result.findById(req.params.id); 
  if (result) {
    res.status(500).send("Result hasn't been deleted."); 
    return;
  }
  let history = await Change.find({ "document_id" : req.params.id }).sort({ 'version': -1 }); 
  if (!history || history.length == 0) { 
    res.status(500).send("No history to restore."); 
    return;
  }
  let latest = { ...history[0].document }; 
  delete latest._id;
  result = await Result.create({ ...latest }); 
  await Change.updateMany({ "document_id": req.params.id }, { "document_id" : result._id }); 
  res.send(result); 
});

// route to handle updating results
router.put('/:_id', authCheck, async function(req, res) {
  Result.findById(req.params._id, async function(err, data) {

    if (err)
      res.status(500).send(err);
    else if (data) {
      data.athlete = req.body.athlete || data.athlete;
      data.verified = req.body.verified;
      data.time = req.body.time || data.time;
      data.story = req.body.story || data.story;
      data.place = req.body.place || data.place;
      data.athlete_id = req.body.athlete_id || data.athlete_id; 
      data.womens = req.body.womens || data.womens; 
      data.team = req.body.team || data.team;
      data.team_id = req.body.team_id || data.team_id; 
      data.date = data.date || moment(req.body.date, 'MMMM D YYYY').toDate();
      data.version = data.version+1 || 1; 
      data.markModified("date");

      if (data.event != req.body.event) {
        let query = { name: req.body.event, race_id: data.race_id }; 
        let event = await Event.findOne(query); 
        if (!event) 
          event = await Event.create({ ...query, date: data.date }); 
        data.event_id = event._id; 
        data.event = event.name; 
      } 

      let updated = await Change.create({
        author: req.userId, 
        date: new Date(), 
        version: data.version || 1, 
        type: "result", 
        document: data, 
        document_id: data._id
      });
      res.send(await data.save());
    }
  });
});

router.delete('/:_id', authCheck, function(req, res) {
  Result.findById(req.params._id, function(err, result) {
    if (!result) {
      res.status(400).send("No result with that ID found.")
    } else {
      Result.remove({ _id: req.params._id}, function(err, result) {
        if (err)
          res.status(500).send(err);
        res.send("Successfully deleted result");
      });
    }
  });
});

module.exports = router; 