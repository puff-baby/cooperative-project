# 一些说明

## 参照[gitflow](https://blog.csdn.net/xingbaozhen1210/article/details/81386269)，仅仅用于我和朋友自己练习着玩

* master 作为主分支，只会存放重大版本信息，版本按照大版本、次要版本、小版本
* dev 作为主开发分支，每次开发新功能，从远程的dev上进行拉取
* feature 功能开发分支，基于dev分支
* release 测试发现的bug修复分支，基于feature分支
* hotfix 补丁分支，基于master

### 关于分支创建说明
* 每个星期，我们从dev自己拉一个分支做功能开发，例如feature-lxy-node-test,
  如果不知道怎么起名好，也可以按照feature-[姓名拼音简写]-[日期]来命名，例如feature-lxy-20190319
* feature分支merge到dev没问题后记得删除
* 关于commit的备注规范，我之后补充
* push之前先git pull origin dev --rebase 一下

## 前端和后端文件夹
* 第一级子文件夹按照语言来命名，第二级子文件夹按照项目内容来命名

## 算法文件夹和爬虫文件夹
* 里面存放文件或者文件夹，以语言-算法内容来命名，例如js-最少硬币找零问题，
  如果用不同的语言都是同一个算法内容，则建一个以算法内容为名字的文件夹，里面
  存放以语言来命名的文件。例如最少硬币找零问题 -> js 和 c++ 等文件

## 后续会继续完善README.md,欢迎补充,也欢迎在github上对我们的项目提出意见



