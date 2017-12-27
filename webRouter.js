const express = require('express'),
    router = express.Router();
    site = require('./routers/site'),
    staff = require('./routers/staff'),
    news = require('./routers/news');

router.get('/', site.index);
router.get('/aboutxc',site.aboutxc);
router.get('/contact', site.contact);
router.get('/joinus', site.joinus);


// 文章
router.get('/article/:id(\\w{24})', news.get);
router.get('/news/:catoname(\\w+)/:page(\\d+)', news.cato);

// staff
router.get('/staff/:page(\\d+)', staff.list);
router.get('/staff/item/:id(\\d+)', staff.item);


router.get('/test', require('./test/test').index);

module.exports = router;