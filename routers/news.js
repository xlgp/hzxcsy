let gConfig = require('../config/config'),
    EventProxy = require('eventproxy'),
    newData = require('../config/data'),
    validator = require('validator'),
    _           = require('lodash'),
    cache = require('../middlename/cache'),
    newProxy = require('../proxy/newsProxy');

let catos = newData('catos'),
    newsOrigin = newData('newsOrigin');

module.exports.get = function(req, res, next){
        let ep = new EventProxy();
        newProxy.getArticleById(req.params.id, (err, article, other) => {
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
    newProxy.getArticlesByCato(catoname,
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
                    newProxy.newsCount(catoname, {}, proxy.done('total', (total) => {
                        cache.set(catoname, total);
                    }));
                }   
            })
            
        });
};

module.exports.showAdd = function (req, res, next) {
    res.render('admin/news', {
        catos:catos,
    });
}

module.exports.add = function (req, res, next) {
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
    

    // 更新reis article number 
    newProxy.save(article, (err, article) => {
        if (err) {
            res.status(500).json(data);
            return;
        }
        res.status(200).json({code:0, msg:'success', data:article});
        newProxy.newsCount(cato, {}, (err, total) => {
            cache.set(cato, total);
        });
        
    });
 
}

