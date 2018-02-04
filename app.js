const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

// app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret

// app.use(passport.initialize());

// app.use(passport.session()); // persistent login sessions

module.exports = app;
