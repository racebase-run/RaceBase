var express = require('express');
var router = express.Router();

var Race = require('../models/race');
var Result = require('../models/result');
var User = require('../models/user');
var Vote = require('../models/vote');

var authCheck = require('../auth')

var moment = require('moment');
var Papa = require('papaparse');

router.get('/list/:page?/:length?', function(req, res) {
  Race.paginate({}, { 
    lean: true, 
    sort: '-date',
    page: req.params.page || 1, 
    limit: parseInt(req.params.length) || 10
  }, function(err, data) {
    if (!data)
      res.send("No data")
    else if (err)
      res.status(500).send(err)
    else {
      for (x in data.docs) { 
        data.docs[x].date = moment(data.docs[x].date).format('MMMM D YYYY');
      }
      res.json(data);
    }
  });
});

router.get('/list', function(req, res) {
  Race.find().lean().sort({ date: -1 }).exec(function(err, data) {
    // if there's an error getting it, send it
    if (err)
      res.status(500).send(err);

    res.json(data); // return data in JSON format

  });
});

// get race by ID
router.get('/:id', function(req, res) {
  Race.findById(req.params.id).lean().exec(function(err, race) {

    if (err) {
      res.status(500).send(err)
    }

    else if (race) {
      race.date = moment(race.date).format('MMMM D YYYY');
      res.json(race); // return data in JSON format 
    }

    else
      res.status(400).send("No race with that ID exists.")

  });
});

router.get('/:id/:gender/events', (req, res) => {
  var womens = true; 
  if (req.params.gender == "mens")
    womens = false;
  Result.find({ race_id : req.params.id, womens : womens }).distinct('event', (error, events) => {
    if (error)
      res.status(500).send(error)
    else
      res.send(events);
  });
});

router.get('/vote/:id', authCheck, function(req, res) {
  Vote.findOne({ race_id: req.params.id, user_id: req.userId }).lean().exec(function(err, data) {
    if (err)
      res.send(err);
    else if (!data)
      res.send({})
    else 
      res.send(data);
  });
});

//upvote a race
router.post('/upvote/:id', authCheck, function(req, res) {
  Vote.findOne({ race_id: req.params.id, user_id: req.userId }, function(err, data) {
    if (!data) {
      var vote = new Vote({ up: true, user_id: req.userId, race_id: req.params.id }); 
      vote.save(); 
      Race.findByIdAndUpdate(req.params.id, { $inc: { upvotes: 1 } }, function(err, response) {
        if (err)
          res.send(err);
        res.send(response);
      });
    } else if (data.up == false) {
      data.up = true; 
      data.save(); 
      Race.findByIdAndUpdate(req.params.id, { $inc: { upvotes: 1, downvotes: -1 } }, function(err, response) {
        if (err)
          res.send(err);
        res.send(response);
      });
    } else {
      res.status(400).send("You already voted for this race.");
    }
  });
});

//downvote a race
router.post('/downvote/:id', authCheck, function(req, res) {
    Vote.findOne({ race_id: req.params.id, user_id: req.userId }, function(err, data) {
    if (!data) {
      var vote = new Vote({ up: false, user_id: req.userId, race_id: req.params.id }); 
      vote.save(); 
      Race.findByIdAndUpdate(req.params.id, { $inc: { downvotes: 1 } }, function(err, response) {
        if (err)
          res.status(500).send(err);
        res.send(response);
      });
    } else if (data.up == true) {
      data.up = false; 
      data.save(); 
      Race.findByIdAndUpdate(req.params.id, { $inc: { upvotes: -1, downvotes: 1 } }, function(err, response) {
        if (err)
          res.status(500).send(err);
        res.send(response);
      });
    } else {
      res.status(400).send("You already voted for this race.");
    }
  });
});

