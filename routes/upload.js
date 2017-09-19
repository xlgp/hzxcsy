var express = require('express'),
    router = express.Router(),
    logger = require('../middlename/xclog.js').logger('upload'),
    util = require('util'),
    fs = require('fs'),
    path = require('path');
    formidable = require('formidable');

router.get('/test', (req, res, next) => {
    res.redirect(404);
    res.render('test');
});

router.post('/', (req, res, next) => {
    logger.info('upload post');
    res.redirect(404);
    return;
    var form = new formidable.IncomingForm();
    form.uploadDir = './public/upload/other/';
    form.parse(req, (err, fields, files) => {
        if (err) {
            logger.error(err);
            throw err;
        }
        fs.rename(files.file.path,
            form.uploadDir + path.basename(files.file.name, path.extname(files.file.name))+
            new Date().getTime() + path.extname(files.file.name),
            (err) => {
                if (err) {
                    logger.error(err);
                    throw err;
                }
                res.send(util.inspect({fields: fields, files: files}));
            });
        
    });
});

module.exports = router;