var getStaff = require('../config/staff');
/**
 * 列表查询
 */
module.exports = {
    list:(req, res, next) => {
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
    },
    item:(req, res, next) => {
        
        staffs = getStaff('item',{id:parseInt(req.params.id)});
        if (!staffs) {
            res.redirect('/404');
        }
        staffs.code = 0;
        res.render('staff', {
            staffs:staffs,        
        });
    }
}
