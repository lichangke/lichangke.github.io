---
layout: post
title:   Ubuntu下切换Python2和Python3.md
author: leacoder
categories: Linux 
tags: Linux
---

* content
{:toc}

## 采用update-alternatives 切换版本

### 1.查看Ubuntu系统已安装的python版本及当前使用的python版本

![001.png](https://upload-images.jianshu.io/upload_images/16846478-7228211be3aaa3a1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 2.设置update-alternatives  切换python版本
>update-alternatives --list python 

显示Python代替版本信息
![002.png](https://upload-images.jianshu.io/upload_images/16846478-f00fc86209e6fb80.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

执行命令安装

>update-alternatives --install /usr/bin/python python /usr/bin/python2.7 1
>update-alternatives --install /usr/bin/python python /usr/bin/python3.5 2

![003.png](https://upload-images.jianshu.io/upload_images/16846478-c2cfd7e119c5d340.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

查看默认版本

![004.png](https://upload-images.jianshu.io/upload_images/16846478-20681fc8fe2ff647.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

上述命令中我们设置 /usr/bin/python3.5 的优先级为2 所以设置3.5为默认

再次显示Python代替版本信息

![005.png](https://upload-images.jianshu.io/upload_images/16846478-67dcb6ac041dac9c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

切换版本
>update-alternatives --config python

![006.png](https://upload-images.jianshu.io/upload_images/16846478-92092c2660db789b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

----
>*GitHub链接：*
>*[https://github.com/lichangke/LeetCode](https://github.com/lichangke/LeetCode)*

>*知乎个人首页：*
>*[https://www.zhihu.com/people/lichangke/](https://www.zhihu.com/people/lichangke/)*

>*简书个人首页：*
>*[https://www.jianshu.com/u/3e95c7555dc7](https://www.jianshu.com/u/3e95c7555dc7)*

>*个人Blog:*
>*[https://lichangke.github.io/](https://lichangke.github.io/)*

>*欢迎大家来一起交流学习*