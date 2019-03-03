var express = require('express'), router = express.Router();

router.use('/user', require('./userRoutes.js'));
router.use('/posts', require('./newsRoutes.js'));
router.use('/docs', require('./docsRoutes.js'));
router.use('/race', require('./raceRoutes.js'));
router.use('/auth', require('./authRoutes.js'));
router.use('/result', require('./resultRoutes.js'));
router.use('/search', require('./searchRoutes.js'));
router.use('/log', require('./logRoutes.js'));
router.use('/post', require('./postRoutes.js'));
router.use('/team', require('./teamRoutes.js'));
router.get('/', (req, res) => {
  res.redirect("https://racebase.io/api")
})

module.exports = router; 