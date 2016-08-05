## 批量修改文件名称(一般用在修改图片文件上)

#### 使用方式

```javascript
var Change = require('./change');

Change.ChangeAll( './try','my');
批量修改文件名称

Change.ChangePrefix('./try','myfile_');
批量添加文件前缀名称

Change.ChangeAndMkdir('./sourceDir','./newDir', 'all','newname_');
参数解读：   资源文件夹 目标文件夹 重命名方式  重命名前缀
重命名方式：all 全部重命名按照顺序加上序号   prefix  添加前缀

```