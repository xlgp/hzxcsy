(function () {
	var XCAMap = XCAMap || {};
	window.XCAMap =XCAMap;
	//协创经纬度
 var position = [120.122819,30.32512];
 var config = {
    'address':'浙江省杭州市拱墅区花园岗路113号金通国际大厦A座9F',
    'email':'hangzhouxcsy@126.com',
    'tel':'400-827-3666',
    'img_path':'/images/logo.png',
 };
 function setConfig(paramter){
    if (!paramter) {return;}
    for(var key in paramter){
        if(key in config){
            config[key] = paramter[key];
        }
    }
 }
 XCAMap.createAMap = function(id, paramter){
setConfig(paramter);
 //创建地图
 var map = new AMap.Map(id,{
 zoom: 17,
 center:position
 });
 //信息窗口内容
 var  content = [];
 content.push('<div class="InfoWindow-box">');
 content.push('<span id="info-close" class="info-close layui-icon" onclick="XCAMap.closeInfoWindow()">&#x1007;</span>');
 content.push('<div class="info-point"></div>');
 content.push('<div class="info-head">杭州协创实业有限公司</div>');
 content.push('<div class="info-body">');
 content.push('<img src="'+config['img_path']+'" width="" height="64px">');
 content.push('<div>联系方式：'+config['tel']+'</div>');
 content.push('<div>邮箱：'+config['email']+'</div>');
 content.push('<div>地址：'+config['address']+'</div>');
 content.push('</div>');
 content.push('</div>');
 //创建信息窗口
 var infowindow = new AMap.InfoWindow({
 	isCustom: true, 
    content: content.join(''),
    autoMove:true,
    showShadow:true,
    offset: new AMap.Pixel(0, -55),
 });
infowindow.open(map,position);
 //关闭信息窗口
 XCAMap.closeInfoWindow = function(){
 	infowindow.close();
 }
 //创建指针
 var marker = new AMap.Marker({
    position: position,
    map:map
 }).on('click', function(){
 	if(!this.getIsOpen()){
 		this.open(map,position);
 	}
 }, infowindow);
  }
 
})();