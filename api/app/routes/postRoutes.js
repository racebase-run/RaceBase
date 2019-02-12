// postRoutes.js

var express = require('express');
var router = express.Router();

var Post = require('../models/post');
var Result = require('../models/result');
var User = require('../models/user');

let authCheck = require('../auth')

router.get('/feed', authCheck, async (req, res) => {
  let user = await User.findOne({ _id: req.userId })
  var feed = []
  for (const i of user.following) {
    let posts = await Post.find({ athlete_id: i })
    let results = await Result.find({ athlete_id: i, post_id: null })
    feed = feed.concat(posts)
    feed = feed.concat(results)
  }
  feed.sort((a, b) => {
    return new Date(b.date) - new Date(a.date) 
  })
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
  let user = await User.findById(req.userId)

  p.athlete_id = user.athlete_id
  p.user_id = req.userId

  let newPost = await p.save()
  let newResult = {}

  if (newPost.result_id) {
    let r = await Result.findById(newPost.result_id)
    if (r && r.user_id == req.userId) {
      r.post_id = newPost._id; 
      newResult = await r.save()
    }
  }

  res.send(newPost)

})

router.delete('/:id', authCheck, async (req, res) => {
  let p = await Post.findById(req.params.id)

  if (p.user_id == req.userId) {
    await p.remove()
    res.send("Successfully deleted")
  } else res.send("You don't own that post")
  
})

module.exports = router;