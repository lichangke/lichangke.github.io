---
layout: post
title:  VM中安装linux系统，安装VS-Code，搭建Python环境
author: leacoder
categories: Linux 
tags: Linux
---

* content
{:toc}

## VM中安装linux系统
参见 
[https://www.jianshu.com/p/47d47970e821](https://www.jianshu.com/p/47d47970e821)


##  在linux系统中安装VSCode(Visual Studio Code)
### 1.从官网下载安装包
访问Visual Studio Code官网 [https://code.visualstudio.com/](https://code.visualstudio.com/)
下载对应版本

### 2.在下载目录打开终端安装
> sudo dpkg -i code_1.32.3-1552606978_amd64.deb 

如果遇到如下问题
![101.png](https://upload-images.jianshu.io/upload_images/16846478-d5aeec760d91eee0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
>先运行 sudo apt-get install libnss3
>如有必要 sudo apt-get -f install

如没问题
>运行 sudo dpkg -i code_1.32.3-1552606978_amd64.deb 后如图

![102.png](https://upload-images.jianshu.io/upload_images/16846478-26391fe3c64dd959.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
  
>接着运行   sudo apt-get install -f

![103.png](https://upload-images.jianshu.io/upload_images/16846478-230148b5628010e6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

运行VSCode
![104.png](https://upload-images.jianshu.io/upload_images/16846478-236885c98911491c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


##VS Code搭建Python环境
确保系统中已安装Python
可以通过如下命令查看：
>python --version
>python3 --version

![006.png](https://upload-images.jianshu.io/upload_images/16846478-132d9da0e0cd423b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
如果没有，通过命令安装
>apt-get install python3.5

多版本Python切换，参见：[Ubuntu下切换Python2和Python3](https://www.jianshu.com/p/4d28325889e6)



### 1.安装Python插件
如下图，安装后打开软件，点击左边最下面的图标，搜索Python，选择列表的第一个插件并点击install安装程序。
![005.png](https://upload-images.jianshu.io/upload_images/16846478-2cd9dce3103347dc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 2.打开工作目录
如下图，点击左边的 文件图标，再点击“Open Folder”按钮，选择一个文件夹作为工作目录，之后新建的文件都会存放在这个目录下。

![007.png](https://upload-images.jianshu.io/upload_images/16846478-e3b7e3b9ffba7eb0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

添加完后如下图，我的文件名为PYTHON，添加后所有字母都变为大写。在文件夹下新建.py文件

![008.png](https://upload-images.jianshu.io/upload_images/16846478-01cbc9b41d59471b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 3.选择环境添加配置
![009.png](https://upload-images.jianshu.io/upload_images/16846478-d116197fae174ad0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

出现如下界面：
![010.png](https://upload-images.jianshu.io/upload_images/16846478-9c7ca6ca85932d07.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

如果系统中有多个python版本，比如2.7和3.5，可通过如下两种方法修改
#### 1.修改Launch.json
>"pythonPath": "python3",//"${config.python3.pythonPath}"

如图：
![011.png](https://upload-images.jianshu.io/upload_images/16846478-6426cf39a6046694.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

可以新建.py文件，通过如下代码,查看版本
```
import sys  
print(sys.version)
```

#### 2.修改用户设置
文件->首选项->修改用户设置,如图添加：
![012.png](https://upload-images.jianshu.io/upload_images/16846478-3b5e4232b91441be.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>"python.pythonPath": "python3" 

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