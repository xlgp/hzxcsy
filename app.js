let express = require('express'),
		path = require('path'),
		favicon = require('serve-favicon'),
		session = require('express-session'),
		mlogger = require('morgan'),
		logger = require('./middlename/xclog').logger('app'),

		cookieParser = require('cookie-parser'),
		bodyParser = require('body-parser'),

		config = require('./config/config'),
		getOption = require('./config/data'),
		
		webRouter = require('./webRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.locals = {
	//协创基本信息
	XC : config.XC,
	//静态资源服务器域名
	STATIC_HOST:config.STATIC_HOST || '',
	//友情链接
	friendLink:getOption('friendLink'),
	//二维码信息
	qrCode:getOption('qrCode'),
};

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
	res.locals.navs = getOption('navs');
	res.locals.g = getOption('globalList');
	if(req.app.get('env') != 'development'){
		res.cookie('isload', 'yes');
	}else if (req.cookies.isload) {
		res.cookie('isload', req.cookies.isload);
		
	}
	next();
},(req, res, next)=>{ 
	
	logger.info(req.hostname, req.headers['x-real-ip'] || req.ip, req.originalUrl);
	
	next();
});

app.use('/', webRouter);


app.use('/404', (req, res, next) => {
	next();
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
	let err = new Error('页面或数据去了火星了...');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	let status = err.status || 500;
	logger.error(status, req.originalUrl, err.message);
	res.status(status);
	res.render('error');
});

module.exports = app;
