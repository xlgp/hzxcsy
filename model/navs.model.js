var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var navsSchema = new Schema({
    id:Number,
    name:String,
    url:{type:String, default:'javascript:;'},
    target:String,
    status:{type:Number, default:0},
    children:[
        {id:Number,
        name:Number,
        url:{type:String, default:'javascript:;'},
        status:{type:Number, default:0},
        date: { type: Date, default: Date.now },
        target:String,
    }],
    date: { type: Date, default: Date.now },
});

module.exports.NavsModel = mongoose.model('navs', navsSchema);
