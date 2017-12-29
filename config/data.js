/**
 * 服务品牌
 */
const cooperator = {
    /**
     * total:合作伙伴数量,number,可选
     */
    total:7,
    /**
     * 合作伙伴的对象属性
     * name:合作伙伴的名称,字符串,必须
     * url:合作伙伴的官方链接,字符串,可选
     * img_src:合作伙伴的官方logo,必须
     */
    attr:['name', 'url', 'img_src'],
    /**
     * title:名称,字符串,可选
     */
    title:'服务品牌 / Service brand',
    /**
     * url:链接,字符串,可选
     *//**
     * url:链接,字符串,可选
     */
    url:{href:'javascript:;',target:''},
    data:[
      {
        name:'海马汽车',
        url:'http://www.haima.com/',
        img_src:'/public/upload/cooperator/logo-haima.png',
      },
      {
        name:'北汽幻速',
        url:'http://www.baic-hs.com/',
        img_src:'/public/upload/cooperator/logo-beiqihuansu.png',
      },{
        name:'长安铃木',
        url:'http://m.changansuzuki.com/',
        img_src:'/public/upload/cooperator/logo-changanlingmu.png',
      },{
        name:'东风汽车',
        url:'http://www.dfl.com.cn/',
        img_src:'/public/upload/cooperator/logo-dongfeng.png',
      },{
        name:'福田汽车',
        url:'http://www.foton.com.cn/',
        img_src:'/public/upload/cooperator/logo-futian.png',
      },{
        name:'天津一汽',
        url:'http://m.tjyqxs.com/',
        img_src:'/public/upload/cooperator/logo-tianjinyiqi.png',
      },{
        name:'奇瑞',
        url:'http://www.chery.cn/',
        img_src:'/public/upload/cooperator/logo-qirui.png',
      },
    ],
};
/**
 * 主营业务
 * 修理厂
 * 配件中心仓
 * 车社会平台
 * 4S店
 * 物流配送
 * 汽配门店
 */
const buss = {
    /**
     * total:主营业务数量,number, 可选
     */
    total:4,
    /**
     * 主营业务的对象属性
     * bg_img_src:业务图片地址,字符串,必须
     * title:业务名称,字符串,必须
     * detail:业务简介,字符串,可选
     * url:业务链接,字符串,可选
     */
    attr:['bg_img_src', 'title', 'detail', 'url'],
    /**
     * title:名称,字符串,可选
     */
    title:'经营业务 / Business',
    /**
     * url:链接,字符串,可选
     */
    url:{href:'javascript:;',target:''},
    data:[
        {
            bg_img_src : '/public/upload/commen/yewu.png',
            title:'配件中心仓',
            detail:'科学化设计,合理化布局,最大化地利用仓库面积,减少成本,大大提高运营效率',
            url:{href:'javascript:;', target:''},
            style:'background-position-y: -60px;'
        },{
            bg_img_src : '/public/upload/commen/yewu.png',
            title:'修理厂',
            detail:'修理汽车,换装总成、组合件、零部件,合理可持续利用汽配资源',
            url:{href:'javascript:;', target:''},
            style:'background-position-y: 0px;'
        },{
            bg_img_src : '/public/upload/commen/yewu.png',
            title:'车社会平台',
            detail:'依托丰富的行业服务经验和经营实力，实现传统优势与互联网技术的深度融合，打造“诚信汽车零配件综合服务平台”。',
            url:{href:'javascript:;', target:''},
            style:'background-position-y: -120px;'
        },{
            bg_img_src : '/public/upload/commen/yewu.png',
            title:'4S店',
            detail:'集汽车销售、维修、配件和信息服务为一体,提供更加专业的技术支持和售后服务',
            url:{href:'javascript:;', target:''},
            style:'background-position-y: -180px;'
        },{
            bg_img_src : '/public/upload/commen/yewu.png',
            title:'物流配送',
            detail:'合理化利用物流资源,提供专业、全面完善的物流配送服务',
            url:{href:'javascript:;', target:''},
            style:'background-position-y: -240px;'
        },{
            bg_img_src : '/public/upload/commen/yewu.png',
            title:'汽配门店',
            detail:'以极高的热情,极强的责任心,科学化经营,非常广度的覆盖率',
            url:{href:'javascript:;', target:''},
            style:'background-position-y: -300px;'
        },
        ]
};


