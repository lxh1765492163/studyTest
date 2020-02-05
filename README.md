### 为什么打造前端工作流
事实上 ， 现在很多的编辑器都有可以做代码检查的插件 ， 这个对于开发者个人来说足够了， 但是对于一个开发团队来说略显不足
代码里面的一些坏味道不能得到规范 ，从而降低了代码质量

git  hooks的作用就是用来做代码提交时候的一道检查

### eslint

代码质量扫描（未使用变量 ， 三等号， 全局变量声明等），一定注意全局安装

### prettier

代码格式校验（单行长度， tab长度， 空格）团队代码风格统一，

prettier目前支持前端大部分的语言处理 ，包括js ts css scss less jsx vue json md等 , 几乎用一个工具搞定所有代码的格式问题



### eslint, prettier结合使用
这简书讲解eslint prettier可以 https://www.jianshu.com/p/dd07cca0a48e


###### 配合使用原因

eslint的规则不如prettier健全, 对于自动修复代码格式推荐使用prettier --write

###### 配合使用存在问题

1. 两者规则出现交集 ， 去掉eslint规则 ， 使用prettier 规则

eslint-plugin-prettier：将prettier规则作为eslint规则 ， 对不符合规则的调用prettier进行提示

eslint-config-prettier： 关闭eslint一些与prettier冲突的规则 ，那样一些错误不会出现两次

官方称eslint-plugin-prettier需要与eslint-config-prettier搭配食用才能获得最佳效果。

### husky

git 钩子插件， 配合npm script的钩子依赖插件husky


本地钩子 precommit prepush

远程仓库钩子prereceive...  

为什么添加远程钩子 ， git在commit的时候是可以跳过本地的钩子的 --no-verify | -n

### lint-staged

专门做扫描优化 ， 只针对git 暂存区的文件进行代码扫描
 
在package.json 中lint-staged不管是js还是scss在修复代码格式的时候都是用的prettier --write ， ！！！prettier的参数还没有细看暂时不管

```
"lint-staged": {
    "src/**/*.{js,scss}": [
      "prettier --write",
      "git add"
    ]
  }
```

之前一直以为js的代码格式修复用eslint --fix
```
"lint-staged": {
    "src/**/*.{js}": [
      "prettier --write",
      "eslint --fix",
      "git add"
    ]
  }
```

css|scss文件使用stylelint --fix

```
"lint-staged": {
    ...
    "src/**/*.{css|scss}": [
      "stylelient",
      "git add"
    ]
  }
```

控制台就一直会报错 ， 这个错
```
→
× "stylelint" found some errors. Please fix them and try committing again.
Error: No files matching the pattern "F:\studyAndRemote\study_git_hooks\src\scss\index.scss" were found
```

最后发现create-reate-app新版本也加上了eslint prettier  lint-staged, 参照了人家的package.js发现代码格式的修复就用了prettier,  上面提到
prettier支持大部分前端语言的规范以及格式修复

### error  Parsing error: Unexpected token

解决方法

npm install babel-eslint --save

然后在 .eslintrc.js 中加入代码解析"parser": "babel-eslint" 



