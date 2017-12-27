let News = require('../module/news.module'),
    EventProxy = require('eventproxy');

let ArticleModel = News.ArticleModel;

module.exports.getArticleById = function(id, callback){
    let proxy = new EventProxy();
    
    proxy.assign(['article','prenews', 'nextnews'], (article, prenews, nextnews) => {
        callback(null, article, [prenews, nextnews]);
    }).fail(callback);
    
    ArticleModel.findOne({'_id':id, 'status':0}, (err, article) => {
        if (err) {
            proxy.unbind();
            return callback(err);
        }
        if (!article) {
            proxy.unbind();
            return callback(null);
        }
        proxy.emit('article', article);
        ArticleModel.findOne({'status':0, 'createTime':{'$gt':article.createTime}},{title:1, _id:1,url:1}, {sort:{createTime:1},limit:1}, 
            proxy.done('nextnews'));
        ArticleModel.findOne({'status':0, 'createTime':{'$lt':article.createTime}},{title:1, _id:1,url:1}, {sort:{createTime:-1},limit:1},
            proxy.done('prenews'));
    });
}

module.exports.newsCount = function(catoname, options, callback){
    ArticleModel.count({'category.name':catoname, 'status':0}, callback);
}

module.exports.getArticlesByCato = function(catoname, options, callback){
    let pageSize = options  && options.pageSize || 8,
        pageNo = options && options.pageNo || 0;
        conditions = {
            'category.name':catoname,
            'status':0,
        };
        options = {
            limit:pageSize,
            sort:{_id:-1},
            skip:pageSize*(pageNo-1)
        }
        
    ArticleModel.find(conditions, {}, options,callback);
}
