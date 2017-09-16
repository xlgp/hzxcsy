(function(){
	var i=0,//大图编号
		img = [];
		len=img.length,//img数组的长度
		cur=0,//当前图片编号
		j=14,//默认显示小图个数
		page=0,//小图的页码
		$s_next=$('#smallImg-next'),//小图下一页
		$s_pre=$('#smallImg-pre'),//小图上一页
		box=$('#smallImg-box').width(),//显示的长度
		$ul=$('#smallImg-ul'),//小图外层
		$imgLi=$ul.find('li'),//小图li
		html=_html='';//存放载入的代码	

var XCGV = XCGV || {};
window.XCGV =XCGV;
XCGV.init = function(pimg){
	img = pimg;
	len = img.length;
	$('#detailImg-box').append('<img src=\"'+window.STATIC_HOST+img[i].src+'\">');
	//大图	
	$('#detailImg-next').click(function(){
		++i;
		if (i < 0) {i = len -1}
		else if(i >= len){i = 0}
		detailImg_click($s_next,i,len, smallPre);
	})
	$('#detailImg-pre').click(function(){
		--i;
		if (i < 0) {i = len -1;}
		else if(i >= len){i = 0;}
		detailImg_click($s_pre,i,len, smallNext);
	})
	//小图
	for(var k=0;k<j;k++){
		var _k=k%len;
		s_html(_k);
		html+=h; //s_html(_k);
	}
	
	$('#smallImg-ul').append(html+'');
	
	$('.smallImg_1').addClass('cur');	
	//小图下一页
	$('#smallImg-next').click(smallPre)
	//小图上一页
	$('#smallImg-pre').click(smallNext)
	//点击小图
	$('#smallImg-ul li').click(function(){
		var _this=$(this);
		i=_this.attr('class').replace(/[^0-9]/ig,'')-1;
		img_info(i);
		s_a_r(_this,'cur');
		cur=i;
	})
}
/*----自定义函数-----------*/

function smallNext(){
		if(!$('#smallImg-ul').is(':animated')){
			page--;
			var a=(page-1)*j,_a,c;
			for(var k=0;k<j;k++,a--){
				smallImg_click(a,_a,len,i);
				_html=h+_html;
			}
			$('#smallImg-ul').prepend(_html).css({'right':box,'left':'auto'});
			$('#smallImg-ul').animate({right:0},50,function(){
				$('#smallImg-ul').find('li:gt('+(j-1)+')').detach();//删除后9个li,从8开始
				_html='';
			});
			$('#smallImg-ul li').click(function(){
				var _this=$(this);
				i=_this.attr('class').replace(/[^0-9]/ig,'')-1;
				img_info(i);
				s_a_r(_this,'cur');
				cur=i;
			})
		}
			
	}

function smallPre(){
		
		if(!$('#smallImg-ul').is(':animated')){
			page++;
			var a=page*j,_a,c;
			for(var k=0;k<j;k++,a++){
				smallImg_click(a,_a,len,i);
				_html+=h;
			}
			$('#smallImg-ul').append(_html);
			$('#smallImg-ul').css({'left':0,'right':'auto'});
			$('#smallImg-ul').animate({left:-box},50,function(){
				$('#smallImg-ul').find('li:lt('+j+')').detach();
				$('#smallImg-ul').css('left',0);
				_html='';
			});//动画执行后,再删除前9个li,将left设回0
			$('#smallImg-ul li').click(function(){//三处一样，不知道这个要怎么优化？？？
				var _this=$(this);
				i=_this.attr('class').replace(/[^0-9]/ig,'')-1;
				img_info(i);
				s_a_r(_this,'cur');
				cur=i;
			})
		}
	}

//大图图片信息
function img_info(i){
	var href=img[i].href,
		alt=img[i].alt,
		src=img[i].src,
		title=img[i].title,
		$main=$('#detailImg-box');
	$main.find('a').attr({'href':href,'class':'detailImg_'+(i+1)});
	$main.find('img').attr({'alt':alt,'src':src});
	$main.find('p').text(title);
}
function s_a_r(o,c){
	o.addClass(c).siblings().removeClass(c);	
}
//大图左右点击
function i_cur(i,len){
	i=i%len;
	if(i<0){
		i=len+i;
	}
	return i;	
}
function detailImg_click($pn,i,len, callback){
	
	// i_cur(i,len)
	img_info(i);
	var imgCur=$('.smallImg_'+(i+1));
	if(!imgCur.html() || imgCur.length == 0){
		console.log($pn, callback);
		// $pn.click(callback);
		callback();
	} 
	s_a_r($('.smallImg_'+(i+1)),'cur');//小图选中
}
//小图左右点击
function smallImg_click(a,_a,len,i){
	_a=a;
	_a=a%len;
	if(_a<0){
		_a+=len;
	}
	c=_a==i?'cur':'';
	s_html(_a,c);
}
function s_html(_a,c){
	h='<li class=\"smallImg_'+(_a+1)+'\"><a><img src=\"'+window.STATIC_HOST+img[_a].smallSrc+'\"></a></li>';
	return h;
}
})()