---
layout: post
title:   VMware Workstation中安装linux系统（CentOS）Step by Step
author: leacoder
categories: 程序员练级之旅 
tags: 程序员练级之旅 VMware Linux
---


* content
{:toc}

# linux安装教程
## 准备一下VM虚拟机 和Linux的镜像文件

各版本的CentOS下载:

[http://man.linuxde.net/download/CentOS](http://man.linuxde.net/download/CentOS)

各版本的Ubuntu下载:

[http://man.linuxde.net/download/Ubuntu](http://man.linuxde.net/download/Ubuntu)

VMware Workstation Pro 下载 
[https://my.vmware.com/cn/web/vmware/info/slug/desktop_end_user_computing/vmware_workstation_pro/15_0](https://my.vmware.com/cn/web/vmware/info/slug/desktop_end_user_computing/vmware_workstation_pro/15_0)

直接百度云盘 链接：
[https://pan.baidu.com/s/1PjofHTRgB3Zo_OELbSaXkg](https://pan.baidu.com/s/1PjofHTRgB3Zo_OELbSaXkg)  
提取码：k1yl 

包含：虚拟机安装包（这里提供的是12版本的）、虚拟机的秘钥、CentOS-6.8-x86_64-LiveDVD.iso、ubuntu-16.04-desktop-amd64.iso

你可以安装CentOS或者ubuntu，下面以CentOS为例，如果安装 ubuntu 其中虚拟机安装步骤是相同的，镜像的安装 中系统安装可能略有差异

## 虚拟机安装步骤

运行 VMware-workstation-full-12.1.0-3272444.exe 先把 VMware Workstation装好，输入秘钥

### 1.首先新建一个虚拟机，选择自定义

![001.PNG](https://upload-images.jianshu.io/upload_images/16846478-c9ec9f405fcb6a22.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 2.选择默认值，这里默为12.0，点击下一步

![002.png](https://upload-images.jianshu.io/upload_images/16846478-fd9cf87a829c3475.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 3.选择稍后安装操作系统，点击下一步。

![003.png](https://upload-images.jianshu.io/upload_images/16846478-32d57c4b755e50f3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 4.装的是linux系统，所以这里选择Linux，并且版本选择CentOS 64位

![004.png](https://upload-images.jianshu.io/upload_images/16846478-818c0f4943040acb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 5.给虚拟机命名，并且选择存放的位置。

![005.png](https://upload-images.jianshu.io/upload_images/16846478-17c8d1035eef375f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 6.这里看电脑配置给，配置高的童鞋们可以自己修改核心数和处理器的个数。

![006.png](https://upload-images.jianshu.io/upload_images/16846478-2052fe72999479ec.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 7.虚拟机的内存，使用默认1G

![007.png](https://upload-images.jianshu.io/upload_images/16846478-30b0945c63a2e4c3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 8.网络类型这里选择仅主机模式

![008.png](https://upload-images.jianshu.io/upload_images/16846478-89249a7ca581433d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 9.这里使用默认推荐项

![009.png](https://upload-images.jianshu.io/upload_images/16846478-c17d46ce0b4e602b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 10.磁盘类型同样也使用推荐项

![010.png](https://upload-images.jianshu.io/upload_images/16846478-90e4f8a55721d2b9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 11.选择创建新的虚拟磁盘

![011.png](https://upload-images.jianshu.io/upload_images/16846478-45ee8fba60164a3a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 12.磁盘容量根据需要给（20G）,并且将虚拟磁盘存储为单个文

![012.png](https://upload-images.jianshu.io/upload_images/16846478-c1456626c74d079d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
件。

### 13.这一步默认就可以了。

![013.png](https://upload-images.jianshu.io/upload_images/16846478-b80c8604178dd5a7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 14.直接点完成就ok了。虚拟机的安装就完成了。下面介绍如何给该虚拟机添加镜像文件，并且安装该镜像文件。

![0014.png](https://upload-images.jianshu.io/upload_images/16846478-cefaf115a6d69c15.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 镜像的安装

### 1.找到我们刚刚安装完成的那个虚拟机，并点击编辑虚拟机设置

![015.png](https://upload-images.jianshu.io/upload_images/16846478-8e65c2841b02bca1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 2.选择CD/DVD，然后选择右侧的使用ISO镜像，找到我们下载的那个CentOS镜像文件。点击确定，然后点击开启虚拟机。

![016.png](https://upload-images.jianshu.io/upload_images/16846478-ec1dbd428ed49f50.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 3.按F9 进入如下界面，选择如图（版本不同可能选择也会不一样）注意 按F9时需要选中虚拟机

![017.png](https://upload-images.jianshu.io/upload_images/16846478-8ba95c5bb27b0efe.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 4.点击Next
![0018.png](https://upload-images.jianshu.io/upload_images/16846478-782a14e9cc0d4c31.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 5.安装一个简体中文版的，当然也可以安装英文版。键盘安装美国英语式。

![019.png](https://upload-images.jianshu.io/upload_images/16846478-d4cd94b08ae79e12.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 6.选择基本存储设备

![020.png](https://upload-images.jianshu.io/upload_images/16846478-ae139ece437a6e77.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 7.点击是，忽略所有数据

![021.png](https://upload-images.jianshu.io/upload_images/16846478-3dba4f4ac32a7d7c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 8.主机名 可以默认值，不要有中文

![022.png](https://upload-images.jianshu.io/upload_images/16846478-3a7f47c998b7fe1a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 9.时间选择上海

![023.png](https://upload-images.jianshu.io/upload_images/16846478-ea0538085383e0ae.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 10.设置密码

![024.png](https://upload-images.jianshu.io/upload_images/16846478-8c07606c2019b923.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 11.该选项给默认值即可

![025.png](https://upload-images.jianshu.io/upload_images/16846478-dc62725a62bb26f1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 12.将修改写入磁盘

![026.png](https://upload-images.jianshu.io/upload_images/16846478-cc22925f4992a4e4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### 13.等待，直到提示安装完成，然后重启虚拟机。按着提示一步一步设置

![027.png](https://upload-images.jianshu.io/upload_images/16846478-06755f3aaa094b40.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




----
>*GitHub链接：*
>*[https://github.com/lichangke/LeetCode](https://github.com/lichangke/LeetCode)*

>*知乎主页：*
>*[https://www.zhihu.com/people/lichangke/](https://www.zhihu.com/people/lichangke/)*

>*简书主页*
>*[https://www.jianshu.com/u/3e95c7555dc7](https://www.jianshu.com/u/3e95c7555dc7)*

>*欢迎大家来一起交流学习*

