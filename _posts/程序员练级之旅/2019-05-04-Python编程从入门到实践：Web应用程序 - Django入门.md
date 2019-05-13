---
layout: post
title:  Python编程从入门到实践：Web应用程序 - Django入门
author: leacoder
categories: 程序员练级之旅
tags: 程序员练级之旅 Python Django 
---

* content
{:toc}

## 开发系统和开发IDE
开发系统： Ubuntu 16.0.4 LTS
开发IDE：  Visual Studio Code  版本: 1.32.3
Python版本： Python3
依赖： Django 2.2

## 资料《Python编程从入门到实践》书籍
链接：[https://pan.baidu.com/s/1USkqvL2dLU3Q9XplVaGQJg ](https://pan.baidu.com/s/1USkqvL2dLU3Q9XplVaGQJg )
提取码：zoyc 

## GitHub: 
[https://github.com/lichangke/Python3_Project/tree/master/learning_log](https://github.com/lichangke/Python3_Project/tree/master/learning_log)


![1 attention.png](https://github.com/lichangke/lichangke.github.io/blob/master/img/2019-05-04-Python%E7%BC%96%E7%A8%8B%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E5%AE%9E%E8%B7%B5%EF%BC%9AWeb%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%20-%20Django%E5%85%A5%E9%97%A8.PNG?raw=true)



## 1. Django入门
Django（http://djangoproject.com/ ）

Django是一个Web框架 ——一套用于帮助开发交互式网站的工具。 

学习如何使用Django来开发一个名为“学习笔记”（Learning Log） 的项目， 这是一个在线日志系统， 让你能够记录所学习的有关特定主题的知识。

### 1.1 建立项目

阶段代码：GitHub [learning_log_1.1_建立项目](https://github.com/lichangke/Python3_Project/tree/master/learning_log/learning_log_1.1_%E5%BB%BA%E7%AB%8B%E9%A1%B9%E7%9B%AE)

不包括虚拟环境ll_env文件夹下文件


#### 1.1.1 建立虚拟环境

虚拟环境 是系统的一个位置， 你可以在其中安装包， 并将其与其他Python包隔离，将项目的库与其他项目分离是有益的。

为项目新建一个目录， 将其命名为learning_log，使用如下命令来创建虚拟环境：

>python -m venv ll_env

运行了模块venv ， 并使用它来创建一个名为ll_env的虚拟环境，成功创建如下图

![1.1.1 venv .png](https://upload-images.jianshu.io/upload_images/16846478-ea9b94f12f6431c8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 1.1.2 激活虚拟环境
建立虚拟环境后， 需要使用下面的命令激活它：

> source ll_env/bin/activate

成功激活如下图：

![1.1.2 activate.png](https://upload-images.jianshu.io/upload_images/16846478-d88af82acb3dfb79.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 1.1.3 安装Django

在虚拟环境处于活动状态时安装Django(以下无特殊说明，均在虚拟环境处于活动状态)

>pip install Django

#### 1.1.4 在Django中创建项目

>django-admin.py startproject learning_log .

![1.1.4 startproject.png](https://upload-images.jianshu.io/upload_images/16846478-222c31f08113ae8e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

*注意：千万别忘了这个句点(英文输入法)， 否则部署应用程序时将遭遇一些配置问题。 如果忘记了这个句点， 就将创建的文件和文件夹删除（ll_env除外） ， 再重新运行这个命令。*

| #   |      文件名         |  说明 | 
| ----|---------------------| -----------|
| |settings.py| 指定Django如何与你的系统交互以及如何管理项目，修改其中一些设置， 并添加一些设置 |
| |urls.py|告诉Django应创建哪些网页来响应浏览器请求|
| |wsgi.py|帮助Django提供它创建的文件， 这个文件名是web server gateway interface（Web服务器网关接口 ） 的首字母缩写。|

#### 1.1.5 创建数据库

>python manage.py migrate

![1.1.5 migrate.png](https://upload-images.jianshu.io/upload_images/16846478-41ea135b4b4b4a18.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 1.1.6 查看项目

核实Django是否正确地创建了项目。 为此， 可执行命令runserver

>python manage.py runserver

![1.1.6 runserver.png](https://upload-images.jianshu.io/upload_images/16846478-4f8936a6cac55618.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

打开一款Web浏览器， 并输入URL： http://localhost:8000/； 如果这不管用， 请输入http://127.0.0.1:8000/。 

![1.1.6 Web.png](https://upload-images.jianshu.io/upload_images/16846478-9e44f414ac6a48d6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

如果出现错误消息“That port is already in use”（指定端口已被占用） ， 请执行命令python manage.py runserver 8001 ， 让Diango使用另一个端口； 如果这个端口也不可用， 请不断执行上述命令， 并逐渐增大其中的端口号， 直到找到可用的端口。


### 1.2 创建应用程序

阶段代码：GitHub [learning_log_1.2_创建应用程序](https://github.com/lichangke/Python3_Project/tree/master/learning_log/learning_log_1.2_%E5%88%9B%E5%BB%BA%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F)

不包括虚拟环境ll_env文件夹下文件

Django项目 由一系列应用程序组成， 它们协同工作， 让项目成为一个整体。

当前， 在前面打开的终端窗口中应该还运行着runserver 。  请再打开一个终端窗口（或标签页） ， 并切换到manage.py所在的目录。 激活该虚拟环境， 再执行命令startapp ：

>python manage.py startapp learning_logs

![1.2 startapp .png](https://upload-images.jianshu.io/upload_images/16846478-1fcdeacb3f5f5ea0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

命令startapp appname 让Django建立创建应用程序所需的基础设施。 新增了一个文件夹learning_logs,其中最重要的文件是models.py、 admin.py和views.py。使用models.py来定义要在应用程序中管理的数据


#### 1.2.1 定义模型

想想涉及的数据。 每位用户都需要在学习笔记中创建很多主题。 用户输入的每个条目都与特定主题相关联， 这些条目将以文本的方式显示。 还需要存储每个条目的时间戳， 以便能够告诉用户各个条目都是什么时候创建的

**models.py**

初始
```python
from django.db import models

# Create your models here.
```
模型告诉Django如何处理应用程序中存储的数据。 在代码层面， 模型就是一个类， 包含属性和方法。

**models.py** 
```python
from django.db import models

# Create your models here.
# 创建了一个名为Topic 的类， 它继承了Model ——Django中一个定义了模型基本功能的类。 Topic 类只有两个属性： text 和date_added 。我们需要的属性
class Topic(models.Model):
    ''' 用户学习的主题'''
    # https://docs.djangoproject.com/en/2.2/ref/models/fields/#charfield
    text = models.CharField(max_length = 200) # 属性text是一个CharField——由字符或文本组成的数据
    # https://docs.djangoproject.com/en/2.2/ref/models/fields/#datetimefield
    date_added = models.DateTimeField(auto_now_add=True) # 实参auto_add_now=True 让Django将这个属性自动设置成当前日期和时间。
    def __str__(self):
        """返回模型的字符串表示"""
        return self.text
```

#### 1.2.2 激活模型

要使用模型， 必须让Django将应用程序包含到项目中。 为此， 打开settings.py（它位于目录learning_log/learning_log中） ， 你将看到一个这样的片段， 即告诉Django哪些应用程序安装在项目中：

**settings.py**

初始
```python
--snip--
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
--snip--
```
注Django版本差异，书中显示是一个元组。将 INSTALLED_APPS 修改如下
**settings.py**

```python
--snip--
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # 我的应用程序
    'learning_logs',
]
--snip--
```
接下来， 需要让Django修改数据库， 使其能够存储与模型Topic 相关的信息。

>python manage.py makemigrations learning_logs

![1.2.2 makemigrations .png](https://upload-images.jianshu.io/upload_images/16846478-33582c65776e49d8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

命令makemigrations 让Django确定该如何修改数据库， 使其能够存储与定义的新模型相关联的数据。 输出表明Django创建了一个名为0001_initial.py的迁移文件， 这个文件将在数据库中为模型Topic 创建一个表。
下面来应用这种迁移， 让Django替我们修改数据库：

>python manage.py migrate

![1.2.2 migrate.png](https://upload-images.jianshu.io/upload_images/16846478-4c7f4e6edd228cb6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

每当需要修改“学习笔记”管理的数据时， 都采取如下三个步骤： 修改models.py； 对learning_logs 调用makemigrations ； migrate让Django迁移项目。

可以查看db.sqlite3如下图，models.py中Topic 的类数据

![1.2.2 sqlite3.png](https://upload-images.jianshu.io/upload_images/16846478-253db5f9a5820425.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 1.2.3 Django管理网站

**1. 创建超级用户**


为应用程序定义模型时， Django提供的管理网站（admin site） 让你能够轻松地处理模型。

Django允许你创建具备所有权限的用户——超级用户。 权限决定了用户可执行的操作。

为在Django中创建超级用户， 请执行下面的命令并按提示做：

>python manage.py createsuperuser

![1.2.3 createsuperuser.png](https://upload-images.jianshu.io/upload_images/16846478-4443102346fd0692.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**2. 向管理网站注册模型**

Django自动在管理网站中添加了一些模型， 如User 和Group ， 但对于创建的模型， 必须手工进行注册。

创建应用程序learning_logs 时， Django在models.py所在的目录中创建了一个名为admin.py的文件：

**admin.py**

初始
```python
from django.contrib import admin
# Register your models here.
```
为向管理网站注册Topic ， 请输入下面的代码：

**admin.py**
```python
from django.contrib import admin

# Register your models here.

from learning_logs.models import Topic  # 导入我们要注册的模型Topic 

admin.site.register(Topic)  # 让Django通过管理网站管理我们的模型
```

使用超级用户账户访问管理网站： 访问http://localhost:8000/admin/ ， 并输入刚创建的超级用户的用户名和密码

![1.2.3 admin.png](https://upload-images.jianshu.io/upload_images/16846478-b95e30db99dcf8e5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

确认在终端窗口中运行着Django服务器,如果没有， 请激活虚拟环境， 并执行命令python manage.py runserver 。

可以在Topics中add新的Topic，创建 Chess 和  Rock Climbing 

#### 1.2.4 定义模型Entry
要记录学到的国际象棋和攀岩知识， 需要为用户可在学习笔记中添加的条目定义模型。 每个条目都与特定主题相关联， 这种关系被称为多对一关系， 即多个条目可关联到同一个主题。

在models.py添加Entry类代码：

**models.py**

```python
from django.db import models
class Topic(models.Model):
  --snip--
class Entry(models.Model):
    """学到的有关某个主题的具体知识"""
    # 外键是一个数据库术语， 它引用了数据库中的另一条记录； 这些代码将每个条目关联到特定的主题。 每个主题创建时， 都给它分配了一个键（或ID） 。 
    # https://docs.djangoproject.com/en/2.2/ref/models/fields/#foreignkey
    # 注 在django2.0后定义外键和一对一关系的时候需要加on_delete选项
    topic = models.ForeignKey(Topic,on_delete=models.CASCADE)
    '''
    书中源代码：
        topic = models.ForeignKey(Topic)
    '''
    text = models.TextField()
    date_added = models.DateTimeField(auto_now_add=True)
    # 在Entry 类中嵌套了Meta 类。 Meta 存储用于管理模型的额外信息， 在这里， 它让我们能够设置一个特殊属性， 让Django在需要时使用Entries 来表示多个条目。 
    class Meta:
        verbose_name_plural = 'entries'

    def __str__(self):
        """返回模型的字符串表示"""
        return self.text[:50] + "..."    # 由于条目包含的文本可能很长， 我们让Django只显示text 的前50个字符
```
#### 1.2.5 迁移模型Entry

>python manage.py makemigrations learning_logs

>python manage.py migrate

生成了一个新的迁移文件——0002_entry.py， 它告诉Django如何修改数据库， 使其能够存储与模型Entry 相关的信息。

#### 1.2.6 向管理网站注册Entry
修改 admin.py
**admin.py**
```python
from django.contrib import admin

# Register your models here.

from learning_logs.models import Topic,Entry  # 导入我们要注册的模型Topic，Entry

admin.site.register(Topic)  # 让Django通过管理网站管理我们的模型
admin.site.register(Entry)
```
返回到http://localhost/admin/ ， 你将看到learning_logs下列出了Entries。

![1.2.6 Entry.png](https://upload-images.jianshu.io/upload_images/16846478-402ec4c08d74dde2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

可以向对应的Topic中添加条目

#### 1.2.7 Django shell
输入一些数据后， 就可通过交互式终端会话以编程方式查看这些数据了。 这种交互式环境称为Django shell

>python manage.py shell

![1.2.7 shell.png](https://upload-images.jianshu.io/upload_images/16846478-424e5c1410367e5b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### 1.3 创建网页： 学习笔记主页

阶段代码：GitHub [learning_log_1.3_ 创建网页： 学习笔记主页](https://github.com/lichangke/Python3_Project/tree/master/learning_log/learning_log_1.3_%20%E5%88%9B%E5%BB%BA%E7%BD%91%E9%A1%B5%20%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0%E4%B8%BB%E9%A1%B5)

不包括虚拟环境ll_env文件夹下文件

使用Django创建网页的过程通常分三个阶段： 定义URL、 编写视图和编写模板。 urls -> views -> html  添加网页步骤。

定义URL：让Django知道如何将浏览器请求与网站URL匹配， 以确定返回哪个网页。

编写视图：每个URL都被映射到特定的视图 ——视图函数获取并处理网页所需的数据。 

编写模板：生成浏览器能够理解的网页。

#### 1.3.1 映射URL

打开项目主文件夹learning_log中的文件urls.py， 修改为

**learning_log/urls.py**
```python
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),# 该模块定义了可在管理网站中请求的所有URL
    path('', include('learning_logs.urls', namespace='learning_logs')), 
    # 代码包含实参namespace ， 让我们能够将learning_logs 的URL同项目中的其他URL区分开来
]
'''
Django版本更新,书上的代码需做相应修改

书中源代码：
from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'', include('learning_logs.urls', namespace='learning_logs')),
]
应改为：
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('learning_logs.urls', namespace='learning_logs')),
]

'''
```
默认的urls.py包含在文件夹learning_log中， 现在需要在文件夹learning_logs中创建另一个urls.py文件：(注意关于Django版本更新,书上的代码需做相应修改)

**learning_logs/urls.py**
```python
"""定义learning_logs的URL模式"""
from django.urls import path,re_path
from . import views

app_name='learning_logs' # 不能少 ，否则runserver的时候就会出错

# https://docs.djangoproject.com/en/2.2/ref/urls/#module-django.urls.conf
urlpatterns = [
    # 主页
    path('', views.index, name='index'),# Django将在文件views.py中查找函数index()
]

# urls -> views -> html  添加网页步骤

'''
Django版本更新,书上的代码需做相应修改

书中源代码：
from django.conf.urls import url
from . import views
urlpatterns = [
     # Home page.
    url(r'^$', views.index, name='index'),

    # Show all topics.
    url(r'^topics/$', views.topics, name='topics'),

    # Detail page for a single topic.
    url(r'^topics/(?P<topic_id>\d+)/$', views.topic, name='topic'),
]

应改为：
from django.urls import path
from . import views

app_name='learning_logs'
urlpatterns = [
    # 主页
    path('', views.index, name='index'),

    # 显示所有的主题
    path('topics/', views.topics, name='topics'),

    # 特定主题的详细页面
    path("topics/(?P<topic_id>\d+)/", views.topic, name='topic'),
]

'''
```
#### 1.3.2 编写视图

视图函数接受请求中的信息， 准备好生成网页所需的数据， 再将这些数据发送给浏览器——这通常是使用定义了网页是什么样的模板实现的。
learning_logs中的文件views.py是执行命令python manage.py startapp 时自动生成的， 当前其内容如下：

**views.py**

初始
```python
from django.shortcuts import render

# Create your views here.
```
这个文件只导入了函数render() ， 它根据视图提供的数据渲染响应。 下面的代码演示了该如何为主页编写视图：

**views.py**
```python
from django.shortcuts import render

# Create your views here.

def index(request):
    """学习笔记的主页"""
    return render(request, 'learning_logs/index.html')  # 这里向函数render() 提供了两个实参： 原始请求对象以及一个可用于创建网页的模板。
```
#### 1.3.3 编写模板
模板定义了网页的结构。 模板指定了网页是什么样的， 而每当网页被请求时， Django将填入相关的数据。 模板让你能够访问视图提供的任何数据。 主页视图没有提供任何数据， 因此相应的模板非常简单。

在文件夹learning_logs中新建一个文件夹， 并将其命名为templates。 在文件夹templates中， 再新建一个文件夹， 并将其命名为learning_logs。 这好像有点多余（在文件夹learning_logs中创建了文件夹templates， 又在这个文件夹中创建了文件夹learning_logs） ， 但建立了Django能够明确解读的结构， 即便项目很大， 包含很多应用程序亦如此。 在最里面的文件夹learning_logs中， 新建一个文件， 并将其命名为index.html， 再在这个文件中编写如下代码：

**index.html**
```html
<p>Learning Log</p>
<p>Learning Log helps you keep track of your learning, for any topic you're learning about.</p>
```
HTML教程：可参考runoob  [HTML 教程- (HTML5 标准)](https://www.runoob.com/html/html-tutorial.html)

请求这个项目的基础URL——http://localhost:8000/， 将看到刚才创建的网页， 而不是默认的Django网页。

![1.3.3 Web.png](https://upload-images.jianshu.io/upload_images/16846478-6982b7b919d0a8ac.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 1.4 创建其他网页

阶段代码：GitHub [learning_log_1.4_创建其他网页](https://github.com/lichangke/Python3_Project/tree/master/learning_log/learning_log_1.4_%E5%88%9B%E5%BB%BA%E5%85%B6%E4%BB%96%E7%BD%91%E9%A1%B5)


不包括虚拟环境ll_env文件夹下文件

将创建两个显示数据的网页， 其中一个列出所有的主题， 另一个显示特定主题的所有条目。 对于每个网页， 都将指定URL模式， 编写一个视图函数， 并编写一个模板。 但这样做之前， 先创建一个父模板， 项目中的其他模板都将继承它。

使用Django创建网页的过程通常分三个阶段： 定义URL、 编写视图和编写模板。 urls -> views -> html  添加网页步骤。

#### 1.4.1 模板继承

创建网站时， 几乎都有一些所有网页都将包含的元素。 在这种情况下， 可编写一个包含通用元素的父模板， 并让每个网页都继承这个模板， 而不必在每个网页中重复定义这些通用元素。 

**1.父模板**

首先来创建一个名为base.html的模板， 并将其存储在index.html所在的目录中。 这个文件包含所有页面都有的元素； 其他的模板都继承base.html。 当前， 所有页面都包含的元素只有顶端的标题。 将在每个页面中包含这个模板， 因此将这个标题设置为到主页的链接：

**learning_logs/base.html**

```html
<p>
    <a href="\{\%url 'learning_logs:index' \%\}">Learning Log</a>
</p>
\{\%block content \%\}\{\% endblock content \%\} 
```
注意： "\{\%"之间没有空格

Django 模板可阅读 runoob [Django 模板](https://www.runoob.com/django/django-template.html)

或者 Django 官网文档 [The Django template language](https://docs.djangoproject.com/en/2.2/ref/templates/language/#templates)

**2.子模板**

重新编写index.html， 使其继承base.html， 如下所示：

**learning_logs/index.html**

```html
\{\% extends "learning_logs/base.html" \%\}

\{\% block content \%\}
<p>Learning Log helps you keep track of your learning, for any topic you're learning about.</p>
\{\% endblock content \%\}
```
#### 1.4.2 显示所有主题的页面

 urls -> views -> html  添加网页步骤

**1. URL模式**

定义显示所有主题的页面的URL。 通常， 使用一个简单的URL片段来指出网页显示的信息； 将使用单词topics， 因此URL http://localhost:8000/topics/将返回显示所有主题的页面。修改learning_logs/urls.py如下

**urls.py**

```python
"""定义learning_logs的URL模式"""
from django.urls import path,re_path
from . import views
app_name='learning_logs' # 不能少 ，否则runserver的时候就会出错
# https://docs.djangoproject.com/en/2.2/ref/urls/#module-django.urls.conf
urlpatterns = [
    # 主页
    path('', views.index, name='index'),    # Django将在文件views.py中查找函数index()
    # 显示所有的主题
    path('topics/',views.topics,name = 'topics')
]
```
**2. 视图**

函数topics() 需要从数据库中获取一些数据， 并将其发送给模板。 需要在views.py中添加的代码如下：

**views.py**

```python
from django.shortcuts import render

from .models import Topic   # 导入了与所需数据相关联的模型

# Create your views here.

def index(request):
    """学习笔记的主页"""
    return render(request, 'learning_logs/index.html')  # 这里向函数render() 提供了两个实参： 原始请求对象以及一个可用于创建网页的模板。

def topics(request):
    """显示所有的主题"""
    topics = Topic.objects.order_by('date_added') # 查询数据库——请求提供Topic 对象， 并按属性date_added 对它们进行排序
    context = {'topics': topics} # 一个将要发送给模板的上下文。 上下文是一个字典， 其中的键是我们将在模板中用来访问数据的名称， 而值是我们要发送给模板的数据。 
    return render(request, 'learning_logs/topics.html', context)
```
**3. 模板**
显示所有主题的页面的模板接受字典context ， 以便能够使用topics() 提供的数据。 创建一个文件， 将其命名为topics.html， 并存储到index.html所在的目录中。 

**topics.html**

```html
\{\% extends "learning_logs/base.html" \%\}
\{\% block content \%\}
<p>Topics</p>
<ul>
    \{\% for topic in topics \%\}
    <li>{{ topic }}</li>
    \{\% empty \%\}
    <li>No topics have been added yet.</li>
    \{\% endfor \%\}
</ul>
\{\% endblock content \%\}
```
现在需要修改父模板， 使其包含到显示所有主题的页面的链接：

**base.html**

```html
<p>
    <a href="\{\% url 'learning_logs:index' \%\}">Learning Log</a> - 
    <a href="\{\% url 'learning_logs:topics' \%\}">Topics</a>
</p>

\{\% block content \%\}\{\% endblock content \%\}
```

刷新浏览器中的主页， 将看到链接Topics。 单击这个链接， 将看到如下图

![1.4.2 topics.png](https://upload-images.jianshu.io/upload_images/16846478-12b459ca16a5bac0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 1.4.3 显示特定主题的页面
创建一个专注于特定主题的页面——显示该主题的名称及该主题的所有条目

 urls -> views -> html  添加网页步骤

**1. URL模式**

显示特定主题的页面的URL模式与前面的所有URL模式都稍有不同， 因为它将使用主题的id 属性来指出请求的是哪个主题。 例如， 如果用户要查看主题Chess（其id 为1） 的详细页面， URL将为http://localhost:8000/topics/1/。 下面是与这个URL匹配的模式， 它包含在learning_logs/urls.py中：

**urls.py**
```python
"""定义learning_logs的URL模式"""
from django.urls import path,re_path
from . import views

app_name='learning_logs' # 不能少 ，否则runserver的时候就会出错

# https://docs.djangoproject.com/en/2.2/ref/urls/#module-django.urls.conf
urlpatterns = [
    # 主页
    path('', views.index, name='index'),    # Django将在文件views.py中查找函数index()

    # 显示所有的主题
    path('topics/',views.topics,name = 'topics')

    # 特定主题的详细页面
    # use a regular expression, you can use re_path(). https://stackoverflow.com/questions/47661536/django-2-0-path-error-2-0-w001-has-a-route-that-contains-p-begins-wit
    re_path(r'^topics/(?P<topic_id>\d+)/$', views.topic, name='topic'), # ?P<topic_id> 将匹配的值存储到topic_id 中； 而表达式\d+ 与包含在两个斜杆内的任何数字都匹配， 不管这个数字为多少位。
]
```

**2. 视图**

**views.py**
```python
--snip--
def topic(request, topic_id):
    """显示单个主题及其所有的条目"""
    topic = Topic.objects.get(id=topic_id)
    entries = topic.entry_set.order_by('-date_added')
    context = {'topic': topic, 'entries': entries}
    return render(request, 'learning_logs/topic.html', context)
```

**3. 模板**

这个模板需要显示主题的名称和条目的内容； 如果当前主题不包含任何条目， 还需向用户指出这一点：

**topic.html**
```html
\{\% extends 'learning_logs/base.html' \%\}
\{\% block content \%\}
<p>Topic: {{ topic }}</p>
<p>Entries:</p>
<ul>
    \{\% for entry in entries \%\}
    <li>
        <p>{{ entry.date_added|date:'M d, Y H:i' }}</p>
        <p>{{ entry.text|linebreaks }}</p>
    </li>
    \{\% empty \%\}
    <li>
        There are no entries for this topic yet.
    </li>
    \{\% endfor \%\}
</ul>
\{\% endblock content \%\}
```
**4. 将显示所有主题的页面中的每个主题都设置为链接**

在浏览器中查看显示特定主题的页面前， 需要修改模板topics.html， 让每个主题都链接到相应的网页

**topics.html**
```html
\{\% extends "learning_logs/base.html" \%\}
\{\% block content \%\}
<p>Topics</p>
<ul>
    \{\% for topic in topics \%\}
    <li>
        <a href="\{\% url 'learning_logs:topic' topic.id \%\}">{{ topic }}</a>
    </li>
    \{\% empty \%\}
    <li>No topics have been added yet.</li>
    \{\% endfor \%\}
</ul>
\{\% endblock content \%\}
```
用模板标签url 根据learning_logs中名为topic 的URL模式来生成合适的链接。 这个URL模式要求提供实参topic_id 

刷新显示所有主题的页面， 再单击其中的一个主题

![1.4.3 entries.png](https://upload-images.jianshu.io/upload_images/16846478-b6f8f5a26467d9c5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

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
