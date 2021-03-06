var express = require('express');
var router = express.Router();

var Race = require('../models/race');
var Result = require('../models/result');

var moment = require('moment');
var authCheck = require('../auth')

router.get('/results/:query/:page/:length', async function(req, res) {
  if (!req.params.query || req.params.query == "" || typeof req.params.query== 'undefined') {
    res.status(400).send("Invalid search!");
  } else {
    var length = parseInt(req.params.length);
    var page = parseInt(req.params.page);

    let query = req.params.query

    let searchResults = await (Result.find({ 
      $text: { $search: query } 
    }, { 
      score : { $meta: "textScore" } 
    }).sort({
      score: {
        $meta: 'textScore'
      }
    }).skip(length*(page-1)).limit(length+1).lean());

    // console.log(searchResults);

    Result.find({ 
      $text: { $search: query } 
    }, { 
      score : { $meta: "textScore" } 
    }).sort({
      score: {
        $meta: 'textScore'
      }
    }).skip(length * (page-1)).limit(length + 1).lean().exec((err, results) => {
      if (err)
        res.status(500).send(err);
      var lastPage = false; 
      if (results.length <= length)
        lastPage = true; 
      for (x in results) {
        results[x].date = moment(results[x].date).format('MMMM D YYYY');
      }
      var response = {};
      response.docs = results; 
      response.lastPage = lastPage; 
      res.json(response);
    });
  }
});

router.get('/races/:query', function(req, res) {
  if (!req.params.query || req.params.query == "" || typeof req.params.query== 'undefined') {
    res.status(400).send("Invalid search!");
  } else {
    Race.find({
      $text: { $search: req.params.query } 
    }, { 
      score : { $meta: 'textScore' } 
    }).sort({
      score: {
        $meta: 'textScore'
      }
    }).lean().exec((err, results) => {
      if (err)
        res.status(500).send(err);
      else if (results) {
        for (x in results) {
          results[x].date = moment(results[x].date).format('MMMM D YYYY');
        }
        res.json(results);
      } else {
        res.status(400).send("No results")
      }
    });
  }
});

router.get('/user/races/:query', authCheck, function(req, res) {
  if (!req.params.query || req.params.query == "" || typeof req.params.query== 'undefined') {
    res.status(400).send("Invalid search!");
  } else {

    Race.find({
      $text: { $search: req.params.query }, 
      user_id: req.userId
    }, { 
      score : { $meta: 'textScore' } 
    }).sort({
      score: {
        $meta: 'textScore'
      }
    }).lean().exec( 
    function(err, results) {
      if (err)
        res.status(500).send(err);
      for (x in results) {
        results[x].date = moment(results[x].date).format('MMMM D YYYY');
      }
      results.sort({ score : { $meta: 'textScore' } });
      res.json(results);
    });
  }
})

module.exports = router; 