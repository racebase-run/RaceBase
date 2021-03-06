var express = require('express');
var router = express.Router();

var showdown = require('showdown');
var matter = require('gray-matter');
var fs = require('fs');

router.get('/', function(req, res) {
  fs.readdir('./posts', function(err, files) {
    if (err)
      res.send(err);
    else if (files) {
      var posts = [];
      files.forEach(function(file) {
        if (file !== ".DS_Store")
          posts.push(file.replace('.md', ''));
      })
      res.status(200).send(posts.reverse());
    } else {
      res.status(503).send("No files in folder.");
    }
  })
});

router.get('/:url', function(req, res) {
  fs.readFile('./posts/' + req.params.url + '.md', 'utf8', function(err, data) {
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