const express = require('express'),
    router = express.Router();
    site = require('./routers/site'),
    staff = require('./routers/staff'),
    user = require('./routers/user'),
    auth = require('./middlename/auth'),
    upload = require('./routers/upload'),
    xc = require('./routers/xc'),
    news = require('./routers/news');

router.get('/', site.index);
router.get('/aboutxc',site.aboutxc);
router.get('/contact', site.contact);
router.get('/joinus', site.joinus);


// 文章
router.get('/article/:id(\\w{24})', news.get);
router.get('/news/:catoname(\\w+)/:page(\\d+)', news.cato);
router.get('/xc/news/list', auth.adminRequired, news.articleList);
router.get('/xc/news/showlist', auth.adminRequired, news.newsPage);
router.post('/xc/news/save',auth.adminRequired, news.save);
router.post('/xc/news/update',auth.adminRequired, news.update);
router.post('/xc/news/delete', auth.adminRequired, news.delete);
router.post('/xc/news/top', auth.adminRequired, news.isTop);


//banner
router.get('/xc/index', auth.adminRequired, xc.site);
router.get('/xc/carousel/list', auth.adminRequired, xc.carousel);
router.get('/xc/carousel/showlist', auth.adminRequired, xc.showCarousel);
router.post('/xc/carousel/save', auth.adminRequired, xc.carouselSave);
router.post('/xc/carousel/delete', auth.adminRequired, xc.carouselDel);
// staff
router.get('/staff/:page(\\d+)', staff.list);
router.get('/staff/item/:id(\\d+)', staff.item);

//user
router.get('/login', user.showLogin);
router.post('/login', user.login);
router.get('/logout', user.logout);
//upload
router.post('/upload/:type(\\w+)', upload);

router.get('/test', require('./test/test').index);

module.exports = router;