/**
 * 首页轮播模块
 */
let carcousel = {
    /**
     * total:轮播项数量,number,可选
     */
    total:2,
    /**
     * 轮播项属性
     * itemImgSrc:背景大图的地址,字符串,必须
     * bannerTitle:轮播项的大标题,字符串,可选
     * bannerDetail:轮播项的简单描述,字符串,可选,通常与bannerTitle配合使用
     * url:链接,字符串,可选
     */
    attr:['itemImgSrc', 'bannerTitle', 'bannerDetail', 'url'],
    /**
     * title:名称,字符串,可选
     */
    title:'轮播',
    /**
     * url:链接,字符串,可选
     */
    url:{href:'javascript:;',target:''},
    data:[
        {
            itemImgSrc:'/public/upload/banner/20170330/dongzhi1.jpg',
            url:{href:'/aboutxc',target:'_blank'},
            // bannerTitle:'杭州协创实业有限公司',
            // bannerDetail:'汽车备件仓储管理，物流配送服务，汽车备件信息技术服务'
        },{
            itemImgSrc:'/public/upload/banner/20170330/cangchu.png',
            url:{href:'/aboutxc',target:'_blank'},
            // bannerTitle:'杭州协创实业有限公司',
            // bannerDetail:'汽车备件仓储管理，物流配送服务，汽车备件信息技术服务'
        },{
            itemImgSrc:'/public/upload/banner/20170330/cheshehui.png',
            url:{href:'/aboutxc',target:'_blank'},
            // bannerTitle:'杭州协创实业有限公司',
            // bannerDetail:'汽车备件仓储管理，物流配送服务，汽车备件信息技术服务'
        },{
            itemImgSrc:'/public/upload/banner/20170330/haima.png',
            url:{href:'/aboutxc',target:'_blank'},
            // bannerTitle:'杭州协创实业有限公司',
            // bannerDetail:'汽车备件仓储管理，物流配送服务，汽车备件信息技术服务'
        },{
            itemImgSrc:'/public/upload/banner/20170330/licheng.png',
            url:{href:'/aboutxc',target:'_blank'},
            // bannerTitle:'杭州协创实业有限公司',
            // bannerDetail:'汽车备件仓储管理，物流配送服务，汽车备件信息技术服务'
        }
    ],
};

/**
 * 文章分类模块
 */
let catos = [
    ['news', '最新动态'],
    ['otherNews', '行业动态'],
    ['commonSence', '汽车知识']
];
let newsOrigin = [
    [0, '原创', ''],
    [1, '转载', ''],
];
/**
 * 导航模块
 */
let navs = {
    /**
     * 导航模块的属性
     * id:导航项的id,number,必须
     * name:导航项的名称,字符串,必须
     * url:导航项的链接,字符串,必须,默认:javascript:;
     * target:导航项的打开方式,字符串,必须,默认:''
     * children:子导航项,array,字符串,可选
     */
    attr:['id', 'name', 'url', 'target'],
    /**
     * title:名称,字符串,可选
     */
    title:'导航',
    /**
     * url:链接,字符串,可选
     */
    url:{href:'javascript:;',target:''},
    data:[
        {name:'首页',url:{href:'/',target:''},},
        {
            name:'企业动态',url:{href:'javascript:;',target:''},children:[
                {name:catos[0][1],url:{href:'/news/'+catos[0][0]+'/1',target:''},},
                {name:catos[1][1],url:{href:'/news/'+catos[1][0]+'/1',target:''},},
                {name:catos[2][1],url:{href:'/news/'+catos[2][0]+'/1',target:''},},
            ],
        },
        {
            name:'关于协创',url:{href:'javascript:;',target:''},children:[
                {name:'公司简介',url:{href:'/aboutxc',target:''},},
            ],
        },
        {
            name:'联系我们',url:{href:'javascript:;',target:''},children:[
                {name:'联系协创',url:{href:'/contact',target:''}},
            ]
        },
        {name:'员工风采',url:{href:'/staff/1',target:''},},
        {name:'诚聘英才',url:{href:'/joinus',target:''}},
        {
            name:'官网商城',url:{href:'http://carsociety.cn/',target:'_blank'},
        }
    ],
};

