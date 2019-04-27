---
layout: post
title:  Ubuntu下切换Python2和Python3
author: leacoder
categories: Linux 
tags: Linux
---

* content
{:toc}

### 1.在linux系统中检查是否安装了pip
>pip --version

![001.png](https://upload-images.jianshu.io/upload_images/16846478-8a678c1ad592fba1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

如果没安装使用如下命令安装pip(注意Python 版本)：
>apt-get install python3-pip

### 2.在linux下安装pygame
PYTHON3的PIP安装成功后
使用如下命令安装pygame：
>python3 -m pip install -U pygame

### 3.测试
>python3 -m pygame.examples.aliens

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