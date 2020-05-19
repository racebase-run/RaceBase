const middleware = {}

middleware['auth'] = require('../middleware/auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['coach'] = require('../middleware/coach.js')
middleware['coach'] = middleware['coach'].default || middleware['coach']

middleware['team'] = require('../middleware/team.js')
middleware['team'] = middleware['team'].default || middleware['team']

export default middleware
