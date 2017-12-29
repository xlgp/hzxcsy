'use strict';

layui.define(['form', 'layer'], function(){
    let form = layui.form,
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
                layer.msg(res.msg||res.code, {shift: 6});
              }
            }, error: function(e){
              options.error || layer.msg('请求异常，请重试', {shift: 6});
            }
          });
        }
      };
      
        form.on('submit(*)', function(data){
            let action = $(data.form).attr('action'), button = $(data.elem);
            if(action == '/news/add'){
                data.field.content = $('#newsTextarea').froalaEditor('html.get');
            }
            xc.json(action, data.field, function (res) {
                layer.msg(res.msg);
                res.data && res.data.url&&(window.location.href = res.data.url);
            });
            return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
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