// route to create a race
router.post('/', authCheck, function(req, res) {

  var race = new Race(req.body);
  User.findOne({ '_id' : req.userId }, function(err, data) {
    if (data) {
      race.user = data.name;
      race.user_id = req.userId

      race.save(function(err, newRace) {
        if (err)
          res.status(500).send(err);

        else if (req.body.csv) {
          let parsed = Papa.parse(req.body.csv, { header: true, 
            step: (results, parser) => {
              var row = results.data[0]
              var result = new Result(row);
              if (row.event_ && !row.event)
                result.event = row.event_
              else if (!row.event_ && !row.event)
                result.event = "Unspecified"
              if (row.name)
                result.athlete = row.name
              result.race_id = newRace._id;
              result.race = newRace.name;
              result.user = newRace.user; 
              result.user_id = newRace.user_id;
              result.verified = newRace.verified; 
              result.date = moment(newRace.date, 'MMMM D YYYY').toDate(); 

              if (row.gender == "male")
                result.womens = false;
              else 
                result.womens = true;

              result.save((err, data) => {
                if (err)
                  res.status(500).send(err)
              })
            },
            complete: (results) => {
              res.send("Successfully imported CSV.")
            }
          })
        } else {
          res.send(newRace);
        }
      });
    } else {
      res.status(400).send("User not found.")
    }
  });
});

// route to handle updating races
router.put('/:_id', authCheck, function(req, res) {
  Race.findById(req.params._id, function(err, data) {
    if (err)
      res.status(500).send(err);
    if (data) {
      if (data.user_id == req.userId) {
        data.name = req.body.name || data.name;
        data.location = req.body.location || data.location;
        data.date = moment(req.body.date, 'MMMM D YYYY').toDate() || data.date;
        data.link = req.body.link || data.link;
        data.verified = req.body.verified;
        data.user_id = req.body.user_id || data.user_id;
        var raceName = data.name;
        data.markModified("date");
        User.findById(req.body.user_id, function(err, user) {

          if (user)
            data.user = user.name;
          else
            data.user = "";

          if (req.body.name)
            data.url_name = req.body.name.replace(/\s/g,'').toLowerCase();

          data.save(function(err, data) {
            if (err)
              res.status(500).send(err);
            else if (req.body.csv) {
              let parsed = Papa.parse(req.body.csv, { header: true, 
                step: (results, parser) => {
                  var row = results.data[0]
                  var result = new Result(row);
                  if (row.event_ && !row.event)
                    result.event = row.event_
                  else if (!row.event_ && !row.event)
                    result.event = "Unspecified"
                  if (row.name)
                    result.athlete = row.name
                  result.race_id = data._id;
                  result.race = data.name;
                  result.user = data.user; 
                  result.user_id = data.user_id;
                  result.verified = data.verified; 
                  result.date = moment(data.date, 'MMMM D YYYY').toDate(); 

                  if (row.gender == "male")
                    result.womens = false;
                  else 
                    result.womens = true;

                  Result.remove({ athlete: result.athlete, team: result.team, race_id: data._id }, function(err, removed) {
                    result.save();
                  });
                },
                complete: (results) => {
                  res.send("Successfully imported CSV.")
                }
              })
            } else {
              Result.update({ race_id: req.params._id }, { race : raceName, date: data.date }, { multi: true }, function(err, response) {
                if (err)
                  res.status(500).send(err);
                else 
                  res.send(data);
              });               
            }
          });

        });
      } else {
        res.send("You are not authorized to update this race!");
      }
    } else {
      res.send("No race with that ID exists.")
    }
  });
});

// route to handle DELETE (app.delete)
router.delete('/:_id', authCheck, function(req, res) {

  Race.findById(req.params._id, function (err, data) {
    if (err)
      res.status(500).send(err);

    else if (!data)
      res.status(400).send("No race with this ID exists.")

    else if (req.userId != data.user_id) 
      res.status(403).send("You are not authorized to delete this race.")

    else {
      Race.remove({ _id : req.params._id }, function(err, race) {

        // if there's an error getting it, send it
        if (err)
          res.status(500).send(err);

        Result.remove({ race_id : req.params._id }, function(err, result) {
          if (err)
            res.status(500).send(err);

          res.send("Successfully deleted race");
        });

      });
    }
  });
});

module.exports = router; 