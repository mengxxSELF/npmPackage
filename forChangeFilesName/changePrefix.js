var fs = require('fs');


function ChangePrefix(obj,naming){
    var filePath ='',newPath='' ;
    fs.readdir(obj, function (err,files) {
        files.forEach(function (item,index) {
            filePath = obj+'/'+item;
            (function (filePath) {
                fs.stat(filePath, function (err,stats) {
                    if(stats.isFile()){ //判断读取的是不是文件
                        newPath = obj+'/'+naming+item;
                        fs.rename(filePath,newPath, function (er,datat) {
                            console.log(filePath+'named by'+newPath)
                        })
                    }
                })
            })(filePath)
        })
    })
}

module.exports = ChangePrefix;