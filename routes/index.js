var express = require('express');
var optionData = require('../config/data');
var gConfig = require('../config/config');
var router = express.Router();

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
