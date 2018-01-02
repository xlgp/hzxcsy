var logger = require('../middlename/xclog.js').logger('upload'),
    util = require('util'),
    fs = require('fs'),
    path = require('path'),
    xcutil = require('../middlename/xcutil.js'),
    uploadDirList =require('../config/config.js').uploadDirList,
    gConfig = require('../config/config').STATIC_HOST,
    formidable = require('formidable');


module.exports = function(req, res, next) {
    xcutil.getDir(uploadDirList[req.params.type], (err, dirpath) => {
        if (err) { 
            logger.error(err.message);
            res.status(500).json({code:1, msg:'上传失败'});
            return;
        }
        var form = new formidable.IncomingForm();
        form.uploadDir = dirpath + '/';
        form.parse(req, (err, fields, files) => {
            if (err) {
                logger.error(err.message);
                res.status(500).json({code:2, msg:err.message});
                return;
            } 
            let filepath = form.uploadDir + path.basename(files.file.name, path.extname(files.file.name))+'_'+
                xcutil.getYmdhms() + xcutil.getRandom() + path.extname(files.file.name);
            fs.rename(files.file.path, filepath, (err) => {
                    if (err) {
                        logger.error(err.message);
                        res.status(500).json({code:2, msg:err.message});
                        return;
                    }
                    filepath = filepath.replace(/\\/g,"/");
                    data = {
                        src:'/' + filepath,
                        originName:files.file.name,
                        type:files.file.type,
                        size:files.file.size
                    };
                    //将数据存入数据库
                    // function save();
                    res.status(200).json({code:0, msg:'', data:data, link:'/' + filepath});
                });
            
        });
    });    
};
