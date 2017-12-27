let redis = require('./redis'),
    xcutil =require('./xcutil'),
    logger = require('./xclog').logger('cache');

module.exports.get = function (key, callback){
    redis.get(key, (err, reply) => {
        if (err) {
            logger.error(err.message);
            console.log(err);
            return callback(err);
        }
        if (!reply) {
            logger.info('no such key', key);
            return callback(err, null);
        }
        callback(err, reply);
    });
};

module.exports.set = function (key, value, callback){
    if (!xcutil.isfunction(callback)) {
        callback = function(){};
    }
    try {
        redis.set(key, value, callback);
    } catch (error) {
        callback(err,'set value ' + value + ' failed');
    }
}