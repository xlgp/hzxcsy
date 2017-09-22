const staffAttr = ['ID', 'src', 'href', 'alt', 'title', 'smallSrc','groupId'];
/**
 * 员工风采模块
 * total:员工项数量,number,可选,预设该值等于data.length
 * type:类型,字符串,必须,目前只有'item'一个值
 * coverImgPath:封面图地址,字符串,必须
 * staffAttr:属性,Array,必须,
 *      ID:id,字符串,可选
 *      src:大图片的地址,字符串,必须
 *      smallSrc:缩略图的地址,字符串,必须
 *      groupId:groupId,字符串,可选
 *      href:图片链接,字符串,可选
 *      alt:img的属性,字符串,可选
 *      title:图片的描述信息,字符串,可选   
 */
const staffList = [
    {
        total:25,
        title:'协创庆典',
        attr:staffAttr,
        coverImgPath:'/public/upload/gallery/20161208/IMG_1000.jpg',
        data:[
            {"id":"726","src":"/public/upload/gallery/20161208/IMG_1000.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_1000_small.jpg","groupId":"7"},
            {"id":"727","src":"/public/upload/gallery/20161208/IMG_1001.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_1001_small.jpg","groupId":"7"},
            {"id":"728","src":"/public/upload/gallery/20161208/IMG_4492.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4492_small.jpg","groupId":"7"},
            {"id":"729","src":"/public/upload/gallery/20161208/IMG_4493.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4493_small.jpg","groupId":"7"},
            {"id":"730","src":"/public/upload/gallery/20161208/IMG_4496.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4496_small.jpg","groupId":"7"},
            {"id":"731","src":"/public/upload/gallery/20161208/IMG_4498.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4498_small.jpg","groupId":"7"},
            {"id":"732","src":"/public/upload/gallery/20161208/IMG_4520.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4520_small.jpg","groupId":"7"},
            {"id":"733","src":"/public/upload/gallery/20161208/IMG_4522.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4522_small.jpg","groupId":"7"},
            {"id":"734","src":"/public/upload/gallery/20161208/IMG_4526.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4526_small.jpg","groupId":"7"},
            {"id":"735","src":"/public/upload/gallery/20161208/IMG_4529.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4529_small.jpg","groupId":"7"},
            {"id":"736","src":"/public/upload/gallery/20161208/IMG_4557.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4557_small.jpg","groupId":"7"},
            {"id":"737","src":"/public/upload/gallery/20161208/IMG_4567.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4567_small.jpg","groupId":"7"},
            {"id":"738","src":"/public/upload/gallery/20161208/IMG_4596.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4596_small.jpg","groupId":"7"},
            {"id":"739","src":"/public/upload/gallery/20161208/IMG_4601.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4601_small.jpg","groupId":"7"},
            {"id":"740","src":"/public/upload/gallery/20161208/IMG_4605.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4605_small.jpg","groupId":"7"},
            {"id":"741","src":"/public/upload/gallery/20161208/IMG_4616.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4616_small.jpg","groupId":"7"},
            {"id":"742","src":"/public/upload/gallery/20161208/IMG_4665.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4665_small.jpg","groupId":"7"},
            {"id":"743","src":"/public/upload/gallery/20161208/IMG_4666.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4666_small.jpg","groupId":"7"},
            {"id":"744","src":"/public/upload/gallery/20161208/IMG_4718.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4718_small.jpg","groupId":"7"},
            {"id":"745","src":"/public/upload/gallery/20161208/IMG_4728.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4728_small.jpg","groupId":"7"},
            {"id":"746","src":"/public/upload/gallery/20161208/IMG_4729.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4729_small.jpg","groupId":"7"},
            {"id":"747","src":"/public/upload/gallery/20161208/IMG_4730.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4730_small.jpg","groupId":"7"},
            {"id":"748","src":"/public/upload/gallery/20161208/IMG_4731.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4731_small.jpg","groupId":"7"},
            {"id":"749","src":"/public/upload/gallery/20161208/IMG_4732.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4732_small.jpg","groupId":"7"},
            {"id":"750","src":"/public/upload/gallery/20161208/IMG_4733.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4733_small.jpg","groupId":"7"},
        ],
    },
    {
        total:25,
        title:'协创庆典',
        attr:staffAttr,
        coverImgPath:'/public/upload/gallery/20161208/IMG_1000.jpg',
        data:[
            {"id":"726","src":"/public/upload/gallery/20161208/IMG_1000.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_1000_small.jpg","groupId":"7"},
            {"id":"727","src":"/public/upload/gallery/20161208/IMG_1001.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_1001_small.jpg","groupId":"7"},
            {"id":"728","src":"/public/upload/gallery/20161208/IMG_4492.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4492_small.jpg","groupId":"7"},
            {"id":"729","src":"/public/upload/gallery/20161208/IMG_4493.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4493_small.jpg","groupId":"7"},
            {"id":"730","src":"/public/upload/gallery/20161208/IMG_4496.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4496_small.jpg","groupId":"7"},
            {"id":"731","src":"/public/upload/gallery/20161208/IMG_4498.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4498_small.jpg","groupId":"7"},
            {"id":"732","src":"/public/upload/gallery/20161208/IMG_4520.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4520_small.jpg","groupId":"7"},
            {"id":"733","src":"/public/upload/gallery/20161208/IMG_4522.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4522_small.jpg","groupId":"7"},
            {"id":"734","src":"/public/upload/gallery/20161208/IMG_4526.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4526_small.jpg","groupId":"7"},
            {"id":"735","src":"/public/upload/gallery/20161208/IMG_4529.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4529_small.jpg","groupId":"7"},
            {"id":"736","src":"/public/upload/gallery/20161208/IMG_4557.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4557_small.jpg","groupId":"7"},
            {"id":"737","src":"/public/upload/gallery/20161208/IMG_4567.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4567_small.jpg","groupId":"7"},
            {"id":"738","src":"/public/upload/gallery/20161208/IMG_4596.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4596_small.jpg","groupId":"7"},
            {"id":"739","src":"/public/upload/gallery/20161208/IMG_4601.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4601_small.jpg","groupId":"7"},
            {"id":"740","src":"/public/upload/gallery/20161208/IMG_4605.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4605_small.jpg","groupId":"7"},
            {"id":"741","src":"/public/upload/gallery/20161208/IMG_4616.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4616_small.jpg","groupId":"7"},
            {"id":"742","src":"/public/upload/gallery/20161208/IMG_4665.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4665_small.jpg","groupId":"7"},
            {"id":"743","src":"/public/upload/gallery/20161208/IMG_4666.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4666_small.jpg","groupId":"7"},
            {"id":"744","src":"/public/upload/gallery/20161208/IMG_4718.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4718_small.jpg","groupId":"7"},
            {"id":"745","src":"/public/upload/gallery/20161208/IMG_4728.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4728_small.jpg","groupId":"7"},
            {"id":"746","src":"/public/upload/gallery/20161208/IMG_4729.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4729_small.jpg","groupId":"7"},
            {"id":"747","src":"/public/upload/gallery/20161208/IMG_4730.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4730_small.jpg","groupId":"7"},
            {"id":"748","src":"/public/upload/gallery/20161208/IMG_4731.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4731_small.jpg","groupId":"7"},
            {"id":"749","src":"/public/upload/gallery/20161208/IMG_4732.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4732_small.jpg","groupId":"7"},
            {"id":"750","src":"/public/upload/gallery/20161208/IMG_4733.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4733_small.jpg","groupId":"7"},
        ],
    },
    {
        total:25,
        title:'协创庆典',
        attr:staffAttr,
        coverImgPath:'/public/upload/gallery/20161208/IMG_1000.jpg',
        data:[
            {"id":"726","src":"/public/upload/gallery/20161208/IMG_1000.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_1000_small.jpg","groupId":"7"},
            {"id":"727","src":"/public/upload/gallery/20161208/IMG_1001.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_1001_small.jpg","groupId":"7"},
            {"id":"728","src":"/public/upload/gallery/20161208/IMG_4492.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4492_small.jpg","groupId":"7"},
            {"id":"729","src":"/public/upload/gallery/20161208/IMG_4493.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4493_small.jpg","groupId":"7"},
            {"id":"730","src":"/public/upload/gallery/20161208/IMG_4496.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4496_small.jpg","groupId":"7"},
            {"id":"731","src":"/public/upload/gallery/20161208/IMG_4498.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4498_small.jpg","groupId":"7"},
            {"id":"732","src":"/public/upload/gallery/20161208/IMG_4520.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4520_small.jpg","groupId":"7"},
            {"id":"733","src":"/public/upload/gallery/20161208/IMG_4522.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4522_small.jpg","groupId":"7"},
            {"id":"734","src":"/public/upload/gallery/20161208/IMG_4526.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4526_small.jpg","groupId":"7"},
            {"id":"735","src":"/public/upload/gallery/20161208/IMG_4529.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4529_small.jpg","groupId":"7"},
            {"id":"736","src":"/public/upload/gallery/20161208/IMG_4557.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4557_small.jpg","groupId":"7"},
            {"id":"737","src":"/public/upload/gallery/20161208/IMG_4567.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4567_small.jpg","groupId":"7"},
            {"id":"738","src":"/public/upload/gallery/20161208/IMG_4596.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4596_small.jpg","groupId":"7"},
            {"id":"739","src":"/public/upload/gallery/20161208/IMG_4601.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4601_small.jpg","groupId":"7"},
            {"id":"740","src":"/public/upload/gallery/20161208/IMG_4605.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4605_small.jpg","groupId":"7"},
            {"id":"741","src":"/public/upload/gallery/20161208/IMG_4616.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4616_small.jpg","groupId":"7"},
            {"id":"742","src":"/public/upload/gallery/20161208/IMG_4665.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4665_small.jpg","groupId":"7"},
            {"id":"743","src":"/public/upload/gallery/20161208/IMG_4666.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4666_small.jpg","groupId":"7"},
            {"id":"744","src":"/public/upload/gallery/20161208/IMG_4718.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4718_small.jpg","groupId":"7"},
            {"id":"745","src":"/public/upload/gallery/20161208/IMG_4728.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4728_small.jpg","groupId":"7"},
            {"id":"746","src":"/public/upload/gallery/20161208/IMG_4729.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4729_small.jpg","groupId":"7"},
            {"id":"747","src":"/public/upload/gallery/20161208/IMG_4730.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4730_small.jpg","groupId":"7"},
            {"id":"748","src":"/public/upload/gallery/20161208/IMG_4731.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4731_small.jpg","groupId":"7"},
            {"id":"749","src":"/public/upload/gallery/20161208/IMG_4732.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4732_small.jpg","groupId":"7"},
            {"id":"750","src":"/public/upload/gallery/20161208/IMG_4733.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4733_small.jpg","groupId":"7"},
        ],
    },{
        total:25,
        title:'协创庆典',
        attr:staffAttr,
        coverImgPath:'/public/upload/gallery/20161208/IMG_1000.jpg',
        data:[
            {"id":"726","src":"/public/upload/gallery/20161208/IMG_1000.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_1000_small.jpg","groupId":"7"},
            {"id":"727","src":"/public/upload/gallery/20161208/IMG_1001.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_1001_small.jpg","groupId":"7"},
            {"id":"728","src":"/public/upload/gallery/20161208/IMG_4492.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4492_small.jpg","groupId":"7"},
            {"id":"729","src":"/public/upload/gallery/20161208/IMG_4493.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4493_small.jpg","groupId":"7"},
            {"id":"730","src":"/public/upload/gallery/20161208/IMG_4496.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4496_small.jpg","groupId":"7"},
            {"id":"731","src":"/public/upload/gallery/20161208/IMG_4498.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4498_small.jpg","groupId":"7"},
            {"id":"732","src":"/public/upload/gallery/20161208/IMG_4520.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4520_small.jpg","groupId":"7"},
            {"id":"733","src":"/public/upload/gallery/20161208/IMG_4522.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4522_small.jpg","groupId":"7"},
            {"id":"734","src":"/public/upload/gallery/20161208/IMG_4526.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4526_small.jpg","groupId":"7"},
            {"id":"735","src":"/public/upload/gallery/20161208/IMG_4529.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4529_small.jpg","groupId":"7"},
            {"id":"736","src":"/public/upload/gallery/20161208/IMG_4557.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4557_small.jpg","groupId":"7"},
            {"id":"737","src":"/public/upload/gallery/20161208/IMG_4567.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4567_small.jpg","groupId":"7"},
            {"id":"738","src":"/public/upload/gallery/20161208/IMG_4596.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4596_small.jpg","groupId":"7"},
            {"id":"739","src":"/public/upload/gallery/20161208/IMG_4601.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4601_small.jpg","groupId":"7"},
            {"id":"740","src":"/public/upload/gallery/20161208/IMG_4605.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4605_small.jpg","groupId":"7"},
            {"id":"741","src":"/public/upload/gallery/20161208/IMG_4616.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4616_small.jpg","groupId":"7"},
            {"id":"742","src":"/public/upload/gallery/20161208/IMG_4665.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4665_small.jpg","groupId":"7"},
            {"id":"743","src":"/public/upload/gallery/20161208/IMG_4666.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4666_small.jpg","groupId":"7"},
            {"id":"744","src":"/public/upload/gallery/20161208/IMG_4718.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4718_small.jpg","groupId":"7"},
            {"id":"745","src":"/public/upload/gallery/20161208/IMG_4728.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4728_small.jpg","groupId":"7"},
            {"id":"746","src":"/public/upload/gallery/20161208/IMG_4729.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4729_small.jpg","groupId":"7"},
            {"id":"747","src":"/public/upload/gallery/20161208/IMG_4730.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4730_small.jpg","groupId":"7"},
            {"id":"748","src":"/public/upload/gallery/20161208/IMG_4731.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4731_small.jpg","groupId":"7"},
            {"id":"749","src":"/public/upload/gallery/20161208/IMG_4732.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4732_small.jpg","groupId":"7"},
            {"id":"750","src":"/public/upload/gallery/20161208/IMG_4733.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4733_small.jpg","groupId":"7"},
        ],
    },{
        total:25,
        title:'协创庆典',
        attr:staffAttr,
        coverImgPath:'/public/upload/gallery/20161208/IMG_1000.jpg',
        data:[
            {"id":"726","src":"/public/upload/gallery/20161208/IMG_1000.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_1000_small.jpg","groupId":"7"},
            {"id":"727","src":"/public/upload/gallery/20161208/IMG_1001.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_1001_small.jpg","groupId":"7"},
            {"id":"728","src":"/public/upload/gallery/20161208/IMG_4492.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4492_small.jpg","groupId":"7"},
            {"id":"729","src":"/public/upload/gallery/20161208/IMG_4493.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4493_small.jpg","groupId":"7"},
            {"id":"730","src":"/public/upload/gallery/20161208/IMG_4496.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4496_small.jpg","groupId":"7"},
            {"id":"731","src":"/public/upload/gallery/20161208/IMG_4498.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4498_small.jpg","groupId":"7"},
            {"id":"732","src":"/public/upload/gallery/20161208/IMG_4520.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4520_small.jpg","groupId":"7"},
            {"id":"733","src":"/public/upload/gallery/20161208/IMG_4522.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4522_small.jpg","groupId":"7"},
            {"id":"734","src":"/public/upload/gallery/20161208/IMG_4526.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4526_small.jpg","groupId":"7"},
            {"id":"735","src":"/public/upload/gallery/20161208/IMG_4529.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4529_small.jpg","groupId":"7"},
            {"id":"736","src":"/public/upload/gallery/20161208/IMG_4557.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4557_small.jpg","groupId":"7"},
            {"id":"737","src":"/public/upload/gallery/20161208/IMG_4567.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4567_small.jpg","groupId":"7"},
            {"id":"738","src":"/public/upload/gallery/20161208/IMG_4596.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4596_small.jpg","groupId":"7"},
            {"id":"739","src":"/public/upload/gallery/20161208/IMG_4601.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4601_small.jpg","groupId":"7"},
            {"id":"740","src":"/public/upload/gallery/20161208/IMG_4605.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4605_small.jpg","groupId":"7"},
            {"id":"741","src":"/public/upload/gallery/20161208/IMG_4616.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4616_small.jpg","groupId":"7"},
            {"id":"742","src":"/public/upload/gallery/20161208/IMG_4665.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4665_small.jpg","groupId":"7"},
            {"id":"743","src":"/public/upload/gallery/20161208/IMG_4666.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4666_small.jpg","groupId":"7"},
            {"id":"744","src":"/public/upload/gallery/20161208/IMG_4718.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4718_small.jpg","groupId":"7"},
            {"id":"745","src":"/public/upload/gallery/20161208/IMG_4728.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4728_small.jpg","groupId":"7"},
            {"id":"746","src":"/public/upload/gallery/20161208/IMG_4729.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4729_small.jpg","groupId":"7"},
            {"id":"747","src":"/public/upload/gallery/20161208/IMG_4730.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4730_small.jpg","groupId":"7"},
            {"id":"748","src":"/public/upload/gallery/20161208/IMG_4731.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4731_small.jpg","groupId":"7"},
            {"id":"749","src":"/public/upload/gallery/20161208/IMG_4732.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4732_small.jpg","groupId":"7"},
            {"id":"750","src":"/public/upload/gallery/20161208/IMG_4733.jpg","smallSrc":"/public/upload/gallery/20161208/IMG_4733_small.jpg","groupId":"7"},
        ],
    },
];

/**
 * 每一页返回9条数据
 */
const limit = 9;

let gather = {
    groups:(options) => {
        let attr=['title','coverImgPath'],
            len = staffList.length,
            config = {
                page:1
            };
        for(var k in config){
            options[k] && (config[k] = options[k]);
        }
        let groups = [];
        for (let index = (config.page-1)*limit; index < (config.page*limit > len ? len : config.page*limit); index++) {
            let staff = staffList[index];
            let group = {};
            attr.forEach(function(val,i) {
                group[val] = staff[val];
            }, this);
            group.id = index+1;
            groups.push(group);
        }
        return groups;
    },
    item:(options) => {
        let attr = ['title', 'data'],
            config = {id:-1};
        for(var k in config){
            options[k] && (config[k] = options[k]);
        }
        return staffList[config.id-1];
    },
    total:(options) => {
        return staffList.length;
    }
};

module.exports = (type, option) => { 
    return gather[type](option);
};