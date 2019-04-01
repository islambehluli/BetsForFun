var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors")
var mongoose = require("mongoose")
var bodyParser = require('body-parser')
const session    = require("express-session");
const MongoStore = require("connect-mongo")(session);
const pollNewsApi = require("./pollNews")
const pollBetsApi = require("./pollBets")


//pollNewsApi.startPollingNews()
pollBetsApi.getData()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signupRouter = require("./routes/signup")
var signinRouter = require("./routes/signin")
var logoutRouter = require("./routes/logout")
var homeRouter = require("./routes/home")
var liveRouter = require("./routes/live")
const competitionRouter = require("./routes/competition")
var betsRouter = require("./routes/bets")



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
mongoose.connect('mongodb://localhost/datas', {useNewUrlParser: true})
.then(x => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
})
.catch(err => {
  console.error('Error connecting to mongo', err)
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
}));
app.use(session({
  secret: "mysite.sid.uid.whatever",
  cookie: { maxAge: 60 * 60 * 24 * 1000 },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // 1 day
  })
}));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/", signupRouter)
app.use("/", signinRouter)
app.use("/", logoutRouter)
app.use("/", homeRouter)
app.use("/", liveRouter)
app.use("/", competitionRouter)
app.use("/", betsRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
