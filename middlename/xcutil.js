const	path = require('path'),
		fs = require('fs'),
		moment = require('moment');


moment.locale('zh-cn'); // 使用中文

function zero(num) {
	return num > 9 ? num : '0'+num;
};

module.exports = {
	getDir:(dirpath, callback) => {
		let date = new Date();
		let dirname = ''+date.getFullYear() + zero(date.getMonth()+1) + zero(date.getDate());
			dirpath = path.normalize(dirpath + '/' +dirname);
		//判断文件是否存在
		fs.access(dirpath, fs.constants.R_OK | fs.constants.W_OK, (err) =>{
			if(err){
				if(err.code === 'ENOENT'){
					//ENOENT (无此文件或目录): 通常是由 fs 操作引起的，表明指定的路径不存在，即给定的路径找不到文件或目录。
					fs.mkdir(dirpath, (err1) =>{
						callback(err1, dirpath);
					})
					return;
				}
				callback(err, dirpath);
				return;
			}
			callback(err, dirpath);	
		});
	},
	/**
	 * 返回形式为 'YYYYMMDDHHmmss' 的当前时间(若位数不足,前补0)
	 */
	getYmdhms:()=>{
		let date = new Date();
		return ''+date.getFullYear() + zero(date.getMonth()+1) + zero(date.getDate())
				+zero(date.getHours()) + zero(date.getMinutes()) + zero(date.getSeconds());
	},
	/**
	 * 返回num位随机数
	 */
	getRandom:(num)=>{
		num = num || 4;
		return Math.floor(Math.random()*Math.pow(10,num));
	},
	/**
	 * 判断callback是否是函数
	 */
	isfunction:(callback)=>{
		return callback && typeof callback === 'function';
	},
	
	// 格式化时间
	formatDate : function (date, flag) {
		date = moment(date);
		if (flag == 0) {
			return date.format('YYYY-MM-DD HH:mm');		
		}else if(flag == 1){
			return date.format('YYYY-MM-DD');
		}
	},
};