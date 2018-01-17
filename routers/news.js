let gConfig = require('../config/config'),
    EventProxy = require('eventproxy'),
    newData = require('../config/data'),
    validator = require('validator'),
    _           = require('lodash'),
    cache = require('../middlename/cache'),
    newsProxy = require('../proxy/newsProxy');

let catos = newData('catos'),
    newsOrigin = newData('newsOrigin');

module.exports.get = function(req, res, next){
        let ep = new EventProxy();
        newsProxy.getArticlesById(req.params.id, (err, article, other) => {
            if(err || !article){
                next(new Error('文章不存在...'));
                return;
            }
            res.render('article', {
                articleObj:{
                    article:article,
                    other:((other) =>{
                        other[0] = other[0] ? '上一篇:<a href="'+other[0]['url']['href'] + other[0]['_id']+'">'+other[0]['title']+'</a>':'<span>上一篇：无</span>';
                        other[1] = other[1] ? '下一篇:<a href="'+other[1]['url']['href'] + other[1]['_id']+'">'+other[1]['title']+'</a>':'<span>下一篇：无</span>';
                        return other;
                    })(other)
                }
            });
        });
};

/**
 * 根据文章类型查询
 */
module.exports.cato = function(req, res, next) {
    let params = req.params,
        catoname = params.catoname,
        proxy = new EventProxy();

    if(!params.page){
        next(new Error('no page number'));
        return;
    }
    proxy.assign(['articles','total'], function(articles, total){
        res.render('news', {
            news:{
                data:articles,
                total:total,
            },
        });
    }).fail(next);
    newsProxy.getArticlesByCato(catoname,
        {pageSize:gConfig.limitArticlePageSize, pageNo:params.page}, (err, article) => {
            if (err) {
                proxy.unbind();
                next(err);
                return;
            }
            if (article.length == 0) {
                proxy.unbind();
                next();
                return;
            }
            proxy.emit('articles', article);
            cache.get(catoname, (err, total) => { 
                if(total){
                    proxy.emit('total', total);
                }else{
                    newsProxy.newsCount(catoname, {}, proxy.done('total', (total) => {
                        cache.set(catoname, total);
                    }));
                }   
            })
            
        });
};

module.exports.articleList = function(req, res, next) {
    let pageNo = validator.isInt(req.query.page) &&  parseInt(req.query.page) || 1,
        pageSize = validator.isInt(req.query.limit) && parseInt(req.query.limit) || 15;
    
    newsProxy.getAllArticles({pageNo:pageNo, pageSize:pageSize}, (err, list) => {
        if (err) {
            res.json({code:1, msg:'哎呀, 不知道哪里抽风了'});
            return;
        }
        cache.get('newsAllCount', (err, total) => {
            if (total) {
                res.json({code:0, msg:'success', data:list, count:total});
            }else{
                newsProxy.allCount((err, total) => {
                   cache.set('newsAllCount', total);
                   res.json({code:0, msg:'success', data:list, count:total});
                });
            }
        });
    });
}

module.exports.newsPage = function (req, res, next) {
    let articleId = req.query.id;
    
    let data = {catos:catos, code:0, msg:'success', article:null};
    if (articleId && articleId.length == 24) {
        newsProxy.getArticleById(articleId, (err,res) => {
            if(err){
                data['code'] = 1;
                data['msg'] = '文章不存在';
            }
            data['article'] = res;
        })
    }
    res.render('admin/news', data);
}

module.exports.save = function (req, res, next) {
    let title = validator.trim(req.body.title),
        cato = validator.trim(req.body.cato),
        originId = validator.toInt(req.body['origin.id']),
        originUrl = validator.trim(req.body['origin.url']),
        itemImgSrc = validator.trim(req.body.itemImgSrc||''),
        content = validator.trim(req.body.content);
    
    let data = {code:1,msg:'保存失败'};
    
    //获取所有的分类
    let catokeys = _.map(catos, function (c, index) {
        return c[0];
    });
    let originkeys = _.map(newsOrigin, function(obj, index){
        return obj[0];
    })
    
    if (!title || ! content) {
        res.status(422).json(data);
        return;
    }
    let keyIndex = catokeys.indexOf(cato);
    if (keyIndex == -1) {
        res.status(422).json(data);
        return;
    }
    
    let article = {
        title:title,
        category:{
            name:cato,
            zhname:catos[keyIndex][1],
        },
        summary:req.body.summary || content.slice(0,256),
        content:content,
    };
    if (itemImgSrc) {
        article.itemImgSrc = itemImgSrc;
    }
    if (originId == NaN) {
        data.msg = '文章来源错误';
        res.status(422).json(data);
        return;
    }
    let originkeyindex = originkeys.indexOf(originId);
    if (originkeyindex == -1) {
        data.msg = '文章来源错误';
        res.status(422).json(data);
        return;
    }
    let ourl = '';
    if (originkeyindex == 1){
        if(!validator.isURL(originUrl)) {
            data.msg = '文章来源错误';
            res.status(422).json(data);
            return;
        }
        ourl = originUrl;
    }

    article.origin = {
        originid:originId,
        title:newsOrigin[originkeyindex][1],
        url:ourl
    };
    
    newsProxy.save(article, (err, article) => {
        if (err) {
            res.status(500).json(data);
            return;
        }
        res.status(200).json({code:0, msg:'success', data:article});
        newsProxy.newsCount(cato, {}, (err, total) => {
            cache.set(cato, total);
        });
        newsProxy.allCount((err, total) => {
            cache.set('newsAllCount', total);
        });
        
    });
 
}

