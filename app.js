// require necessary dependencies 
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// auth dependencies
const passport   = require('passport');
const bcrypt     = require('bcrypt');
const session    = require('express-session');

// intiate routes
var storiesApi = require('./routes/stories-api');
const authRoutes = require('./routes/auth-routes');

// setup passport according to config
const passportSetup = require('./configs/passport');
passportSetup(passport);


// require cors
var cors = require('cors');

// require db configurations
require('./configs/database');

var app = express();

// enable cors
app.use(cors());

// configure session
app.use(session({
  secret: 'angular auth passport secret shh',
  resave: true,
  saveUninitialized: true,
  cookie : { httpOnly: true, maxAge: 2419200000 }
}));

// initialise auth modules

app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// use middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// api routes
app.use('/api', storiesApi);
// user routes
app.use('/', authRoutes);

// use fallback page
app.use((req, res, next) => { 
  res.sendfile(__dirname + '/public/index.html');  
}); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// export server-app module
module.exports = app;
