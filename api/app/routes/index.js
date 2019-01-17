var express = require('express'), router = express.Router();

router.use('/user', require('./userRoutes.js'));
router.use('/posts', require('./newsRoutes.js'));
router.use('/race', require('./raceRoutes.js'));
router.use('/auth', require('./authRoutes.js'));
router.use('/result', require('./resultRoutes.js'));
router.use('/search', require('./searchRoutes.js'));

module.exports = router; 