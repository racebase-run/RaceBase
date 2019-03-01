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
  res.send(feed)
})

router.get('/:id', async (req, res) => {
  try { 
    let post = await Post.findById(req.params.id)
    res.send(post)
  }
  catch (err) { res.send("No post with that ID") }
})

router.post('/like/:id', authCheck, async (req, res) => {
  let post = await Post.findById(req.params.id)
  if (!post) res.status(400).send("Post not found")
  else {
    let likes = post.likes || []

    if (!likes.includes(req.userId))
      likes.push(req.userId)

    post.likes = likes
    post.save((err, data) => {
      if (err) res.send(err)
      else res.send(data)
    })
  }
})

router.post('/comment/:id', authCheck, async (req, res) => {
  let post = await Post.findById(req.params.id)
  let user = await User.findById(req.userId)
  if (!post) res.status(400).send("Post not found")
  else {

    let date = new Date()
    post.comments.push({
      body: req.body.body, 
      date: date,
      user: {
        name: user.name, 
        athlete_id: user.athlete_id, 
        profilePicUrl: user.profilePicUrl,
        id: req.userId
      }
    })

    post.save((err, data) => {
      if (err) res.send(err)
      else res.status(201).send(data)
    })
  }
})

router.post('/', authCheck, async (req, res) => {
  let p = new Post(req.body)
  let user = await User.findById(req.userId)

  p.athlete_id = user.athlete_id
  p.user_id = req.userId

  if (!user.following.includes(user.athlete_id)) {
    user.following.push(user.athlete_id)
    await user.save()
  }

  let newPost = await p.save()
  let newResult = {}

  if (newPost.result_id) {
    let r = await Result.findById(newPost.result_id)
    r.post_id = newPost._id
    newResult = await r.save()
  }

  res.status(201).send(newPost)

})

router.delete('/:id', authCheck, async (req, res) => {
  let p = await Post.findById(req.params.id)
  if (p.result_id) {
    let r = await Result.findById(p.result_id)
    r.post_id = null
    await r.save()
  }

  if (p.user_id == req.userId) {
    await p.remove()
    res.send("Successfully deleted")
  } else res.status(403).send("You don't own that post")

})

module.exports = router;