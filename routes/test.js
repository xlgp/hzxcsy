var express = require('express'),
    router = express.Router(),
    MongoClient = require('mongodb').MongoClient,
    config = require('../config/config'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    assert = require('assert');

// const mongodbUri = 'mongodb://hzxc:hzxc@xccluster-shard-00-00-qg4wa.mongodb.net:27017,xccluster-shard-00-01-qg4wa.mongodb.net:27017,xccluster-shard-00-02-qg4wa.mongodb.net:27017/test?ssl=true&replicaSet=XCCluster-shard-0&authSource=admin';

var url = 'mongodb://localhost:27017/hzxcsytest';

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//   // insertNews(db, (result) => {
//   //   console.dir(result);
//   //   db.close();
//   // });
  
// });
var navsSchema = new Schema({
  id:Number,
  name:{type:String, required:true},
  url:{type:String, default:'javascript:;'},
  target:String,
  status:{type:Number, default:0},
  date: { type: Date, default: Date.now },
  children:[
      {id:Number,
      name:{type:String, required:true},
      url:{type:String, default:'javascript:;'},
      status:{type:Number, default:0},
      date: { type: Date, default: Date.now },
      target:String,
  }],
  
});

var NavsModel = mongoose.model('navs', navsSchema);

// mongoose.connect(config.mongodb.url, {
//   useMongoClient: true,
// });
// var db = mongoose.connection;

// // console.log(db);
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', (callback) => {
  
//   NavsModel.find((err, result) => {
//     if(err){
//       console.log(err);
//       return;
//     }
//     console.log(result[0].children);
//   });
  
// });





// Navs.find((err, result) => {
//     console.log(result);
// });

// var insertNews = function(db, callback) {
//   // Get the documents collection
//   var collection = db.collection('news');
//   // Insert some documents
//   collection.insertMany([
//     {
//       id:1,
//       pv:0,
//       status:0,
//       user:'admin',
//       url:'/article/1',
//       catoId:'59b780a518affa79112cd9f1',
//       createTime:'2017-07-26 10:32:41',
//       itemImgSrc:'/upload/new/20170726/201707261039494617.jpeg',
//       title:'杭州协创实业有限公司与海马汽车签署战略合作协议',
//       summary:'金秋是收获的季节。在这样一个收获的美好季节里，杭州协创实业有限公司与海马汽车于2016年11月20日在郑州签署战略合作协议，正式建立在汽车配件仓储及物流配送等领域全面深化战略合作伙伴关系。',
//       content:'<p style="text-align:left;text-indent:24pt;" align="left"><span style="line-height:150%;font-family:宋体;font-size:12pt;">自</span><span style="line-height: 150%; font-family:;" tahoma","sans-serif";font-size:12pt;"="">2014</span><span style="line-height:150%;font-family:宋体;font-size:12pt;">年</span><span style="line-height: 150%; font-family:;" tahoma","sans-serif";font-size:12pt;"="">11</span><span style="line-height:150%;font-family:宋体;font-size:12pt;">月由中国汽车维修行业协会汽车维修配件工作委员会汽车维修配件工委会、杭州市机动车配件经销行业协会联合主办，杭州神辇汽车服务有限公司承办的被誉为主机厂“华山论剑”的</span><span style="line-height: 150%; font-family:;" tahoma","sans-serif";font-size:12pt;"="">AP</span><span style="line-height:150%;font-family:宋体;font-size:12pt;">论坛</span><span style="line-height: 150%; font-family:;" tahoma","sans-serif";font-size:12pt;"="">|2014</span><span style="line-height:150%;font-family:宋体;font-size:12pt;">首届汽车零部件创新营销与服务高峰研讨会成功举办后，伴随着国家对汽车后市场的不断规范，各项革命性的政策出台，以及</span><span style="line-height: 150%; font-family:;" tahoma","sans-serif";font-size:12pt;"="">2015</span><span style="line-height:150%;font-family:宋体;font-size:12pt;">年各类汽配电商风起云涌，加上同质件的加快推进，各大主机厂及配套服务企业积极关注着后市场的演变。为此由杭州神辇汽车服务有限公司历时一个月的准备于</span><span style="line-height: 150%; font-family:;" tahoma","sans-serif";font-size:12pt;"="">2015</span><span style="line-height:150%;font-family:宋体;font-size:12pt;">年</span><span style="line-height: 150%; font-family:;" tahoma","sans-serif";font-size:12pt;"="">11</span><span style="line-height:150%;font-family:宋体;font-size:12pt;">月</span><span style="line-height: 150%; font-family:;" tahoma","sans-serif";font-size:12pt;"="">26</span><span style="line-height:150%;font-family:宋体;font-size:12pt;">日在杭州广银大酒店举办</span><span style="line-height: 150%; font-family:;" tahoma","sans-serif";font-size:12pt;"="">AP</span><span style="line-height:150%;font-family:宋体;font-size:12pt;">论坛</span><span style="line-height: 150%; font-family:;" tahoma","sans-serif";font-size:12pt;"="">|2015</span><span style="line-height:150%;font-family:宋体;font-size:12pt;">第二届汽车零部件创新营销与服务高峰研讨会。</span><span style="line-height: 150%; font-family:;" tahoma","sans-serif";font-size:9pt;"=""> </span> </p><p><img alt="" src="http://carsociety.cn/upload/editor/image/20160216/20160216105034_6.jpg" class="img-responsive" style="width: 100%;max-height: 450px;"></p><p style="text-align:left;text-indent:24pt;" align="left"><span style="line-height:150%;font-family:宋体;font-size:12pt;">在本次研讨会上邀请了汽车维修配件工委会魏同伟秘书长、杭州市机动车服务管理局配件经销管理处长，杭州市机动车配件经销行业协会秘书长俞凌枫、以及东南、海马、吉利、江淮、长安、天津一汽、奇瑞、长安铃木、力帆、东风风行、北汽幻速、郑州海马、长城、众泰等十余家主机厂配件部相关负责人，同时也邀请了中银保险有限公司浙江分公司、中国人保浙江分公司和云计算大数据研究中心的相关负责人悉数到场参会。大会也得到了都市快报、今日早报等多家媒体支持，其中《聚汽观察》杂志作为特约媒体参加了此会。大会由杭州神辇汽车服务有限公司运营总监俞日飞主持。 </span> </p><p style="text-align:left;text-indent:24pt;" align="left"><span style="line-height:150%;font-family:宋体;font-size:12pt;">研讨会首先由汽车维修配件工委会魏同伟秘书长致辞，同时为参会来宾解读《汽车维修技术信息公开实施管理办法》的详细内容并讲解了新政提出的汽车维修“同质配件”对相关车企和经销商而言，冲击难以避免，整个中国汽车产业格局将现重大变化，但旨在打造一批新形势下有规模、有实力、品牌化的企业。让车主能明明白白选择原厂件、同质件以及再制造件，不再受到假冒劣质件的伤害。云计算大数据研究中心的副主任李万清副教授为来宾做了大数据时代下的产业分析与运用的专题演讲，使来宾们更加清晰的认识到了大数据的价值。</span> </p><p style="text-align:left;text-indent:24pt;" align="left"><span style="line-height:150%;font-family:宋体;font-size:12pt;">随着互联网金融的发展，商业车险也在不断创新和改革，中国银行旗下中银保险浙江分公司车险部刘哲部长与大家分享了商业车险改革对汽车后市场的影响，受到极大关注。 </span> </p><p style="text-align:left;text-indent:24pt;" align="left"><span style="line-height:150%;font-family:宋体;font-size:12pt;">当前我们面临的是一个大变革时代，汽车流通业面临着前所未有的挑战，模式创新将成为未来十年渠道变革的核心内容。杭州市机动车服务管理局配件经销管理处长，杭州市机动车配件经销行业协会秘书长俞凌枫结合集多年负责汽车维修，如今负责配件经销，对汽车流通、汽配电商及汽配仓储销售有独到的见解。她在讲话中着重强调，汽车整车要创新发展好，重拳放在售后服务，做好配件销售新模式；联盟的企业要做大做强更要注重人与人之间的合作；电商<span>O2O</span>发展一定要结合实体经济才能有未来。 </span> </p><p style="text-align:left;text-indent:24pt;" align="left"><span style="line-height:150%;font-family:宋体;font-size:12pt;">“整车企业近几年来面临极大的挑战，整车配件在面对新政打破垄断时，也是爱恨交加，有冲击也有做大的机会”，奇瑞汽车原副总经理、销售公司总经理马德骥讲道，“主机厂配件企业要在市场上有更好的发展，不仅要结合各地的配件中心库做大，还要结合一个区别于现有的电商平台，要有原厂件清晰定位的电商，这样才能结合物流的集成而配送。” </span> </p><p style="text-align:left;text-indent:24pt;" align="left"><span style="line-height:150%;font-family:宋体;font-size:12pt;">众所周知，汽车俨然成为人们出行和商业活动中主要的交通工具，汽车的安全行驶越来越成为人们关注的焦点。对于汽车零部件的先用，在人们心目中第一首选的是原厂配件，然而市场却总遇到<span>4S</span>店恶意高价以及以配件市场上假乱真的趋利商贩，让车主们感觉急需解决的难题。如果能有一个专业提供原厂配件销售，并且价格合理的电商平台，无疑成为车主们一大福音。 </span> </p><p style="text-align:left;text-indent:24pt;" align="left"><span style="line-height:150%;font-family:宋体;font-size:12pt;">在本次研讨会上，记者欣喜见证了由杭州神辇汽车服务有限公司创立的汽车原厂配件垂直营销平台——“车社会”的上线，“车社会”首席<span>CEO</span>俞日飞讲到，“车社会”平台由线下成立于<span>2000</span>年，主要从事整车销售、零部件销售、售后维修和仓储服务的杭州神辇汽车服务有限公司重资创立的，目前杭州神辇与国内<span>10</span>余家汽车生产厂商建立了长期稳定的合作关系，在杭州、天津、山东和广东四地分别设有零部件仓储配送基地，总仓面积达<span>10</span>万平米，服务范围覆盖全国<span>20</span>个省市。“车社会”是由一批在汽车零部件、汽车维修、互联网领域、营销和管理方面的专家，历经一年的时间打造而成，现已上线。“车社会”将平台上各车型的信息精准地投入到各车型的车主，车主根据他的爱车，通过“车社会”平台可以选择质优实价的原厂配件，同时可以选择平台上所推荐可信赖的汽修厂进行安装服务。俞日飞还讲到，“车社会”将先从杭州运行，<span>2016</span>年将会覆盖全浙江省，同时向神辇公司所有仓储的省市开展。 </span> </p><p style="text-align:left;text-indent:24pt;" align="left"><span style="line-height:150%;font-family:宋体;font-size:12pt;">正如一汽海马汽车配件销售部周丽平部长所言，“车社会”平台的上线集原厂件<span>+</span>车型大数据<span>+</span>线上平台<span>+</span>仓储配送，这是一个非常有竞争力的平台，倘若我刚好在这几个区域城市，我车子的零部件一定会通过这个平台实现下单的；对于一汽海马来讲，我们非常看好这个平台！” </span> </p><p style="text-align:left;text-indent:24pt;" align="left"><span style="line-height:150%;font-family:宋体;font-size:12pt;">在圆桌会谈上，吉利备件销售部陈康部长、江淮汽车配件部相关负责人沈珩、互联网运营专家、神辇技术副总监张雪峰博士、郑州海马配件部部长曹双丽、力帆汽车配件部部长吴志航、中银保险浙江分公司业务三部韩宁部长、众泰汽车配件部田西玲等人分别就同质件、车险、互联网、汽配电商提出了相应的问题和自己的观点，同时汽车维修配件工委会魏同伟秘书长、杭州市机动车服务管理局配件经销管理处长，杭州市机动车配件经销行业协会秘书长俞凌枫分别就相关问题做了详细解答。 </span> </p><p style="text-align:left;text-indent:24pt;" align="left"><span style="line-height:150%;font-family:宋体;font-size:12pt;">参会嘉宾纷纷表示本次研讨会开的非常成功，收获很多并期待第三届再次相聚杭州进行“华山论剑”，研讨会在合影中拉下了帷幕。 </span> </p>'
//   }
//   ], function(err, result) {
//     assert.equal(err, null);
//     callback(result);
//   });
// }

/* GET users listing. */
router.get('/', function(req, res, next) {
  next(new Error('Test Page'));
});

module.exports = router;
