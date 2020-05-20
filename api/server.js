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
  let events = await Result.aggregate([{"$group": { "_id": { event: "$event", race_id: "$race_id" } }}]); 
  for (var event of events) {
    if (!event._id.event) continue;
    let curEvent = event._id;
    let query = { race_id: curEvent.race_id, event: curEvent.event };
    let eventDoc = await Event.findOne({ race_id: curEvent.race_id, name: curEvent.event }); 
    let result = await Result.findOne(query);
    if (!eventDoc) {
        eventDoc = await Event.create({ 
          race_id: curEvent.race_id, 
          name: curEvent.event, 
          date: result.date
        });
    }
    await Result.update(query, { $set: { event_id: eventDoc.id }});
  }
  console.log("Done."); 
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
  initEvents();

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

