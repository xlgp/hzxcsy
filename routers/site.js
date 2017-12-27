let getOption = require('../config/data'),
	jobsConf = require('../config/job'),
	EventProxy = require('eventproxy'),
	_ = require('lodash'),
	newsProxy = require('../proxy/newsProxy');

let catos = getOption('catos');

module.exports.index = function(req, res, next) {
		let proxy = new EventProxy();
		proxy.all([catos[0][0], catos[1][0], catos[2][0]], (news, otherNews, commonSense) => {
			res.render('index', {
				carcousel: getOption('carcousel'),
				buss: getOption('buss'),
				news: news,
				otherNews: otherNews,
				commonSense: commonSense,
				cooperator: getOption('cooperator'),
				shopList:getOption('shopList'),
			});
		}).fail(next);
		newsProxy.getArticlesByCato(catos[0][0], {pageSize:3,pageNo:1}, proxy.done(catos[0][0], (news) => {
			return {title:'协创资讯 / News',url:{href:'/news/'+catos[0][0]+'/1',target:''},data:news};
		}));
		newsProxy.getArticlesByCato(catos[1][0], {pageSize:4,pageNo:1}, proxy.done(catos[1][0], (otherNews) => {
			return {title:'行业资讯 / Other news',url:{href:'/news/'+catos[1][0]+'/1',target:''},data:otherNews};
		}));
		newsProxy.getArticlesByCato(catos[2][0], {pageSize:4,pageNo:1}, proxy.done(catos[2][0], (commonSense) => {
			return {title:'用车常识 / Common sense',url:{href:'/news/'+catos[2][0]+'/1',target:''},data:commonSense};
		}));
	
};

module.exports.aboutxc = function(req, res, next) {
	res.render('aboutxc', {
		cooperator: getOption('cooperator')
	});
};
module.exports.contact = function(req, res, next) {
	res.render('contact', {
		cangku: getOption('cangku'),
	});
};
module.exports.joinus = function(req, res, next) {
	res.render('joinus', {
		jobs:jobsConf(),
	});
};