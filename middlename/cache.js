let redis = require('./redis'),
    xcutil =require('./xcutil'),
    redisConfig= require('../config/config').redis,
    logger = require('./xclog').logger('cache');

module.exports.get = function (key, callback){
    redis.get(key, (err, reply) => {
        if (err) {
            logger.error(err.message);
            return callback(err);
        }
        if (!reply) {
            logger.info('no such key', key);
            return callback(err, null);
        }
        callback(err, reply);
    });
};

module.exports.set = function (key, value, times, callback){
    
    if (xcutil.isfunction(times)) {
        callback = times;
        times = redisConfig.ex || 3600*24;
    }
    if (!times) {
        times = redisConfig.ex || 3600*24;
    }
    if (!xcutil.isfunction(callback)) {
        callback = function(){};
    }
    try {
        redis.setex(key, times, value, callback);
    } catch (error) {
        callback(err,'set value ' + value + ' failed');
    }
}