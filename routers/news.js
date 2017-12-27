let gConfig = require('../config/config'),
    EventProxy = require('eventproxy'),
    catos = require('../config/data')('catos'),
    cache = require('../middlename/cache'),
    newProxy = require('../proxy/newsProxy');

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
            cache.get(catoname, (err, total) => { console.log(err, total)
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
