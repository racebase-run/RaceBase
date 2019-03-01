var express = require('express');
var router = express.Router();

var showdown = require('showdown');
var matter = require('gray-matter');
var fs = require('fs');

router.get('/routes/:url', (req, res) => {
  fs.readFile('./documentation/routes/' + req.params.url + '.md', 'utf8', function(err, data) {
    if (err)
      res.status(500).send(err)
    else {
      var converter = new showdown.Converter();
      var processed = matter(data);
      processed.content = converter.makeHtml(processed.content);
      res.status(200).send(processed);
    }
  })
})

router.get('/:url', function(req, res) {
  fs.readFile('./documentation/' + req.params.url + '.md', 'utf8', function(err, data) {
    if (err)
      res.status(500).send(err)
    else {
      var converter = new showdown.Converter();
      var processed = matter(data);
      processed.content = converter.makeHtml(processed.content);
      res.status(200).send(processed);
    }
  })
});

module.exports = router; 