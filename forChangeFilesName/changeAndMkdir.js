var fs =require('fs');
var path = require('path');


/*
////批量修改文件名称 并且存放在一个新建的文件夹中
// 当前醒目不完整，无法成功创建新文件夹 相当移动文件而不是复制
之后尝试使用文件流的方式来创建吧

*/

 /*参数解读：   资源文件夹 目标文件夹 重命名方式  重命名前缀
重命名方式：all 全部重命名按照顺序加上序号   prefix  添加前缀
*/


function ChangeAndMkdir(sourcePath,targetPath,changWay,naming){
    var filePath='',mkdirPath='',newPath='';
    //判断文件夹是否存在 不存在则创建
    fs.exists(targetPath, function (exists) {
        if(!exists){ //文件夹不存在需要创建
            fs.mkdir(targetPath, function (err) {
                console.log('目标文件夹'+targetPath+'创建完毕')
            })
        }else{
            console.log('目标文件夹'+targetPath+'已经存在')
        };
    });

    // 读取资源文件夹
    fs.readdir(sourcePath, function (err,files) {
        files.forEach(function (item,index) {
            filePath = sourcePath+'/'+item;
            (function (filePath) {
                fs.stat(filePath, function (err,stats) {
                    if(stats.isFile()) { // 开始批量重命名文件放到目标文件夹中
                        switch (changWay)  {
                            case 'all':
                            //选择全部重新命名
                                newPath = targetPath + '/' + naming+ index + path.extname(filePath);
                                break;
                            case 'prefix':
                                // 更改前缀
                                newPath = targetPath + '/' + naming + item;
                                break;
                        };
                        fs.rename(filePath, newPath);
                        console.log(newPath+'done!')
                    }
                });
            })(filePath);
        })
    })
}

module.exports = ChangeAndMkdir;