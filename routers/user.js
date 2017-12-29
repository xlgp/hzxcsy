let logger = require('../middlename/xclog.js').logger('user'),
    config = require('../config/config');


let user = config.user;

module.exports.showLogin = function (req, res, next) {
    res.render('admin/login');
};

module.exports.login = function name(req, res, next) {
    if(req.body.username == user.username && req.body.password == user.password){
        req.session.user = user;
        res.json({code:0, msg:'ok', data:{
            url:'/news/add',
        }});
        return;
    }

    res.json({code:1, msg:'error'});
    
}