const mongoose = require('./db.module.js'),
        logger = require('../middlename/xclog.js').logger('navs.module'),
        xcutil = require('../middlename/xcutil.js'),
        Schema = mongoose.Schema;

let CarcouselSchema = new Schema({
        itemImgSrc:{type:String},
        bannerTitle:{type:String},
        bannerDetail:{type:String},
        status:{type:Number, default:0},
	date: { type: Date, default: Date.now },
});

let CarcouselModel = mongoose.model('carcousel', CarcouselSchema);

module.exports = {
        get: (contictions, callback) => {
		CarcouselModel.find(contictions, (err, subcallback) => {
			if(err){
				callback(err, null);
			}else{
				callback(null, subcallback);
			}
		});
	},
}