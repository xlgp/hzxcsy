'use strict';

layui.define(['form', 'layer', 'element'], function(){
    let form = layui.form,
        table = layui.table,
        element = layui.element,
    xc = {
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
              if(res.code === 0) {
                success && success(res);
              } else {
                layer.msg(res.msg||res.code, {anim: 6,icon:1});
              }
            }, error: function(e){
              options.error || layer.msg('请求异常，请重试', {anim: 6,icon:2});
            }
          });
        }
      };
      
        form.on('submit(news)', function(data){
            let action = $(data.form).attr('action'), button = $(data.elem);
            data.field.content = $('#newsTextarea').froalaEditor('html.get');
            xc.json(action, data.field, function (res) {
                layer.msg(res.msg), {anim: 6,icon:1};
            });
            return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
          });
        form.on('submit(carousel)', function(data){
          let action = $(data.form).attr('action');
          xc.json(action, data.field, function(res){
            layer.msg(res.msg), {anim: 6,icon:1};
          })
          return false;
        });
        form.on('submit(login)', function(data){
          xc.json('/login', data,field, function(res){
            window.location.href = res.data.redirectUrl;
          });
          return false;
        });
        form.verify({
          origin:function(value, obj){
            if($('[name="origin.id"]:checked').val() == 1){
              if (!/(^#)|(^http(s*):\/\/[^\s]+\.[^\s]+)/.test(value)) {
                return '请输入正确的文章来源链接';
              }
            }
          }
        });


});