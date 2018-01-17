module.exports.adminRequired = function (req, res, next) {
    if(!req.session.username){
        if (req.method == 'POST') {
            return res.status(500).json({code:1,msg:'无权限访问',data:null});
        }
        return res.redirect('/login');
    }
    next();
}