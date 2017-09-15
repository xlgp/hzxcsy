var log4js = require('log4js');
log4js.configure({
    appenders: { 
        app: { type: 'file', filename: 'logs/access.log' },
        debug: { type: 'stdout' },
    },
    categories: { default: { appenders: ['app', 'debug'], level: 'debug' } }
  });

  levels = {
    'trace': log4js.levels.TRACE,
    'debug': log4js.levels.DEBUG,
    'info': log4js.levels.INFO,
    'warn': log4js.levels.WARN,
    'error': log4js.levels.ERROR,
    'fatal': log4js.levels.FATAL
};
module.exports.logger = (name, level) => {
    let logger = log4js.getLogger(name);
    logger.level = levels[level] || levels['debug'];
    return logger;
};