const   mongoose = require('./db.module'),
        logger = require('../middlename/xclog').logger('news.module'),
        xcutil = require('../middlename/xcutil'),
        BaseModel = require('./base.module'),
        Schema = mongoose.Schema;

/**
 * title:标题,
 * author:作者,
 * pv:访问量
 * url:链接
 * status:状态(0:表示显示,!0表示不显示)
 * isTop:是否置顶()
 * itemImgSrc:文章封面图
 * summary:文章摘要
 * content:文章内容
 * origin:文章来源(若为转载, url:表示文章来源)
 */
let ArticleSchema = new Schema({
    pv:{type:Number,default:0},
    author:{type:String, default :'杭州协创'},
    title:{type:String, required:true},
    status:{type:Number, default:0},
    isTop:{type:Boolean, default:false},
    category:{
        name:{type:String,require:true},
        zhname:{type:String, require:true},
    },
    url:{
        href:{type:String, default:'/article/'},
        target:{type:String,default:''}
    },
    createTime: { type: Date, default: Date.now },
    updateTime: { type: Date, default: Date.now },
    origin:{
        originid:{type:Number, default:0},
        title:{type:String, default:'原创'},
        url:{type:String},
    },
    itemImgSrc:{type:String, default:'/public/upload/news/defualt-news-logo.jpg'},
    summary:{type:String, default:'', required:true},
    content:{type:String, default:'', required:true},
});

ArticleSchema.plugin(BaseModel);

 /**
  * 根据文章id查询
  * id:String article's id
  */
 ArticleSchema.methods.getArticleById = function(id, callback){
    return this.findOne(
                    {'_id':id, 'status':0})
                .populate('category')
                .exec(callback);
 }

 /**
  * 根据分类查询
  */
 ArticleSchema.methods.getArticlesByCato = function(catoid, options, callback) {
    let pageSize = options  && options.pageSize || 8,
        pageNo = options && options.pageNo || 0;
    return this.model('Article').find({'category':catoid, 'status':0}).populate('category').limit(pageSize)
            .sort('-_id').skip(pageSize*(pageNo-1)).exec(callback);
 }

ArticleSchema.methods.count = function(catoid, options, callback) {
    return this.model('Article').count({'category':catoid, 'status':0}, callback);
}


let ArticleModel = mongoose.model('Article', ArticleSchema);

module.exports = {
    ArticleModel:ArticleModel,
};