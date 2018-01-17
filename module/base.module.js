/**
 * 给所有的 Model 扩展功能
 * http://mongoosejs.com/docs/plugins.html
 */
var xcutil = require('../middlename/xcutil');

module.exports = function (schema) {
  schema.methods.create_at_ago = function (flag) {
    return xcutil.formatDate(this.createTime, flag);
  };
  schema.methods.update_at_ago = function(){
    return xcutil.formatDate(this.updateTime, flag);
  }
};
