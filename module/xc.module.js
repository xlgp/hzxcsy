const mongoose = require('./db.module'),
        logger = require('../middlename/xclog').logger('navs.module'),
	xcutil = require('../middlename/xcutil'),
	BaseModel = require('./base.module'),
        Schema = mongoose.Schema;

/**
 * 首页轮播图
 * itemImgSrc:图片地址,
 * bannerTile:标题(可选)
 * bannerDetail:简介(可选)
 * status:状态(0:显示, !0不显示)
 * url:链接
 * createTime:创建时间
 */
let CarouselSchema = new Schema({
        itemImgSrc:{type:String},
        bannerTitle:{type:String},
        bannerDetail:{type:String},
	status:{type:Number, default:0},
	url:{
		href:{type:String},
		target:{type:String,default:'javascript:;'},
	},
	createTime: { type: Date, default: Date.now },
});

CarouselSchema.plugin(BaseModel);


let CarouselModel = mongoose.model('carousel', CarouselSchema);

module.exports = {
	CarouselModel : CarouselModel,
};