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
module.exports.getAllCarousel = function (callback) {
    CarouselModel.find({},(err, res) => {
        callback(err ,res);
    });
}

/**
 * 更新或保存carousel save and update
 */
module.exports.SUCarousel = function name(obj, callback) {
    let CarouselEnity = new CarouselModel(obj);
    CarouselEnity.save(callback);
};

