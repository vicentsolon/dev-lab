# git学习笔记
[toc]

## 初次使用git
1.设置全局信息
- git config --global user.name "用户名"
- git config --global user.email 邮箱

2.查看配置信息
- git config --list 查看全部信息
- git config user.name 查看单个信息

## git基础
1.初始化仓库
- git init

2.提交文件
- git add filename
- git add .
- git commit -m "change massage"
- git commit -a 跳过添加至暂存区 直接提交
- git commit --amend 从暂存区追加提交

3.查看状态
- git status

4.创建.gitignore文件
- 可用于忽略不需要提交管理的文件

5.文件对比
- git diff 未暂存 vs 上次提交
- git diff --cached or git diff --staged 已暂存 vs 上次提交

6.查看提交历史
- git log

7.回退操作
- git reset HEAD filename

8.修改文件回退
- git checkout -- filename  不实用

## git分支与合并

- git branch 查看本地分支
- git branch branch-name 创建分支
- git checkout branch-name 切换分支
- git checkout -b branch-name 创建并切换分支
- git merge branch-name 合并分支
- git branch -D name 删除分支
- git branch -a 查看所有分支
- git push origin --delete name 删除远程仓库的分支

## 远程仓库的使用
1.查看远程仓库
- git remote
- git remote -v 查看远程仓库的url

2.添加远程仓库
- ssh-keygen 生成密钥 去github配置ssh
- git remote add origin url

3.推送到远程仓库
- git push origin master

4.远程仓库抓取或拉取
- git pull 

5.查看某个远程仓库

- git remote show origin