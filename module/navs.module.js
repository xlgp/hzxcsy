const mongoose = require('mongoose'),
        Schema = mongoose.Schema;
        
var navsSchema = new Schema({
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