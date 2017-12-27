const mongoose = require('./db.module.js'),
		logger = require('../middlename/xclog.js').logger('navs.module'),
		xcutil = require('../middlename/xcutil.js'),
		BaseModel = require('./base.module'),
		Schema = mongoose.Schema;
		
let NavsSchema = new Schema({
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

NavsSchema.plugin(BaseModel);

let NavsModel = mongoose.model('Navs', NavsSchema);

module.exports = {
	get: (contictions, callback) => {
		NavsModel.find(contictions, (err, subcallback) => {
			if(err){
				callback(err, null);
			}else{
				callback(null, subcallback);
			}
		});
	},
	save: (callback) => {
		// NavsModel.save();
		callback();
	},
	delete: (params) => {
		
	}
};