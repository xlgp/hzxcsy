var express = require('express');
var router = express.Router();
var gConfig = require('../config/config');
var optionData = require('../config/data');

/**
 * 资讯详情
 */
router.get('/:id(\\d+)', (req, res, next) => {
    
    res.render('article', {
        articleObj:{article:optionData('news').data[req.params.id-1],
            // other:['<span>上一篇：无</span>', '<a href="/article/2">下一篇:杭州神辇网络科技有限公司科技有限公司科技有限公司荣升新一届中国汽车维修工委会</a>'],
            other:['<span>上一篇：无</span>', '<span>下一篇：无</span>']
        }
    });
});

/**
 * params:
 *      cato:资讯类型ID
 *      page:当前页码
 */
router.get('/:catoid(\\d+)/:page(\\d+)?', function(req, res, next) {
    let params = req.params;
    res.render('news', {
        news:optionData('news')
    });
});


module.exports = router;
