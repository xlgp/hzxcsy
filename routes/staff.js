var express = require('express');
var getStaff = require('../config/staff');
var router = express.Router();

/**
 * 列表查询
 */
router.get('/:page(\\d+)', (req, res, next) => {
    staffs = {};
    staffs.code = 0;
    staffs.type = 'groups';
    staffs.data = getStaff('groups',{page:req.params.page});
    if (!staffs.data || staffs.data.length === 0) {
        res.redirect('/404');
    }
    staffs.total = getStaff('total');
    res.render('staff', {
        staffs:staffs
    });
});

/**
 * 详情查询
 */
router.get('/item/:id(\\d+)', (req, res, next) => {
    
    staffs = getStaff('item',{id:parseInt(req.params.id)});
    if (!staffs) {
        res.redirect('/404');
    }
    staffs.code = 0;
    res.render('staff', {
        staffs:staffs,        
    });
});
module.exports = router;