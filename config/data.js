/**
 * 合作伙伴
 */
const cooperators = {
    total:7,
    attr:['name', 'url', 'img_src'],
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
 * 经营业务
 */
const buss = {
    total:4,
    attr:['bg_img_src', 'title', 'detail'],
    data:[
        {
            bg_img_src : '/public/upload/commen/122_300_225.jpg',
            title:'配件仓储与配送',
            detail:'提供高效的物流配送服务',
        },{
            bg_img_src : '/public/upload/commen/4S.jpg',
            title:'4S店',
            detail:'集汽车销售、维修、配件和信息服务为一体',
        },{
            bg_img_src : '/public/upload/commen/xiulichang_300_225.jpg',
            title:'修理厂',
            detail:'先进的维修服务理念，满足维修企业和车主对于高水平汽车维修服务的要求',
        },{
            bg_img_src : '/public/upload/commen/wangluoyingxiao_300_225.jpg',
            title:'网络销售平台',
            detail:'我们依托丰富的行业服务经验和经营实力，实现传统优势与互联网技术的深度融合，打造“诚信汽车零配件综合服务平台”。',
        }
        ]
};
/**
 * 资讯摘要
 */
let news = {
    total:3,
    attr:['id', 'title', 'summary', 'createTime' ,'itemImg', 'url'],
    data:[
        {
            id:1,
            pv:0,
            status:0,
            catoId:2,
            user:'admin',
            url:'/article/'+1,
            createTime:'2017-07-26 10:32:41',
            // catoId:'59b780a518affa79112cd9f1',
            itemImgSrc:'/public/upload/new/20160216/20160216105034_6.jpg',
            title:'2015第二届AP论坛会在杭举行',
            summary:'自2014年11月由中国汽车维修行业协会汽车维修配件工作委员会汽车维修配件工委会、杭州市机动车配件经销行业协会联合主办，杭州神辇汽车服务有限公司承办的被誉为主机厂“华山论剑”的AP论坛|2014首届汽车零部件创新营销与服务高峰研讨会成功举办后，伴随着国家对汽车后市场的不断规范，各项革命性的政策出台，以及2015年各类汽配电商风起云涌，加上同质件的加快推进，各大主机厂及配套服务企业积极关注着后市场的演变。',
            content:'<p style="text-align:left;text-indent:24pt;" align="left"><span style="line-height:150%;font-family:宋体;font-size:12pt;">自</span><span style="line-height: 150%; font-family:;" tahoma","sans-serif";font-size:12pt;"="">2014</span><span style="line-height:150%;font-family:宋体;font-size:12pt;">年</span><span style="line-height: 150%; font-family:;" tahoma","sans-serif";font-size:12pt;"="">11</span><span style="line-height:150%;font-family:宋体;font-size:12pt;">月由中国汽车维修行业协会汽车维修配件工作委员会汽车维修配件工委会、杭州市机动车配件经销行业协会联合主办，杭州神辇汽车服务有限公司承办的被誉为主机厂“华山论剑”的</span><span style="line-height: 150%; font-family:;" tahoma","sans-serif";font-size:12pt;"="">AP</span><span style="line-height:150%;font-family:宋体;font-size:12pt;">论坛</span><span style="line-height: 150%; font-family:;" tahoma","sans-serif";font-size:12pt;"="">|2014</span><span style="line-height:150%;font-family:宋体;font-size:12pt;">首届汽车零部件创新营销与服务高峰研讨会成功举办后，伴随着国家对汽车后市场的不断规范，各项革命性的政策出台，以及</span><span style="line-height: 150%; font-family:;" tahoma","sans-serif";font-size:12pt;"="">2015</span><span style="line-height:150%;font-family:宋体;font-size:12pt;">年各类汽配电商风起云涌，加上同质件的加快推进，各大主机厂及配套服务企业积极关注着后市场的演变。为此由杭州神辇汽车服务有限公司历时一个月的准备于</span><span style="line-height: 150%; font-family:;" tahoma","sans-serif";font-size:12pt;"="">2015</span><span style="line-height:150%;font-family:宋体;font-size:12pt;">年</span><span style="line-height: 150%; font-family:;" tahoma","sans-serif";font-size:12pt;"="">11</span><span style="line-height:150%;font-family:宋体;font-size:12pt;">月</span><span style="line-height: 150%; font-family:;" tahoma","sans-serif";font-size:12pt;"="">26</span><span style="line-height:150%;font-family:宋体;font-size:12pt;">日在杭州广银大酒店举办</span><span style="line-height: 150%; font-family:;" tahoma","sans-serif";font-size:12pt;"="">AP</span><span style="line-height:150%;font-family:宋体;font-size:12pt;">论坛</span><span style="line-height: 150%; font-family:;" tahoma","sans-serif";font-size:12pt;"="">|2015</span><span style="line-height:150%;font-family:宋体;font-size:12pt;">第二届汽车零部件创新营销与服务高峰研讨会。</span><span style="line-height: 150%; font-family:;" tahoma","sans-serif";font-size:9pt;"=""> </span> </p><p><img alt="" src="http://static.hzxcsy.com.cn/public/upload/new/20160216/20160216105034_6.jpg" class="img-responsive" style="width: 100%;max-height: 450px;"></p><p style="text-align:left;text-indent:24pt;" align="left"><span style="line-height:150%;font-family:宋体;font-size:12pt;">在本次研讨会上邀请了汽车维修配件工委会魏同伟秘书长、杭州市机动车服务管理局配件经销管理处长，杭州市机动车配件经销行业协会秘书长俞凌枫、以及东南、海马、吉利、江淮、长安、天津一汽、奇瑞、长安铃木、力帆、东风风行、北汽幻速、郑州海马、长城、众泰等十余家主机厂配件部相关负责人，同时也邀请了中银保险有限公司浙江分公司、中国人保浙江分公司和云计算大数据研究中心的相关负责人悉数到场参会。大会也得到了都市快报、今日早报等多家媒体支持，其中《聚汽观察》杂志作为特约媒体参加了此会。大会由杭州神辇汽车服务有限公司运营总监俞日飞主持。 </span> </p><p style="text-align:left;text-indent:24pt;" align="left"><span style="line-height:150%;font-family:宋体;font-size:12pt;">研讨会首先由汽车维修配件工委会魏同伟秘书长致辞，同时为参会来宾解读《汽车维修技术信息公开实施管理办法》的详细内容并讲解了新政提出的汽车维修“同质配件”对相关车企和经销商而言，冲击难以避免，整个中国汽车产业格局将现重大变化，但旨在打造一批新形势下有规模、有实力、品牌化的企业。让车主能明明白白选择原厂件、同质件以及再制造件，不再受到假冒劣质件的伤害。云计算大数据研究中心的副主任李万清副教授为来宾做了大数据时代下的产业分析与运用的专题演讲，使来宾们更加清晰的认识到了大数据的价值。</span> </p><p style="text-align:left;text-indent:24pt;" align="left"><span style="line-height:150%;font-family:宋体;font-size:12pt;">随着互联网金融的发展，商业车险也在不断创新和改革，中国银行旗下中银保险浙江分公司车险部刘哲部长与大家分享了商业车险改革对汽车后市场的影响，受到极大关注。 </span> </p><p style="text-align:left;text-indent:24pt;" align="left"><span style="line-height:150%;font-family:宋体;font-size:12pt;">当前我们面临的是一个大变革时代，汽车流通业面临着前所未有的挑战，模式创新将成为未来十年渠道变革的核心内容。杭州市机动车服务管理局配件经销管理处长，杭州市机动车配件经销行业协会秘书长俞凌枫结合集多年负责汽车维修，如今负责配件经销，对汽车流通、汽配电商及汽配仓储销售有独到的见解。她在讲话中着重强调，汽车整车要创新发展好，重拳放在售后服务，做好配件销售新模式；联盟的企业要做大做强更要注重人与人之间的合作；电商<span>O2O</span>发展一定要结合实体经济才能有未来。 </span> </p><p style="text-align:left;text-indent:24pt;" align="left"><span style="line-height:150%;font-family:宋体;font-size:12pt;">“整车企业近几年来面临极大的挑战，整车配件在面对新政打破垄断时，也是爱恨交加，有冲击也有做大的机会”，奇瑞汽车原副总经理、销售公司总经理马德骥讲道，“主机厂配件企业要在市场上有更好的发展，不仅要结合各地的配件中心库做大，还要结合一个区别于现有的电商平台，要有原厂件清晰定位的电商，这样才能结合物流的集成而配送。” </span> </p><p style="text-align:left;text-indent:24pt;" align="left"><span style="line-height:150%;font-family:宋体;font-size:12pt;">众所周知，汽车俨然成为人们出行和商业活动中主要的交通工具，汽车的安全行驶越来越成为人们关注的焦点。对于汽车零部件的先用，在人们心目中第一首选的是原厂配件，然而市场却总遇到<span>4S</span>店恶意高价以及以配件市场上假乱真的趋利商贩，让车主们感觉急需解决的难题。如果能有一个专业提供原厂配件销售，并且价格合理的电商平台，无疑成为车主们一大福音。 </span> </p><p style="text-align:left;text-indent:24pt;" align="left"><span style="line-height:150%;font-family:宋体;font-size:12pt;">在本次研讨会上，记者欣喜见证了由杭州神辇汽车服务有限公司创立的汽车原厂配件垂直营销平台——“车社会”的上线，“车社会”首席<span>CEO</span>俞日飞讲到，“车社会”平台由线下成立于<span>2000</span>年，主要从事整车销售、零部件销售、售后维修和仓储服务的杭州神辇汽车服务有限公司重资创立的，目前杭州神辇与国内<span>10</span>余家汽车生产厂商建立了长期稳定的合作关系，在杭州、天津、山东和广东四地分别设有零部件仓储配送基地，总仓面积达<span>10</span>万平米，服务范围覆盖全国<span>20</span>个省市。“车社会”是由一批在汽车零部件、汽车维修、互联网领域、营销和管理方面的专家，历经一年的时间打造而成，现已上线。“车社会”将平台上各车型的信息精准地投入到各车型的车主，车主根据他的爱车，通过“车社会”平台可以选择质优实价的原厂配件，同时可以选择平台上所推荐可信赖的汽修厂进行安装服务。俞日飞还讲到，“车社会”将先从杭州运行，<span>2016</span>年将会覆盖全浙江省，同时向神辇公司所有仓储的省市开展。 </span> </p><p style="text-align:left;text-indent:24pt;" align="left"><span style="line-height:150%;font-family:宋体;font-size:12pt;">正如一汽海马汽车配件销售部周丽平部长所言，“车社会”平台的上线集原厂件<span>+</span>车型大数据<span>+</span>线上平台<span>+</span>仓储配送，这是一个非常有竞争力的平台，倘若我刚好在这几个区域城市，我车子的零部件一定会通过这个平台实现下单的；对于一汽海马来讲，我们非常看好这个平台！” </span> </p><p style="text-align:left;text-indent:24pt;" align="left"><span style="line-height:150%;font-family:宋体;font-size:12pt;">在圆桌会谈上，吉利备件销售部陈康部长、江淮汽车配件部相关负责人沈珩、互联网运营专家、神辇技术副总监张雪峰博士、郑州海马配件部部长曹双丽、力帆汽车配件部部长吴志航、中银保险浙江分公司业务三部韩宁部长、众泰汽车配件部田西玲等人分别就同质件、车险、互联网、汽配电商提出了相应的问题和自己的观点，同时汽车维修配件工委会魏同伟秘书长、杭州市机动车服务管理局配件经销管理处长，杭州市机动车配件经销行业协会秘书长俞凌枫分别就相关问题做了详细解答。 </span> </p><p style="text-align:left;text-indent:24pt;" align="left"><span style="line-height:150%;font-family:宋体;font-size:12pt;">参会嘉宾纷纷表示本次研讨会开的非常成功，收获很多并期待第三届再次相聚杭州进行“华山论剑”，研讨会在合影中拉下了帷幕。 </span> </p>'
        },{
            id:2,
            pv:0,
            status:0,
            catoId:1,
            user:'admin',
            url:'/article/'+2,
            createTime:'2017-07-26 10:32:41',
            // catoId:'59b780a518affa79112cd9f1',
            itemImgSrc:'/public/upload/new/20170726/201707261039494617.jpeg',
            title:'杭州协创实业有限公司与海马汽车签署战略合作协议',
            summary:'金秋是收获的季节。在这样一个收获的美好季节里，'+
                    '杭州协创实业有限公司与海马汽车于2016年11月20日在郑州签署战略合作协议，'+
                    '正式建立在汽车配件仓储及物流配送等领域全面深化战略合作伙伴关系。',
            content:'<p><img class="img-responsive" style="width: 100%;max-height: 450px;" src="http://static.hzxcsy.com.cn/public/upload/new/20170726/201707261039494617.jpeg"></p><p><span style="line-height: 150%; text-indent: 24px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;金秋是收获的季节。在这样一个收获的美好季节里，杭州协创实业有限公司与海马汽车于2016年11月20日在郑州签署战略合作协议，正式建立在汽车配件仓储及物流配送等领域全面深化战略合作伙伴关系。</span></p><p style="margin-top:10px;margin-bottom:10px;text-indent:24px;line-height:150%">&nbsp;杭州协创实业有限公司是一家专业为各主机厂提供备件区域的仓储与物流供应保障服务的公司，目前在全国已形成4个项目基地，仓库面积近15万㎡，年备件配送出库量近10亿元，所辐射的省份已有17个，主要服务品牌包括一汽海马、奇瑞汽车、长安铃木、力帆汽车、天津一汽、福田、东风股份、北汽幻速等。公司拥有专业的仓储及物流团队近300余人，有着丰富的汽车备件仓储和物流管理经验。</p><p style="margin-top:10px;margin-bottom:10px;text-indent:24px;line-height:150%">海马汽车作为国内最早的汽车企业之一，2007年，海马布局中原，设立海马汽车销售有限公司。主要生产海马S5、海马M6、海马M3等车型。目前已建立起比较完善的配套体系、销售体系和物流体系。</p><p style="margin-top:10px;margin-bottom:10px;text-indent:24px;line-height:150%"><span style="line-height: 150%;"> &nbsp;两家公司开展全面合作，对于充分发挥双方的技术和资源优势，提高华南区域汽车配件配送服务水平，增强双方核心竞争力具有重要意义，最终实现协同发展、和谐共赢。</span><br></p>'
        },
        {
            id:3,
            pv:0,
            status:0,
            catoId:1,
            user:'admin',
            url:'/article/'+3,
            createTime:'2017-07-26 10:32:41',
            catoId:'59b780a518affa79112cd9f1',
            itemImgSrc:'/public/upload/new/20170502/1.jpg',
            title:'杭州神辇网络科技有限公司荣升新一届中国汽车维修工委会副主任单位',
            summary:'2016年秋，杭州神辇网络科技有限公司，成为新一届中国汽车维修行业协会配件工委会（下称“汽车维修工委会”）的副主任委员单位。我司打造的“车社会”一站式服务中心作为首家加入汽车维修工委会的从事汽车原厂配件垂直营销平台及一站式服务中心的公司，拥有强大的后台管理、专业的咨询服务以及完善的业务流程。',
            content:'<p style="">车社会-汽车后市场服务平台 网址：www.carsociety.cn</p><p style="text-align: center;"><img class="img-responsive" style="width: 100%; max-height: 450px;" src="http://static.hzxcsy.com.cn/public/upload/new/20170502/1.jpg"><br></p><p style=""><br></p><p style=" text-indent: 32px; line-height: 24px;"><span style="  line-height: 24px;">201</span><span style="  line-height: 24px;">6</span><span style="  line-height: 24px;">年</span><span style="  line-height: 24px;">秋</span><span style="  line-height: 24px;">，杭州神辇</span><span style="  line-height: 24px;">网络科技</span><span style="  line-height: 24px;">有限公司，成为</span><span style="  line-height: 24px;">新一届</span><span style=" line-height: 24px; ">中国汽车维修行业协会配件工委会</span><span style="  line-height: 24px;">（下称</span><span style="  line-height: 24px;">“汽车维修工委会”）的副主任委员单位。汽车工委会的副主任委员单位还有长春华众离合器有限公司、国美控股集团有限公司、华维泰（北京）汽车零部件有限公司、华汽投资控股有限公司等</span><span style=" line-height: 24px; font-family: Calibri;">10</span><span style="  line-height: 24px;">余家单位。</span></p><p style="line-height: 24px;text-align: center;"><span style="  line-height: 24px;"><img class="img-responsive" style="width: 100%;max-height: 450px;" src="http://static.hzxcsy.com.cn/public/upload/new/20170502/640.jpeg"><br></span></p><p style=" text-indent: 29px; line-height: 24px;"><span style="  "><span style="">杭州神辇网络科技有限公司打造的</span>“车社会”一站式服务中心</span><span style=" "><span style=" ">作为</span></span><span style="  "><span style="">首</span></span><span style=" "><span style=" ">家加入</span></span><span style="  "><span style="">汽车</span></span><span style=" "><span style=" ">维修工委会的从事</span></span><span style="  "><span style="">汽车</span></span><span style=" "><span style=" ">原厂配件垂直营销平台</span></span><span style="  "><span style="">及一站式服务中心</span></span><span style=" "><span style=" ">的</span></span><span style="  "><span style="">公司</span></span><span style=" "><span style=" ">，拥有强大的后台管理、专业的咨询服务以及完善的业务流程。</span></span><span style="  ">“车社会”汽车</span><span style=" "><span style=" ">原厂配件垂直营销平台</span></span><span style="  "><span style="">将各车型的信息精准地投入到</span></span><span style="  "><span style="">汽车终端客户</span></span><span style="  "><span style="">中</span></span><span style="  "><span style="">。汽车终端客户</span></span><span style="  "><span style="">根据自己的爱车，通过</span>“车社会”汽车</span><span style=" "><span style=" ">原厂配件垂直营销平台</span></span><span style="  "><span style="">可以选择质优实价的原厂配件，同时还可以选择</span></span><span style="  ">“车社会”一站式服务中心</span><span style="  "><span style="">为</span></span><span style="  "><span style="">汽车终端客户</span></span><span style="  "><span style="">进行安装</span></span><span style="  "><span style="">、维修保养等</span></span><span style="  "><span style="">服务。</span></span></p><p style=""><br></p>'
        },
    ]
};
let carcousels = {
    total:2,
    attr:['itemImgSrc', 'bannerTitle', 'bannerDetail'],
    data:[
        {
            itemImgSrc:'/public/upload/banner/20170330/1.jpg',
            bannerTitle:'杭州协创实业有限公司',
            bannerDetail:'汽车备件仓储管理，物流配送服务，汽车备件信息技术服务'
        },{
            itemImgSrc:'/public/upload/banner/20170330/2.jpg',
            bannerTitle:'网络销售平台',
            bannerDetail:'诚信汽车零配件综合服务平台'
        },        
    ],
};

let staffs = {

};
let navs = {
    // total:1,
    attr:['id', 'name', 'url', 'target'],
    data:[
        {
            id:1,name:'企业动态',url:'javascript:;',target:'',children:[
                {id:11,name:'最新动态',url:'/news/1/1',target:'',},
                {id:12,name:'行业动态',url:'/news/2/1',target:'',},
            ],
        },
        {
            id:2,name:'关于协创',url:'javascript:;',target:'',children:[
                {id:21,name:'公司简介',url:'/aboutxc',target:'',},
                {id:22,name:'员工风采',url:'/staff/1',target:'',},
            ],
        },
        {
            id:3,name:'联系我们',url:'javascript:;',target:'',children:[
                {id:31,name:'联系协创',url:'/contact',target:''},
                {id:32,name:'诚聘英才',url:'/joinus',target:''}
            ]
        },
        {
            id:4,name:'官网商城',url:'http://carsociety.cn/',target:'_blank',
        }
    ],
};

let cangku = {
    total:1,
    attr:[],
    data:[
        {name:'杭州协创实业有限公司', address:'地址：浙江省杭州市拱墅区花园岗路113号金通国际大厦A座9F',
        phone:'联系电话：400-827-3666', email:'电子邮箱：hangzhouxcsy@126.com'},
        // {name:'杭州协创实业有限公司', address:'地址：浙江省杭州市拱墅区花园岗路113号金通国际大厦A座9F',
        // phone:'联系电话：400-827-3666', email:'电子邮箱：hangzhouxcsy@126.com'},
        // {name:'杭州协创实业有限公司', address:'地址：浙江省杭州市拱墅区花园岗路113号金通国际大厦A座9F',
        // phone:'联系电话：400-827-3666', email:'电子邮箱：hangzhouxcsy@126.com'},
    ]
};

module.exports = {
    cooperators:cooperators,
    carcousels:carcousels,
    cangku:cangku,
    buss:buss,
    news:news,
    navs:navs,
};