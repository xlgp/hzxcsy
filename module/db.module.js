var mongoose = require('mongoose'),
    logger = require('../middlename/xclog.js').logger('db.module'),
    mongodbConfig = require('../config/config.js').mongodb;

/**
 * 连接
 */
mongoose.connect(mongodbConfig.url, {
    useMongoClient: true,
    poolSize: 20
},(err) => {
    if (err) {
        logger.error('connect to database '+mongodbConfig.url+'error', err.message);
        process.exit(1);
    }
});

/**
 * 连接成功
 */
mongoose.connection.on('connected', function () {    
      
});    

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {    
    console.log('Mongoose connection error: ' + err);
    logger.error(err.message);  
});    
 
/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function (err) {    
    console.log('Mongoose connection disconnected');
    logger.info('Mongoose connection disconnected');

});   

module.exports = mongoose;