// postRoutes.js

var express = require('express');
var router = express.Router();

var Post = require('../models/post');
var User = require('../models/user');

let authCheck = require('../auth')

router.get('/feed', authCheck, async (req, res) => {
  let user = await User.findOne({ _id: req.userId })
  var feed = []
  for (const i of user.following) {
    let posts = await Post.find({ user_id: i })
    feed = feed.concat(posts)
  }
  res.send({ feed: feed })
})

router.get('/:id', async (req, res) => {
  let post = await Post.findById(req.params.id)
  if (!post) res.send("No post with that ID")
  else res.send(post)
})

router.post('/like/:id', authCheck, async (req, res) => {
  let post = await Post.findById(req.params.id)
  if (!post) res.send("Post not found")
  else {
    let likes = post.likes || []

    if (!likes.includes(req.userId))
      likes.push(req.userId)

    post.likes = likes
    post.save((err, data) => {
      if (err) res.send(err)
      else res.send("Successfully liked post")
    })
  }
})

router.post('/', authCheck, async (req, res) => {
  let p = new Post(req.body)
  let user = await User.findOne({ _id: req.userId })

  p.user_id = user.athlete_id

  p.save((err, data) => {
    if (err) res.send(err)
    else res.send(data)
  })
})

module.exports = router;