/**
 * 仓库模块
 */
let cangku = {
    /**
     * total:仓库模块的数量,number,可选
     */
    total:1,
    /**
     * 仓库模块属性:
     * name:仓库名称,字符串,必须
     * address:仓库地址,字符串,必须
     * phone:仓库联系电话,字符串,可选
     * email:仓库电子邮箱,字符串,可选
     */
    attr:['name','address', 'phone', 'email'],
    /**
     * title:名称,字符串,可选
     */
    title:'仓库',
    /**
     * url:链接,字符串,可选
     */
    url:{href:'javascript:;',target:''},
    data:[
        // {name:'杭州协创实业有限公司', address:'地址：浙江省杭州市拱墅区花园岗路113号金通国际大厦A座9F',
        // phone:'联系电话：400-827-3666', email:'电子邮箱：hangzhouxcsy@126.com'},
        {
            name:'天津仓配中心',
            serviceArea:'服务区域:京津冀,内蒙古自治区,辽宁省,吉林省,黑龙江省',
            address:'',
            phone:'',
            email:''
        },
        {
            name:'山东仓配中心',
            serviceArea:'服务区域:山东省,安徽省,江苏省,浙江省,上海市',
            address:'',
            phone:'',
            email:''
        },
        {
            name:'山西仓配中心',
            address:'',
            serviceArea:'服务区域:山西省',
            phone:'',
            email:''
        },
        {
            name:'杭州仓配中心',
            address:'',
            serviceArea:'服务区域:上海市,山东省,江苏省,安徽省,江西省,浙江省,福建省',
            phone:'',
            email:''
        },
        {
            name:'广州仓配中心',
            address:'',
            serviceArea:'服务区域:广东省,广西壮族自治区,海南省',
            phone:'',
            email:''
        },
        {
            name:'石家庄仓配中心',
            serviceArea:'服务区域:京津冀',
            address:'',
            phone:'',
            email:''
        },
        // {name:'杭州协创实业有限公司', address:'地址：浙江省杭州市拱墅区花园岗路113号金通国际大厦A座9F',
        // phone:'联系电话：400-827-3666', email:'电子邮箱：hangzhouxcsy@126.com'},
        // {name:'杭州协创实业有限公司', address:'地址：浙江省杭州市拱墅区花园岗路113号金通国际大厦A座9F',
        // phone:'联系电话：400-827-3666', email:'电子邮箱：hangzhouxcsy@126.com'},
    ]
};

/**
 * 友情链接
 */
let friendLink={
    /**
     * total:友情链接数量,number,可选
     */
    total:8,
    /**
     * 友情链接属性
     * name:名称,字符串,必须
     * url:链接网址,字符串,必须
     * target:链接打开方式,字符串,可选,默认_blank
     */
    atrr:['name','url','target',],
    /**
     * title:名称,字符串,可选
     */
    title:'友情链接',
    /**
     * url:链接,字符串,可选
     */
    url:{href:'javascript:;',target:''},
    data:[
        {name:'汽车之家', url:{href:'http://www.autohome.com.cn/hangzhou/', target:'_blank'}},
        {name:'用车知识', url:{href:'http://yongche.16888.com/', target:'_blank'}},
        {name:'盖世汽车', url:{href:'http://cn.gasgoo.com/', target:'_blank'}},
        {name:'车社会', url:{href:'http://carsociety.cn/', target:'_blank'}},
        {name:'汽车维修配件工作委员会', url:{href:'http://www.camra-pjgw.org.cn/', target:'_blank'}},
        
        {name:'中国汽车技术研究中心', url:{href:'http://www.catarc.ac.cn/', target:'_blank'}},
        // {name:'汽车之家', url:{href:'http://www.autohome.com.cn/hangzhou/', target:'_blank'}},
        // {name:'汽车之家', url:{href:'http://www.autohome.com.cn/hangzhou/', target:'_blank'}},
    ],
};

/**
 * 二维码信息
 */
