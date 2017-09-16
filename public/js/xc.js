/**

 @Name: 

 */

layui.define(['layer', 'laytpl', 'carousel', 'element', 'util', 'laypage'], function(exports){
    
    var $ = layui.jquery,
      layer = layui.layer,
      element = layui.element,
      device = layui.device(),
      laypage = layui.laypage,
      util = layui.util,
      carousel = layui.carousel;
    
    //阻止IE7以下访问
    if(device.ie && device.ie < 8){
      layer.alert('如果您非得使用ie浏览本网站，那么请使用ie8+');
    }
    
    function setCookie(c_name,value,expiredays)
    {
        var exdate=new Date();
            exdate.setDate(exdate.getDate()+expiredays);
            document.cookie=c_name+ "=" +escape(value)+
            ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
    }
    //设置第一次访问提示框
    if (document.cookie==null || document.cookie==""){
      var _host = 'http://hzxcsy.com.cn/';
      layer.open({
          title: '友情提示'
          ,type:0
          ,content: '本版本为测试版本,若想访问公司官网,请前往:<br><a href="'+_host+'" target="_black">'+_host+'</a>'
          });
          setCookie('isload','yes',365)  
    }
    //footer固定在底部
    let pageheight = $(document).height() - $('body').height();
    if(pageheight > 0){
      $('footer').before('<div style="height:'+pageheight+'px"></div>');
    }
    //footer固定在底部 end

    var xc = {
      json: function(url, data, success, options){
        var that = this;
        options = options || {};
        data = data || {};
        return $.ajax({
          type: options.type || 'post',
          dataType: options.dataType || 'json',
          data: data,
          url: url,
          success: function(res){
            if(res.status === 0) {
              success && success(res);
            } else {
              layer.msg(res.msg||res.code, {shift: 6});
            }
          }, error: function(e){
            options.error || layer.msg('请求异常，请重试', {shift: 6});
          }
        });
      }
    }

    //建造实例
    carousel.render({
      elem: '#xc-carousel'
      ,width: '100%' //设置容器宽度
      ,height: '500px'
      ,anim:'fade'
      ,interval:6000
  });
   //执行一个laypage实例
  laypage.render({
      elem: 'news-page' //注意，这里的 test1 是 ID，不用加 # 号
      ,count: $('#news-page').data('total') //数据总数，从服务端得到
      ,theme:'#f70909'
      ,curr:(() => {
          let params = window.location.pathname.split('/');
          return params[params.length-1];
      })()
      ,jump: function(obj, first){
          if(first){return;}
          let pathname = window.location.pathname;
          pathname = pathname.substring(0, pathname.lastIndexOf('/')+1);
          window.location.href = pathname + obj.curr;
          return;
      }
  });
  laypage.render({
      elem: 'staff-page' //注意，这里的 test1 是 ID，不用加 # 号
      ,count: $('#staff-page').data('total')
      ,theme:'#f70909'
      ,curr:(() => {
          let params = window.location.pathname.split('/');
          return params[params.length-1];
      })()
      ,jump: function(obj, first){ 
          if(first){return;}
          let pathname = window.location.pathname;
          pathname = pathname.substring(0, pathname.lastIndexOf('/')+1);
          window.location.href = pathname + obj.curr;r
          return;
      }
  });
  util.fixbar({showHeight:100}); 

  });
  
  