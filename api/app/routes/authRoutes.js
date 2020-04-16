var express = require('express')
var router = express.Router()

var User = require('../models/user')

var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')
var config = require('../config')

let cookie_domain = process.env.NODE_ENV == "development" ? process.env.DEV_URL : process.env.PROD_URL

// login route
router.post('/login', function(req, res) {
  User.findOne({ email: req.body.email }, function(err, user) {
    if (err) res.status(500).send({ error: err, message: 'Internal server error.' })
    else if (!user) res.status(400).send({ error: 'User not found.' })
    else {
      bcrypt.compare(req.body.password, user.password).then(function(validPassword) {
        if (!validPassword) res.status(400).send({ auth: false, error: 'Incorrect password.', token: null })
        else {
          var token = jwt.sign({ 
            id: user._id
          }, config.secret, { expiresIn: 86400 })
          res
            .cookie('csrf_token', token, { maxAge: 86400000, httpOnly: true, domain: cookie_domain })
            .set("Access-Control-Allow-Headers", "Cookie")
            .set("Access-Control-Expose-Headers", "Set-Cookie")
            .status(200)
            .send({ auth: true, token: token, user: user })
        }
      }).catch((err) => {
        console.log("Error  comparing passwords:")
        console.log(err)
        res.status(500).send({ auth: false, error: 'Something went wrong on the server.', token: null })
      });
    }
  })
});

module.exports = router; 