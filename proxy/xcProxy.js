let EventProxy = require('eventproxy'),
    XCModel = require('../module/xc.module');

let CarouselModel = XCModel.CarouselModel;

//前端
module.exports.getCarousel = function (callback) {
    CarouselModel.find({'status':0}, {url:1,itemImgSrc:1,bannerTitle:1,  bannerDetail:1},{sort:{_id:-1}}, (err, res) => {        
        callback(err,res);
    });
}

//后台
module.exports.getAllCarousel = function (options,callback) {
    let pageSize = options  && options.pageSize || 20,
    pageNo = options && options.pageNo || 0;
    options = {
        limit:pageSize,
        sort:{_id:-1},
        skip:pageSize*(pageNo-1)
    };
    CarouselModel.find({}, {}, options, (err, res) => {
        callback(err ,res);
    });
}

module.exports.allCarouselCount = function(conditions, callback){
    CarouselModel.count(conditions, callback);
}

/**
 * 保存carousel
 */
module.exports.saveCarousel = function (obj, callback) {
    let CarouselEnity = new CarouselModel(obj);
    CarouselEnity.save(callback);
};

/**
 * 更新carousel
 */
module.exports.upCarousel = function (id, status, callback){
    CarouselModel.findByIdAndUpdate(id, {status:status}, {new:true}, callback);
}
