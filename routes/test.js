var express = require('express'),
    router = express.Router(),
    MongoClient = require('mongodb').MongoClient,
    config = require('../config/config'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    assert = require('assert');

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

var NavsModel = mongoose.model('navs', navsSchema);

router.get('/', function(req, res, next) {
  next(new Error('Test Page'));
});

module.exports = router;
