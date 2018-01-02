module.exports.adminRequired = function (req, res, next) {
    if(!req.session.username){
        return next(new Error('<a href="/login">请登录...</a>'));
    }
    next();
}