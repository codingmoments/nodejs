const path = require('path');

const express = require('express');
// This package builds the request body for you in the appropriate format
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

// This sets the templating engine to 'ejs'
app.set('view engine', 'ejs');
// This sets the location to find the template files
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

// This is how you serve static files
app.use(express.static(path.join(__dirname, 'public')));

// All the requests to '/admin' will be sent to the adminRoutes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
