/**

 @Name: 

 */

'use strict';

layui.define(['layer', 'laytpl', 'carousel', 'element', 'util', 'laypage', 'upload', 'form'], function(exports){
    
    var $ = layui.jquery,
      layer = layui.layer,
      element = layui.element,
      device = layui.device(),
      laypage = layui.laypage,
      util = layui.util,
      form = layui.form,
      upload = layui.upload,
      carousel = layui.carousel;
    
    //阻止IE8以下访问
    if(device.ie && device.ie < 9){ 
      layer.alert('如果您非得使用ie浏览本网站，那么请使用ie9+');
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
    var pageheight = $(document).height() - $('body').height();
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
      ,limit:8
      ,curr:(function() {
          var params = window.location.pathname.split('/');
          return params[params.length-1];
      })()
      ,jump: function(obj, first){
          if(first){return;}
          var pathname = window.location.pathname;
          pathname = pathname.substring(0, pathname.lastIndexOf('/')+1);
          window.location.href = pathname + obj.curr;
          return;
      }
  });
  laypage.render({
      elem: 'staff-page' //注意，这里的 test1 是 ID，不用加 # 号
      ,count: $('#staff-page').data('total')
      ,theme:'#f70909'
      ,limit:9
      ,curr:(function() {
          var params = window.location.pathname.split('/');
          return params[params.length-1];
      })()
      ,jump: function(obj, first){ 
          if(first){return;}
          var pathname = window.location.pathname;
          pathname = pathname.substring(0, pathname.lastIndexOf('/')+1);
          window.location.href = pathname + obj.curr;r
          return;
      }
  });
  util.fixbar({showHeight:100}); 
  //文件上传
  var Upload = upload.render({
    elem: '#test1'
    ,url: '/upload/other'
    ,multiple: true
    ,done: function(res, index, upload){ //上传后的回调
      //如果上传失败
      if(res.code > 0){
        return layer.msg('上传失败');
      }
      console.log(res, index);
    }
  })
  });
  
  