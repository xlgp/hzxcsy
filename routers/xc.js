let XCProxy = require('../proxy/xcProxy'),
    cache   = require('../middlename/cache'),
    logger = require('../middlename/xclog').logger('xcrouter'),
    validator = require('validator');

module.exports.site = function (req, res, next) {
    res.render('admin/site');
}

module.exports.carousel = function (req, res, next) {
    XCProxy.getAllCarousel((err, list) => {
        if (err) {
            res.json({code:1, msg:'数据库错误', data:[]});
            logger.error('数据库错误');
            return
        }
        res.json({code:0, msg:'success', data:list});
    });
}

module.exports.carouselSave = function (req, res, next) {
    let bannerDetail = validator.trim(req.body.bannerDetail),
        bannerTitle = validator.trim(req.body.bannerTitle),
        itemImgSrc = validator.trim(req.body.itemImgSrc);
        href = validator.trim(req.body['url.href']),
        target = validator.trim(req.body['url.target']);
        
        if (!itemImgSrc) {
            res.json({code:1, msg:'图片路径错误'});
            logger.error('图片路径错误');
            return;
        }
        let url = {};
        href && (url.href = href);
        target && (url.target = target);
        let carousel = {itemImgSrc:itemImgSrc};
        if (bannerDetail) {
            carousel.bannerDetail = bannerDetail;
        }
        if (bannerTitle) {
            carousel.bannerTitle = bannerTitle;
        }
        if(url){
            carousel.url = url;
        }
        XCProxy.SUCarousel(carousel, (err) => {
            if (err) {
                res.json({code:2,msg:'保存失败'});
                logger.error('保存失败', itemImgSrc);
                return;
            }
            res.json({code:0, msg:'success', data:carousel});
            XCProxy.getCarousel((err, res) => {
                if (err) {
                    logger.error('保存失败', itemImgSrc);
                    return;
                }
                cache.set('carousel',JSON.stringify(res));
            });
        });
    
}