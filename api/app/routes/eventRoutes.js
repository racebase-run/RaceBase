var express = require('express');
var router = express.Router();

var Event = require('../models/event');

router.get('/:id', async (req, res) => {
    let event = await Event.findById(req.params.id); 
    if (event) res.send(event); 
    else res.send({});
}); 

module.exports = router; 