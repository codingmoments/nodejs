const path = require('path');

exports.get404 = (req, res, next) => {
  // This sends the file /views/404.html.
  // The path starts from the current directory
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));

  res.status(404).render('404', { pageTitle: 'Page Not Found', path: req.path });
};