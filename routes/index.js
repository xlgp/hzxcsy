let express = require('express'),
	getOption = require('../config/data'),
	newsData = require('../config/news'),
	gConfig = require('../config/config'),
	jobsConf = require('../config/job'),
	router = express.Router(),
	xcmodule = require('../module/xc.module.js'),
	logger = require('../middlename/xclog.js').logger('index');

/**
 * 首页
 */
router.get('/', (req, res, next) => {
	res.render('index', {
		carcousel: getOption('carcousel'),
		buss: getOption('buss'),
		news: newsData('news'),
		otherNews: newsData('otherNews'),
		commonSense: newsData('commonSense'),
		cooperator: getOption('cooperator'),
		shopList:getOption('shopList'),
	});
});

/**
 * 关于协创
 */
router.get('/aboutxc', (req, res, next) => {
	res.render('aboutxc', {
		cooperator: getOption('cooperator')
	});
});

/**
 * 联系协创
 */
router.get('/contact', (req, res, next) => {
	res.render('contact', {
		cangku: getOption('cangku'),
	});
});

/**
 * 加入协创
 */
router.get('/joinus', (req, res, next) => {
	res.render('joinus', {
		jobs:jobsConf(),
	});
});

module.exports = router;
