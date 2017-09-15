var express = require('express');
var gConfig = require('../config/config');
var optionData = require('../config/data');
var router = express.Router();

/**
 * 列表查询
 */
router.get('/:page(\\d+)', (req, res, next) => {
    let list = {
        code:0,
        total:5,
        type:'groups',
        attr:['id', 'name','coverImgPath'],
        data:[
            {id:1,name:'协创庆典',coverImgPath:'/public/upload/gallery/20161208/IMG_1000.jpg'},
            {id:2,name:'协创庆典',coverImgPath:'/public/upload/gallery/20161208/IMG_1000.jpg'},
            {id:3,name:'协创庆典',coverImgPath:'/public/upload/gallery/20161208/IMG_1000.jpg'},
            {id:4,name:'协创庆典',coverImgPath:'/public/upload/gallery/20161208/IMG_1000.jpg'},
            {id:5,name:'协创庆典',coverImgPath:'/public/upload/gallery/20161208/IMG_1000.jpg'},
            {id:5,name:'协创庆典',coverImgPath:'/public/upload/gallery/20161208/IMG_1000.jpg'},
        ]
        };

    res.render('staff', {
        staffs:list
    });
});

/**
 * 详情查询
 */
router.get('/item/:id(\\d+)', (req, res, next) => {
    console.log(req.params);
    let list = {
        code:0,
        total:25,
        type:'item',
        title:'协创庆典',
        attr:['ID', 'src', 'href', 'alt', 'title', 'smallSrc','groupId'],
        data:[
            {"ID":"726","src":"/public/upload/gallery/20161208/IMG_1000.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_1000_副本.jpg","groupId":"7"},
            {"ID":"727","src":"/public/upload/gallery/20161208/IMG_1001.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_1001_副本.jpg","groupId":"7"},
            {"ID":"728","src":"/public/upload/gallery/20161208/IMG_4492.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4492_副本.jpg","groupId":"7"},
            {"ID":"729","src":"/public/upload/gallery/20161208/IMG_4493.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4493_副本.jpg","groupId":"7"},
            {"ID":"730","src":"/public/upload/gallery/20161208/IMG_4496.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4496_副本.jpg","groupId":"7"},
            {"ID":"731","src":"/public/upload/gallery/20161208/IMG_4498.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4498_副本.jpg","groupId":"7"},
            {"ID":"732","src":"/public/upload/gallery/20161208/IMG_4520.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4520_副本.jpg","groupId":"7"},
            {"ID":"733","src":"/public/upload/gallery/20161208/IMG_4522.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4522_副本.jpg","groupId":"7"},
            {"ID":"734","src":"/public/upload/gallery/20161208/IMG_4526.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4526_副本.jpg","groupId":"7"},
            {"ID":"735","src":"/public/upload/gallery/20161208/IMG_4529.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4529_副本.jpg","groupId":"7"},
            {"ID":"736","src":"/public/upload/gallery/20161208/IMG_4557.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4557_副本.jpg","groupId":"7"},
            {"ID":"737","src":"/public/upload/gallery/20161208/IMG_4567.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4567_副本.jpg","groupId":"7"},
            {"ID":"738","src":"/public/upload/gallery/20161208/IMG_4596.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4596_副本.jpg","groupId":"7"},
            {"ID":"739","src":"/public/upload/gallery/20161208/IMG_4601.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4601_副本.jpg","groupId":"7"},
            {"ID":"740","src":"/public/upload/gallery/20161208/IMG_4605.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4605_副本.jpg","groupId":"7"},
            {"ID":"741","src":"/public/upload/gallery/20161208/IMG_4616.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4616_副本.jpg","groupId":"7"},
            {"ID":"742","src":"/public/upload/gallery/20161208/IMG_4665.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4665_副本.jpg","groupId":"7"},
            {"ID":"743","src":"/public/upload/gallery/20161208/IMG_4666.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4666_副本.jpg","groupId":"7"},
            {"ID":"744","src":"/public/upload/gallery/20161208/IMG_4718.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4718_副本.jpg","groupId":"7"},
            {"ID":"745","src":"/public/upload/gallery/20161208/IMG_4728.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4728_副本.jpg","groupId":"7"},
            {"ID":"746","src":"/public/upload/gallery/20161208/IMG_4729.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4729_副本.jpg","groupId":"7"},
            {"ID":"747","src":"/public/upload/gallery/20161208/IMG_4730.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4730_副本.jpg","groupId":"7"},
            {"ID":"748","src":"/public/upload/gallery/20161208/IMG_4731.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4731_副本.jpg","groupId":"7"},
            {"ID":"749","src":"/public/upload/gallery/20161208/IMG_4732.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4732_副本.jpg","groupId":"7"},
            {"ID":"750","src":"/public/upload/gallery/20161208/IMG_4733.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4733_副本.jpg","groupId":"7"},
        ],
    };
    res.render('staff', {
        staffs:list,        
    });
});
module.exports = router;