module.exports.update = function(req, res, next){
    let title = validator.trim(req.body.title),
        cato = validator.trim(req.body.cato),
        originId = validator.toInt(req.body['origin.id']),
        originUrl = validator.trim(req.body['origin.url']),
        itemImgSrc = validator.trim(req.body.itemImgSrc||''),
        content = validator.trim(req.body.content),
        id = validator.trim(req.body.id);
    
    let data = {code:1,msg:'更新失败'};
    if (!id || id.length != 24) {
            res.status(422).json(data);
            return;
    }

    newsProxy.getArticleById(id, (err, article) => {
        if (!article) {
            res.status(422).json(data);
            return
        }
         //获取所有的分类
        let catokeys = _.map(catos, function (c, index) {
            return c[0];
        });
        let originkeys = _.map(newsOrigin, function(obj, index){
            return obj[0];
        })
        
        if (!title || ! content) {
            res.status(422).json(data);
            return;
        }
        let keyIndex = catokeys.indexOf(cato);
        if (keyIndex == -1) {
            res.status(422).json(data);
            return;
        }
        if (itemImgSrc) {
            article.itemImgSrc = itemImgSrc;
        }
        if (originId == NaN) {
            data.msg = '文章来源错误';
            res.status(422).json(data);
            return;
        }
        let originkeyindex = originkeys.indexOf(originId);
        if (originkeyindex == -1) {
            data.msg = '文章来源错误';
            res.status(422).json(data);
            return;
        }
        let ourl = '';
        if (originkeyindex == 1){
            if(!validator.isURL(originUrl)) {
                data.msg = '文章来源错误';
                res.status(422).json(data);
                return;
            }
            ourl = originUrl;
        }
        article.title = title;
        article.category.name = cato;
        article.category.zhname = catos[keyIndex][1];
        article.origin.url = ourl;
        article.origin.title = newsOrigin[originkeyindex][1];
        article.originid = originId;
        article.summary = req.body.summary || content.slice(0,256);
        article.content = content;
        article.updateTime = new Date();
        article.markModified('category');
        article.markModified('origin');
        
        article.save((err) => {
            if (err) {
                res.status(422).json(data);
                return
            }
            res.status(200).json({code:0, msg:'success', data:article});
        });
    })
}

/**
 * 删除文章,此处是通过改变文章status字段的值来达到删除的效果 
 */
module.exports.delete = function(req, res, next){
    let id = validator.trim(req.body.id),
        status = validator.trim(req.body.status);
    
    let data = {code:1, msg:'删除失败', data:null};
    if (!id || id.length != 24 || !validator.isInt(status)) {
        res.status(422).json(data);
        return;
    }
    newsProxy.update(id, {status:status}, (err, article) => {
        if (err) {
            res.status(500).json({code:2, msg:'不知道哪里出错了', data:null});
            return;
        }
        
        newsProxy.newsCount(article.category.name, {}, (err, count) => {
            cache.set(article.category.name, count);
        });
        res.json({code:0, msg:'success', data:null});
    });
}

module.exports.isTop = function(req, res, next){
    let id = validator.trim(req.body.id),
        isTop = validator.isBoolean(req.body.istop);
    
    if (!isTop) {
        res.json({code:0, msg:'success', data:null});
        return;    
    }
    
    isTop = validator.toBoolean(req.body.istop); 
    console.log(typeof isTop, isTop);
    let data = {code:1, msg:'删除失败', data:null};
    if (!id || id.length != 24) {
        res.status(422).json(data);
        return;
    }
    newsProxy.update(id, {isTop:isTop}, (err, article) => { console.log(article);
        if (err) {
            res.status(500).json({code:2, msg:'不知道哪里出错了', data:null});
            return;
        }
        res.json({code:0, msg:'success', data:null});
    });
}