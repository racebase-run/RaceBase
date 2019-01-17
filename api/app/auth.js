var jwt = require('jsonwebtoken')
var jwks = require('jwks-rsa')
var config = require('./config.js')

function authCheck(req, res, next) {
  var header_token = req.headers['x-access-token']
  var cookie_token = req.cookies['csrf_token']
  
  if (!header_token || !cookie_token)
    return res.status(403).send({ auth: false, message: 'No token provided.' })
  else if (header_token != cookie_token)
    return res.status(403).send({ auth: false, message: 'Tokens do not match.' })
  jwt.verify(cookie_token, config.secret, function(err, decoded) {
    if (err)
      return res.status(403).send({ auth: false, message: 'Failed to authenticate token.' })
    req.userId = decoded.id
    next()
  })
}

module.exports = authCheck