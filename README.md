### eslint

代码扫描(一定注意全局安装)

### prettier

团队代码风格统一，支持大部分前端语言的规范

### eslint, prettier结合使用
eslint-plugin-prettier：将prettier规则作为eslint规则 ， 对不符合规则的调用prettier进行提示

eslint-config-prettier： 关闭eslint一些与prettier冲突的规则 ，那样一些错误不会出现两次

官方称eslint-plugin-prettier需要与eslint-config-prettier搭配食用才能获得最佳效果。

### husky

git 钩子插件， 配合npm script的自定义命令钩子使用 precommit

### lint-staged

专门做扫描优化 ， 只针对git 暂存区的文件进行代码扫描

### error  Parsing error: Unexpected token

解决方法

npm install babel-eslint --save

然后在 .eslintrc.js 中加入代码解析"parser": "babel-eslint" 