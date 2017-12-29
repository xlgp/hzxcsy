let index = 1;
module.exports = { 
    /**
     * 静态资源服务器
     * 
     */
    STATIC_HOST:['http://static.xlgp.xc', 'http://static.hzxcsy.com.cn', ''][index],
    //环境
    env:['development', 'production'][index],
    XC:{
        //网站名称
        GLOBAL_TITLE : '杭州协创实业有限公司',
        //网站Logo
        LOGO_IMG:'/public/upload/commen/logoL.png',
        TELL_IMG:'/public/upload/commen/logoR.png',
        //公司邮箱
        EMAIL:'hangzhouxcsy@126.com',
        //公司电话
        CELL:'400-827-3666',
        //公司地址
        ADDRESS:'浙江省杭州市拱墅区花园岗路113号金通国际大厦A座9F',
        //网站ICP
        ICP:'<a href="http://www.miitbeian.gov.cn" target="_blank">浙ICP备17017268号-1</a>',
    },
    port:8888,
    //session
    session:{
        key:'xc_session',
        secret:'_tuDFELNf$fdkD#',
        maxAge:1000*1800,
    },
    mongodb:{
        url:'mongodb://localhost:27017/hzxcsydb',
    },
    redis:{
        port:6379,
        host:'127.0.0.1',
    },
    user:{
        username:'hzxcsy',
        password:'h2xc59'
    },
    /**
     * 图片上传路径
     */
    uploadDirList : {
        //员工相册的图片路径
        gallery:'./public/upload/gallery',
        //系统banner的图片路径
        banner:'./public/upload/banner',
        //系统基本信息所需的图片路径
        commen:'./public/upload/commen',
        //合作者，即服务品牌的图片路径
        cooperator:'./public/upload/cooperator',
        //新闻的图片路径
        news:'./public/upload/news',
        //车社会商品图路径
        cheshehui:'./public/upload/cheshehui',
        //其他的的图片路径
        other:'./public/upload/other',
        
    },

    limitArticlePageSize:8,
    limitArticleSmallPageSize:3,
    limitStaffPageSize:9,

}


