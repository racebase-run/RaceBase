// app/routes.js

module.exports = function(app) {

  app.use('/', require('./routes/index.js'))

  app.get('/database', function(req, res) {
    if (req.session.super == true) {
      res.sendfile('./public/index.html');
    } else
      res.redirect("/login");
  });

  app.get('*', (req, res) => {
    const context = { url: req.url }
    
    createApp(context).then(app => {
      renderer.renderToString(app, (err, html) => {
        if (err) {
          if (err.code === 404) 
            res.status(404).end('Page not found')
          else 
            res.status(500).end('Internal Server Error')
        } else {
          res.end(html)
        }
      })
    })

  })

  app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });
};
