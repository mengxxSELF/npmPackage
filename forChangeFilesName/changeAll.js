var fs =require('fs');
var path =require('path');


function ChangeAll(obj,naming){
    var filePath='',newName='',newPath='';
    fs.readdir(obj, function (err,files) {
        files.forEach(function (item,index) {
            filePath = obj+'/'+item;
            (function (filePath) {
                fs.stat(filePath, function (err,stats) {
                    if(stats.isFile()){
                        newName = naming+index+path.extname(filePath);
                        newPath = obj+'/'+newName;
                        fs.rename(filePath,newPath, function (err,data) {
                            if(!err) console.log(filePath+'named by'+newPath)
                        });
                    };
                });
            })(filePath);
        });
    });
}

module.exports = ChangeAll;