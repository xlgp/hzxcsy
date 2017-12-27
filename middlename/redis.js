var Redis = require('ioredis');
    logger = require('./xclog').logger('redis'),
    redisConfig = require('../config/config').redis,
    redis = new Redis(redisConfig);

redis.on('error', function (err) {
    if (err) {
      logger.error('connect to redis error, check your redis config', err);
      process.exit(1);
    }
  })
module.exports = redis;