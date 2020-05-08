// server.js

// modules =================================================
require('dotenv').config()
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser')
var compression = require('compression')
var jwt = require('express-jwt')
var fs = require('fs')
var cors = require('cors')
var responseTime = require('response-time')
var cluster = require('cluster')

// database initialization for event change 
var Result = require('./app/models/result');
var Event = require('./app/models/event');

async function initEvents() {
  // connect to mongoDB database
  mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .catch((err) => { 
    console.log("Error connecting to database:")
    console.log(err) 
  });

  console.log("Initializing events database from current results"); 
  let results = await Result.find({}); 
  for (var result of results) {
    let event = await Event.findOne({ race_id: result.race_id, name: result.event }); 
    if (!event) {
        event = await Event.create({ 
          race_id: result.race_id, 
          name: result.event, 
          date: result.date
        });
    }
    result.event_id = event._id; 
    await result.save(); 
  }
}

// configuration ===========================================

if (cluster.isMaster) {

  // Count the machine's CPUs
  var cpuCount = require('os').cpus().length;

  // Create a worker for each CPU
  for (var i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }

  // Uncomment to create Event data from Results
  // initEvents();

} else {

  // port setup
  var port = process.env.PORT || 3154

  // cookies
  app.use(cookieParser())

  // connect to mongoDB database
  mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .catch((err) => { 
    console.log("Error connecting to database:")
    console.log(err) 
  });

  // add response time header
  app.use(responseTime())

  // CORS
  // app.use(cors())
  app.use(cors({ credentials: true, origin: true }))

  // enable compression
  app.use(compression())

  // get data from body parameters
  // parse application/json
  app.use(bodyParser.json({limit: '50mb'}));

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }))

  // override with X-HTTP-Method-Override header in request. Simulate DELETE/PUT
  app.use(methodOverride('X-HTTP-Method-Override'))

  app.use(express.static(__dirname + '/public'))

  // routes ================================================

  require('./app/routes')(app);

  // error handling ========================================

  app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send({ message : 'Invalid authorization token.' })
    }
  });

  // startup ================================================
  // start at location http://localhost:3154

  app.listen(port);

  // tell user we're good
  console.log('Worker ' + cluster.worker.id + ' running on port ' + port);

  // expose app
  exports = module.exports = app;
}

