let express = require('express'),
    // getOption = require('../config/data'),
    // gConfig = require('../config/config'),
    router = express.Router(),
    xcmodule = require('../module/xc.module.js'),
    logger = require('../middlename/xclog.js').logger('user');

router.get('/login', (req, res, next) => {
    res.render('admin/login');
});

module.exports = router;