let qrCode = {
    /**
     * total:二维码数量,number,可选
     */
    total:2,
    /**
     * 二维码的属性
     * name:名称,字符串,必须
     * imgSrc:二维码图片路径,字符串,必须
     * title:二维码标题,字符串,可选
     */
    attr:['name', 'imgSrc', 'title'],
    /**
     * title:名称,字符串,可选
     */
    title:'二维码信息',
    /**
     * url:链接,字符串,可选
     */
    url:{href:'javascript:;',target:''},
    data:{
        csh:{name:'csh', imgSrc:'/public/upload/commen/csh_weixin_516.jpg', title:'车社会公众号'},
        xc:{name:'xc', imgSrc:'/public/upload/commen/xc_weixin_258.jpg', title:'协创公众号'}
    }
}

let shopList = {
    total:20,
    attr:['title', 'url', 'src'],
    title:'车社会 / Shopping',
    data:[
        {title:'车社会...',url:{href:'http://carsociety.cn/', target:'_blank'} ,src:'/public/upload/cheshehui/1857.jpg'},
        {title:'车社会...',url:{href:'http://carsociety.cn/', target:'_blank'} ,src:'/public/upload/cheshehui/1863.jpg'},
        {title:'车社会...',url:{href:'http://carsociety.cn/', target:'_blank'} ,src:'/public/upload/cheshehui/2128.jpg'},
        {title:'车社会...',url:{href:'http://carsociety.cn/', target:'_blank'} ,src:'/public/upload/cheshehui/390.JPG'},
        {title:'车社会...',url:{href:'http://carsociety.cn/', target:'_blank'} ,src:'/public/upload/cheshehui/686.JPG'},
        {title:'车社会...',url:{href:'http://carsociety.cn/', target:'_blank'} ,src:'/public/upload/cheshehui/765.JPG'},
        {title:'车社会...',url:{href:'http://carsociety.cn/', target:'_blank'} ,src:'/public/upload/cheshehui/772.JPG'},
        {title:'车社会...',url:{href:'http://carsociety.cn/', target:'_blank'} ,src:'/public/upload/cheshehui/855.JPG'},
        {title:'车社会...',url:{href:'http://carsociety.cn/', target:'_blank'} ,src:'/public/upload/cheshehui/870.jpg'},
        {title:'车社会...',url:{href:'http://carsociety.cn/', target:'_blank'} ,src:'/public/upload/cheshehui/877.jpg'},
        {title:'车社会...',url:{href:'http://carsociety.cn/', target:'_blank'} ,src:'/public/upload/cheshehui/913.jpg'},
        {title:'车社会...',url:{href:'http://carsociety.cn/', target:'_blank'} ,src:'/public/upload/cheshehui/914.jpg'},
        {title:'车社会...',url:{href:'http://carsociety.cn/', target:'_blank'} ,src:'/public/upload/cheshehui/949.jpg'},
        {title:'车社会...',url:{href:'http://carsociety.cn/', target:'_blank'} ,src:'/public/upload/cheshehui/机油泵.jpg'},
        {title:'车社会...',url:{href:'http://carsociety.cn/', target:'_blank'} ,src:'/public/upload/cheshehui/油1.JPG'},
        {title:'车社会...',url:{href:'http://carsociety.cn/', target:'_blank'} ,src:'/public/upload/cheshehui/油2.JPG'},
        {title:'车社会...',url:{href:'http://carsociety.cn/', target:'_blank'} ,src:'/public/upload/cheshehui/油3.JPG'},
        {title:'车社会...',url:{href:'http://carsociety.cn/', target:'_blank'} ,src:'/public/upload/cheshehui/油5.JPG'},
        {title:'车社会...',url:{href:'http://carsociety.cn/', target:'_blank'} ,src:'/public/upload/cheshehui/油6.JPG'},
        {title:'车社会...',url:{href:'http://carsociety.cn/', target:'_blank'} ,src:'/public/upload/cheshehui/油7.JPG'},
        
    ]
}

const globalList = {
    //头部背景图
    headBgImg : '/public/upload/banner/commen/dongzhi.jpg',
    //全局背景图
    globalBgImg :'',
}

/**
 * 
 */
let list = {
    buss:buss,
    navs:navs,
    catos:catos,
    cangku:cangku,
    qrCode:qrCode,
    shopList:shopList,
    carcousel:carcousel,
    newsOrigin:newsOrigin,
    cooperator:cooperator,
    friendLink:friendLink,
    globalList:globalList,
};

module.exports = (item) => {
    return list[item] || {};
};