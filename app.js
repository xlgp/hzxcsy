var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var session = require('express-session')
var mlogger = require('morgan');
var logger = require('./middlename/xclog').logger('app');


var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var config = require('./config/config');
var optionData = require('./config/data');
var index = require('./routes/index');
var test = require('./routes/test');
var news = require('./routes/news');
var staff = require('./routes/staff');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.locals.XC = config.XC;

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(mlogger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//提供静态文件,(此项目中使用nginx)
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  name: config.session.key,// 设置 cookie 中保存 session id 的字段名称
  secret: config.session.secret,// 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
  resave: true,// 强制更新 session
  saveUninitialized: false,// 设置为 false，强制创建一个 session，即使用户未登录
  cookie: {
    maxAge: config.session.maxAge// 过期时间，过期后 cookie 中的 session id 自动删除
  },
  // store: new MongoStore({})// 将 session 存储到 mongodb
}));

/*
添加模板必需的变量
navs:导航菜单
*/ 
app.use(function (req, res, next) {
  // res.locals.user = req.session.user;
  res.locals.navs = optionData.navs;
  next();
},(req, res, next)=>{ 
  // console.log(req);
  logger.info(req.host, req.hostname, req.ip, req.originalUrl);
  next();
});

app.use('/', index);
app.use('/test', test);
app.use('/article', news);
app.use('/news', news);
app.use('/staff', staff);


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

module.exports = app;
