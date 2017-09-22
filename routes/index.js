let express = require('express'),
    optionData = require('../config/data'),
    gConfig = require('../config/config'),
    router = express.Router(),
    xcmodule = require('../module/xc.module.js'),
    logger = require('../middlename/xclog.js').logger('index');

/**
 * 首页
 */
router.get('/', (req, res, next) => {
  res.render('index', {
    carcousels:optionData.carcousels,
    buss:optionData.buss,
    news:optionData.news
  });
});

/**
 * 关于协创
 */
router.get('/aboutxc', (req, res, next) => {
  res.render('aboutxc', {
    cooperators:optionData.cooperators
  });
});

/**
 * 联系协创
 */
router.get('/contact', (req, res, next) => {
  res.render('contact', {
    cangku:optionData.cangku,
  });
});

/**
 * 加入协创
 */
router.get('/joinus', (req, res, next) => {
  res.render('joinus', {
  });
});

module.exports = router;
