let logger = require('../middlename/xclog.js').logger('user'),
    config = require('../config/config');


let user = config.user;

module.exports.showLogin = function (req, res, next) {
    res.render('admin/login');
};

module.exports.login = function name(req, res, next) {
    if(req.body.username == user.username && req.body.password == user.password){
        
        req.session.regenerate((err) => {
            if (err) {
                return res.json({code:1, msg:'登录失败'});
            }
            req.session.username = user.username;
            return res.json({code:0, msg:'ok', data:{
                redirectUrl:'/xc/index',
            }});
        });
    }else{
            res.json({code:2, msg:'登录失败'});
        }  
}

module.exports.logout = function(req, res, next) {
    req.session.username = null;
    res.redirect('/login');
}