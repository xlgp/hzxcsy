'use strict';

layui.define(['form', 'layer', 'element'], function(exports){
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
              layer.msg(res.msg||res.code, {icon:(res.code === 0 ? 1:2)});
              success && success(res);
            }, error: function(e){
              options.error || layer.msg('请求异常，请重试', {anim: 6,icon:2});
            }
          });
        },
        isfunction:function (callback) {
          return callback && typeof callback === 'function'
        }
      };
      
        
        
        form.on('submit(login)', function(data){
          xc.json('/login', data.field, function(res){
            if (res.code == 0) {
              window.location.href = res.data.redirectUrl;  
            }
            
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

        exports('xc', xc);

});