let XCProxy = require('../proxy/xcProxy'),
    cache   = require('../middlename/cache'),
    logger = require('../middlename/xclog').logger('xcrouter'),
    validator = require('validator');

module.exports.site = function (req, res, next) {
    res.render('admin/site');
}

module.exports.showCarousel = function(req, res, next){
    res.render('admin/carousel');
}

module.exports.carousel = function (req, res, next) {
    let pageNo = validator.isInt(req.query.page) &&  parseInt(req.query.page) || 1,
        pageSize = validator.isInt(req.query.limit) && parseInt(req.query.limit) || 6;
    
    XCProxy.getAllCarousel({pageNo:pageNo, pageSize:pageSize}, (err, list) => {
        if (err) {
            res.json({code:1, msg:'数据库错误', data:[]});
            logger.error('数据库错误');
            return
        }
        cache.get('carouselAllCount', (err, total) => {
            if (total) {
                res.json({code:0, msg:'success', data:list, count:total});
            }else{
                XCProxy.allCarouselCount((err, count) => { console.log(count);
                    cache.set('carouselAllCount', count);
                    res.json({code:0, msg:'success', data:list, count:count});
                });
            }
        })
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
        url.href = href ? href : '';
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
        XCProxy.saveCarousel(carousel, (err) => {
            if (err) {
                res.json({code:2,msg:'保存失败'});
                logger.error('保存失败', itemImgSrc);
                return;
            }
            res.json({code:0, msg:'success', data:carousel});
            XCProxy.allCarouselCount((err, count) => {
                cache.set('carouselAllCount', count);
            });

            XCProxy.getCarousel((err, res) => {
                if (err) {
                    logger.error('保存失败', itemImgSrc);
                    return;
                }
                cache.set('carousel',JSON.stringify(res));
            });
        });
    
}

module.exports.carouselDel = function (req, res, next) {
    let id = validator.trim(req.body.id),
    status = validator.trim(req.body.status);

    let data = {code:1, msg:'删除失败', data:null};
    if (!id || id.length != 24 || !validator.isInt(status)) {
        res.status(422).json(data);
        return;
    }
    XCProxy.upCarousel(id, status, (err, carousel) => {
        if (err) {
            res.status(500).json({code:2, msg:'不知道哪里出错了', data:null});
            return;
        }
        XCProxy.getCarousel((err, carousels) => {
            if (err) {
                res.status(500).json({code:3, msg:'不知道哪里出错了', data:null});
                return;
            }
            cache.set('carousel', JSON.stringify(carousels));
            res.json({code:0, msg:'success', data:carousel});
        });
    });
    
}