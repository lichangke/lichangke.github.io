---
layout: post
title:  Python编程从入门到实践：Web应用程序 - 用户账户
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

## Web应用程序 - Django入门
[https://www.jianshu.com/p/b3267d16c245](https://www.jianshu.com/p/b3267d16c245)


## 2. 用户账户
Web应用程序的核心是让任何用户都能够注册账户并能够使用它。将创建一些表单， 让用户能够添加主题和条目， 以及编辑既有的条目。 

然后， 将实现一个用户身份验证系统。 你将创建一个注册页面， 供用户创建账户， 并让有些页面只能供已登录的用户访问。 接下来， 将修改一些视图函数，使得用户只能看到自己的数据。 

### 2.1 让用户能够输入数据

阶段代码：GitHub [learning_log_2.1_让用户能够输入数据](https://github.com/lichangke/Python3_Project/tree/master/learning_log/learning_log_2.1_%E8%AE%A9%E7%94%A8%E6%88%B7%E8%83%BD%E5%A4%9F%E8%BE%93%E5%85%A5%E6%95%B0%E6%8D%AE)

不包括虚拟环境ll_env文件夹下文件

建立用于创建用户账户的身份验证系统之前， 先来添加几个页面， 让用户能够输入数据。 将让用户能够添加新主题、 添加新条目以及编辑既有条目。

#### 2.1.1 添加新主题

 urls -> views -> html 

首先来让用户能够添加新主题。 创建基于表单的页面的方法几乎与前面创建网页一样： 定义一个URL， 编写一个视图函数并编写一个模板。 一个主要差别是， 需要导入包含表单的模块forms.py。

**1. 用于添加主题的表单**

让用户输入并提交信息的页面都是表单， 那怕它看起来不像表单。 用户输入信息时， 需要进行验证， 确认提供的信息是正确的数据类型。然后， 再对这些有效信息进行处理， 并将其保存到数据库的合适地方。 这些工作很多都是由Django自动完成的。

创建一个名为forms.py的文件， 将其存储到models.py所在的目录中

**models.py**
```python
from django import forms
from .models import Topic

# 让用户输入并提交信息的页面都是表单， 那怕它看起来不像表单。
# 创建表单的最简单方式是使用ModelForm， 它根据在模型中的信息自动创建表单。
class TopicForm(forms.ModelForm): # 定义了一个名为TopicForm 的类， 它继承了forms.ModelForm 。
    class Meta:
        model = Topic # 根据模型Topic 创建一个表单
        fields = ['text'] # 该表单只包含字段text 
        labels = {'text': ''} # 让Django不要为字段text 生成标签。
```
**2. URL模式new_topic**

这个新网页的URL应简短而具有描述性， 因此当用户要添加新主题时， 将切换到http://localhost:8000/new_topic/。 下面是网页new_topic 的URL模式， 将其添加到learning_logs/urls.py中：

**urls.py**

```python
--snip--
urlpatterns = [
    --snip--
    # 用于添加新主题的网页
    url(r'^new_topic/$', views.new_topic, name='new_topic'),
]
```
这个URL模式将请求交给视图函数new_topic() ， 接下来将编写这个函数。

**3. 视图函数new_topic()**

函数new_topic() 需要处理两种情形： 刚进入new_topic 网页（在这种情况下， 它应显示一个空表单） ； 对提交的表单数据进行处理， 并将用户重定向到网页topics 

**views.py**

```python
from django.shortcuts import render
from django.http import HttpResponseRedirect
from .models import Topic
from .forms import TopicForm
from django.urls import reverse
# from django.core.urlresolvers import reverse
'''
https://stackoverflow.com/questions/43139081/importerror-no-module-named-django-core-urlresolvers
Django 2.0 removes the django.core.urlresolvers module, which was moved to django.urls in version 1.10.
You should change any import to use django.urls instead, like this:
from django.urls import reverse
'''
--snip--
# 函数new_topic() 需要处理两种情形： 刚进入new_topic 网页（在这种情况下， 它应显示一个空表单） ； 对提交的表单数据进行处理， 并将用户重定向到网页topics
def new_topic(request):
    """添加新主题"""
    if request.method != 'POST':
        # 未提交数据： 创建一个新表单
        form = TopicForm()  # 如果请求方法不是POST， 请求就可能是GET， 因此我们需要返回一个空表单
    else:
        if form.is_valid(): # 必须先通过检查确定它们是有效的
            form.save() # 表单中的数据写入数据库
            # 函数reverse() 根据指定的URL模型确定URL， 这意味着Django将在页面被请求时生成URL。 
            # 调用HttpResponseRedirect() 将用户重定向到显示新增条目所属主题的页面
            return HttpResponseRedirect(reverse('learning_logs:topics'))
    context = {'form': form}
    return render(request, 'learning_logs/new_topic.html', context)
    '''
    创建Web应用程序时， 将用到的两种主要请求类型是GET请求和POST请求。 对于只是从服务器读取数据的页面， 使用GET请求； 在用户需要通过表单提交信息时， 通常使用POST
    请求。 处理所有表单时， 我们都将指定使用POST方法。 还有一些其他类型的请求， 但这个项目没有使用。
    函数new_topic() 将请求对象作为参数。 用户初次请求该网页时， 其浏览器将发送GET请求； 用户填写并提交表单时， 其浏览器将发送POST请求。 根据请求的类型， 我们可以
    确定用户请求的是空表单（GET请求） 还是要求对填写好的表单进行处理（POST请求） 。
    '''
```

**4. 模板new_topic**

创建新模板new_topic.html， 用于显示刚创建的表单

**new_topic.html**

```html
\{\% extends "learning_logs/base.html" \%\}
\{\% block content \%\}
<p>Add a new topic:</p>
<!--定义了一个HTML表单-->
<!--实参action 告诉服务器将提交的表单数据发送到哪里， 这里我们将它发回给视图函数new_topic() 。 实参method 让浏览器以POST请求的方式提交数据。-->
<form action="\{\% url 'learning_logs:new_topic' \%\}" method='post'>
    \{\% csrf_token \%\} <!--防止攻击者利用表单来获得对服务器未经授权的访问-->
    {{ form.as_p }} <!--显示表单修饰符as_p 让Django以段落格式渲染所有表单元素， 这是一种整洁地显示表单的简单方式-->
    <button name="submit">add topic</button> <!--Django不会为表单创建提交按钮， 因此定义了一个这样的按钮-->
</form>
\{\% endblock content \%\}
```
**5. 链接到页面new_topic**

在页面topics 中添加一个到页面new_topic 的链接：

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
<a href="\{\% url 'learning_logs:new_topic' \%\}">Add a new topic:</a>
\{\% endblock content \%\}
```
链接放在了既有主题列表的后面。 下图显示了生成的表单。 

![2.1.1 add new topic.png](https://upload-images.jianshu.io/upload_images/16846478-e4bf1320acca7f88.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 2.1.2 添加新条目

urls -> views -> html 添加网页步骤

用户可以添加新主题了， 但他们还想添加新条目。 将再次定义URL， 编写视图函数和模板， 并链接到添加新条目的网页。 但在此之前， 需要在forms.py中再添加一个类。

**1. 用于添加新条目的表单**

创建一个与模型Entry 相关联的表单

**forms.py**

```python
from django import forms
from .models import Topic, Entry
class TopicForm(forms.ModelForm):
--snip--
class EntryForm(forms.ModelForm):
    class Meta:
        model = Entry
        fields = ['text']
        labels = {'text': ''}
        widgets = {'text': forms.Textarea(attrs={'cols': 80})}
        '''
        定义了属性widgets 。 小部件 （widget） 是一个HTML表单元素， 如单行文本框、 多行文本区域或下拉列表。 通过设置属性widgets ， 可覆盖Django选择的默认小
        部件。 通过让Django使用forms.Textarea ， 我们定制了字段'text' 的输入小部件， 将文本区域的宽度设置为80列， 而不是默认的40列。 这给用户提供了足够的空间， 可以
        编写有意义的条目。
        '''
```
**2. URL模式new_entry**

添加新条目的页面的URL模式中， 需要包含实参topic_id ， 因为条目必须与特定的主题相关联。 该URL模式如下， 将它添加到了learning_logs/urls.py中

**urls.py**

```python
--snip--
urlpatterns = [
    --snip--
    # 用于添加新条目的页面
    re_path(r'^new_entry/(?P<topic_id>\d+)/$', views.new_entry, name='new_entry'),
]
```
**3. 视图函数new_entry()**

**views.py**

```python
--snip--
from .models import Topic
from .forms import TopicForm,EntryForm
from django.urls import reverse
--snip--

def new_entry(request, topic_id):
    """在特定的主题中添加新条目"""
    topic = Topic.objects.get(id=topic_id)
    if request.method != 'POST':
        # 未提交数据,创建一个空表单
        form = EntryForm()
    else:
        # POST提交的数据,对数据进行处理
        form = EntryForm(data=request.POST)
        if form.is_valid(): 
            # 调用save() 时， 传递了实参commit=False , 让Django创建一个新的条目对象， 并将其存储到new_entry 中， 但不将它保存到数据库中。
            new_entry = form.save(commit=False)
            new_entry.topic = topic # 将new_entry的属性topic 设置为在这个函数开头从数据库中获取的主题
            new_entry.save()    # 调用save() ， 且不指定任何实参。 这将把条目保存到数据库， 并将其与正确的主题相关联。
            return HttpResponseRedirect(reverse('learning_logs:topic',args=[topic_id]))
    context = {'topic': topic, 'form': form}
    return render(request, 'learning_logs/new_entry.html', context)
```
**4. 模板new_entry**

**new_entry.html**

```html
\{\% extends "learning_logs/base.html" \%\}
\{\% block content \%\}
<p><a href="\{\% url 'learning_logs:topic' topic.id \%\}">{{ topic }}</a></p>
<p>Add a new entry:</p>
<form action="\{\% url 'learning_logs:new_entry' topic.id \%\}" method='post'>
    \{\% csrf_token \%\}
    {{ form.as_p }}
    <button name='submit'>add entry</button>
</form>
\{\% endblock content \%\}
```
**5. 链接到页面new_entry**

在显示特定主题的页面中添加到页面new_entry 的链接

**topic.html**
```html
\{\% extends 'learning_logs/base.html' \%\}
\{\% block content \%\}
<p>Topic: {{ topic }}</p>
<p>Entries:</p>
<p>
    <a href="\{\% url 'learning_logs:new_entry' topic.id \%\}">add new entry</a>
</p>
<ul>
--snip—
</ul>
\{\% endblock content \%\}
```
下图显示了页面new_entry

![2.1.2 new_entry.png](https://upload-images.jianshu.io/upload_images/16846478-a63a2031caa1c698.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 2.1.3 编辑条目

urls -> views -> html 添加网页步骤

创建一个页面， 让用户能够编辑既有的条目。

**1. URL模式edit_entry**

这个页面的URL需要传递要编辑的条目的ID。 修改后的learning_logs/urls.py如下

**urls.py**
```python
--snip--
# https://docs.djangoproject.com/en/2.2/ref/urls/#module-django.urls.conf
urlpatterns = [
    # 主页
    path('', views.index, name='index'),    # Django将在文件views.py中查找函数index()

    # 显示所有的主题
    path('topics/',views.topics,name = 'topics'),

    # 特定主题的详细页面
    # use a regular expression, you can use re_path(). https://stackoverflow.com/questions/47661536/django-2-0-path-error-2-0-w001-has-a-route-that-contains-p-begins-wit
    re_path(r'^topics/(?P<topic_id>\d+)/$', views.topic, name='topic'), # ?P<topic_id> 将匹配的值存储到topic_id 中； 而表达式\d+ 与包含在两个斜杆内的任何数字都匹配， 不管这个数字为多少位。

    # 用于添加新主题的网页    
    path('new_topic/', views.new_topic, name = 'new_topic'),

    # 用于添加新条目的页面
    re_path(r'^new_entry/(?P<topic_id>\d+)/$', views.new_entry, name='new_entry'),

    # 用于编辑条目的页面
    re_path(r'^edit_entry/(?P<entry_id>\d+)/$',views.edit_entry,name='edit_entry')
]
```
在URL（如http://localhost:8000/edit_entry/1/） 中传递的ID存储在形参entry_id 中。 这个URL模式将预期匹配的请求发送给视图函数edit_entry()

**2. 视图函数edit_entry()**

页面edit_entry 收到GET请求时， edit_entry() 将返回一个表单， 让用户能够对条目进行编辑。 该页面收到POST请求（条目文本经过修订） 时， 它将修改后的文本保存到数据库中：

**views.py**

```python
--snip--
from .models import Topic, Entry
from .forms import TopicForm, EntryForm
--snip--
def edit_entry(request, entry_id):
    """编辑既有条目"""
    entry = Entry.objects.get(id=entry_id)
    topic = entry.topic

    if request.method != 'POST':
        # 初次请求， 使用当前条目填充表单
        form = EntryForm(instance=entry)
    else:
        # POST提交的数据， 对数据进行处理
        # 让Django根据既有条目对象创建一个表单实例， 并根据request.POST 中的相关数据对其进行修改
        form = EntryForm(instance=entry, data=request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('learning_logs:topic',args=[topic.id]))
    context = {'entry': entry, 'topic': topic, 'form': form}
    return render(request, 'learning_logs/edit_entry.html', context)
```
**3. 模板edit_entry**

**edit_entry.html**

```html
\{\% extends "learning_logs/base.html" \%\}
\{\% block content \%\}
<p><a href="\{\% url 'learning_logs:topic' topic.id \%\}">{{ topic }}</a></p>
<p>Edit entry:</p>
<form action="\{\% url 'learning_logs:edit_entry' entry.id \%\}" method='post'> <!--实参action 将表单发回给函数edit_entry() 进行处理-->
    \{\% csrf_token \%\}
    {{ form.as_p }}
    <button name="submit">save changes</button>
</form>
\{\% endblock content \%\}
```

**4. 链接到页面edit_entry**

在显示特定主题的页面中， 需要给每个条目添加到页面edit_entry 的链接：

**topic.html**

```html
--snip--
\{\% for entry in entries \%\}
    <li>
        <p>{{ entry.date_added|date:'M d, Y H:i' }}</p>
        <p>{{ entry.text|linebreaks }}</p>
        <p>
            <a href="\{\% url 'learning_logs:edit_entry' entry.id \%\}">edit entry</a>
        </p>
    </li>
--snip--
```
下图显示了包含这些链接时， 显示特定主题的页面是什么样的

![2.1.3 edit entry.png](https://upload-images.jianshu.io/upload_images/16846478-aba0bc38bc9561c8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### 2.2 创建用户账户

阶段代码：GitHub [learning_log_2.2_创建用户账户](https://github.com/lichangke/Python3_Project/tree/master/learning_log/learning_log_2.2_%E5%88%9B%E5%BB%BA%E7%94%A8%E6%88%B7%E8%B4%A6%E6%88%B7)

不包括虚拟环境ll_env文件夹下文件

将建立一个用户注册和身份验证系统， 让用户能够注册账户， 进而登录和注销。 将创建一个新的应用程序， 其中包含与处理用户账户相关的所有功能。 还将对模型Topic 稍做修改， 让每个主题都归属于特定用户。



#### 2.2.1 应用程序users

步骤：

startapp创建应用程序 -> 将应用程序添加到settings.py -> 包含应用程序users 的URL

先使用命令startapp 来创建一个名为users 的应用程序

>python manage.py startapp users

![2.2.1 startapp.png](https://upload-images.jianshu.io/upload_images/16846478-510f72af5bc21d17.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**1. 将应用程序users 添加到settings.py中**

在settings.py中， 我们需要将这个新的应用程序添加到INSTALLED_APPS 中

**settings.py**
```python
--snip--
INSTALLED_APPS = (
--snip--
# 我的应用程序
'learning_logs',
'users',
)-
-snip
```
**2. 包含应用程序users 的URL**

需要修改项目根目录中的urls.py， 使其包含为应用程序users 定义的URL：

**urls.py**

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),# 该模块定义了可在管理网站中请求的所有URL
    path('', include('learning_logs.urls', namespace='learning_logs')), 
    # 代码包含实参namespace ， 让我们能够将learning_logs 的URL同项目中的其他URL区分开来
    path('users/',include('users.urls', namespace='users')), # 这行代码与任何以单词users打头的URL（如http://localhost:8000/users/login/） 都匹配
]
```
#### 2.2.2 登录页面

首先来实现登录页面的功能。 为此， 将使用Django提供的默认登录视图， 因此URL模式会稍有不同。 在目录learning_log/users/中， 新建一个名为urls.py的文件， 并在其中添加如下代码：

**urls.py**

```python
"""为应用程序users定义URL模式"""

# 非 from django.conf.urls import url
from django.urls import path,re_path
from django.contrib.auth.views import LoginView
# from django.contrib.auth.views import login  In django-2.1, the old function-based views have been removed,

from . import views

app_name= 'users'# 不能少

urlpatterns = [
    # 登录页面
    # re_path(r'^login/$', login, {'template_name': 'users/login.html'},name='login'),
    re_path(r'^login/$',LoginView.as_view(template_name='users/login.html'),name='login')
]
```
注意 注释部分为原书中代码，Django版本不同需使用新的方式。app_name= 'users'# 不能少

**1. 模板login.html**

用户请求登录页面时， Django将使用其默认视图login ， 但依然需要为这个页面提供模板。 为此， 在目录learning_log/users/中， 创建一个名为templates的目录， 并在其中创建一个名为users的目录。 以下是模板login.html， 你应将其存储到目录learning_log/users/templates/users/中：

**login.html**

```html
\{\% extends "learning_logs/base.html" \%\}

\{\% block content \%\}

\{\% if form.errors \%\}
<p>Your username and password didn't match. Please try again.</p>
\{\% endif \%\}

<form method="post" action="\{\% url 'users:login' \%\}">
    \{\% csrf_token \%\}
    {{ form.as_p }}
    <button name="submit">log in</button>
    <input type="hidden" name="next" value="\{\% url 'learning_logs:index' \%\}" />
    <!--包含了一个隐藏的表单元素——'next' ， 其中的实参value 告诉Django在用户成功登录后将其重定向到什么地方——在这里是主页。-->
</form>

\{\% endblock content \%\}
```
**2. 链接到登录页面**

在base.html中添加到登录页面的链接， 让所有页面都包含它。 用户已登录时， 我们不想显示这个链接， 因此将它嵌套在一个 if  标签中

**base.html**

```html
<p>
    <a href="\{\% url 'learning_logs:index' \%\}">Learning Log</a> -
    <a href="\{\% url 'learning_logs:topics' \%\}">Topics</a>
    <!--在Django身份验证系统中， 每个模板都可使用变量user ， 这个变量有一个is_authenticated 属性： 如果用户已登录， 该属性将为True ， 否则为False 。-->
    \{\% if user.is_authenticated \%\}
    Hello, {{ user.username }}.
    \{\% else \%\}
    <a href="\{\% url 'users:login' \%\}">log in</a>
    \{\% endif \%\}
</p>

\{\% block content \%\}\{\% endblock content \%\}
```

**3. 使用登录页面**

前面建立了一个用户账户， 下面来登录一下， 看看登录页面是否管用。 请访问http://localhost:8000/admin/， 如果你依然是以管理员的身份登录的， 请在页眉上找到注销链接并单击它。

访问http://localhost:8000/users/login/， 你将看到类似于下图所示的登录页面。 

![2.2.2 login.png](https://upload-images.jianshu.io/upload_images/16846478-6497cf11b78c92bd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 2.2.3 注销

需要提供一个让用户注销的途径。 我们不创建用于注销的页面， 而让用户只需单击一个链接就能注销并返回到主页。 为此， 将为注销链接定义一个URL模式， 编写一个视图函数， 并在base.html中添加一个注销链接

**1. 注销URL**

下面的代码为注销定义了URL模式， 该模式与URL http://locallwst:8000/users/logout/匹配。 修改后的users/urls.py如下

**urls.py**

```python
--snip--
urlpatterns = [
    # 登录页面
    # re_path(r'^login/$', login, {'template_name': 'users/login.html'},name='login'),
    re_path(r'^login/$',LoginView.as_view(template_name='users/login.html'),name='login'),
    # 注销
    re_path(r'^logout/$', views.logout_view, name='logout'),
]
```

这个URL模式将请求发送给函数logout_view() 。 这样给这个函数命名， 旨在将其与我们将在其中调用的函数logout() 区分开来（请确保你修改的是users/urls.py， 而不是learning_log/ urls.py） 。

**2. 视图函数logout_view()**

函数logout_view() 很简单： 只是导入Django函数logout() ， 并调用它， 再重定向到主页。 请打开users/views.py， 并输入下面的代码

**views.py**

```python
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth import logout

# Create your views here.
def logout_view(request):
    """注销用户"""
    logout(request)
    return HttpResponseRedirect(reverse('learning_logs:index'))
```
**3. 链接到注销视图**

需要添加一个注销链接。 我们在base.html中添加这种链接， 让每个页面都包含它； 将它放在标签 if user.is_authenticated  中， 使得仅当用户登录后才能看到它：

**base.html**

```html
--snip--
    \{\% if user.is_authenticated \%\}
    Hello, {{ user.username }}.
    <a href="\{\% url 'users:logout' \%\}">log out</a>
    \{\% else \%\}
    <a href="\{\% url 'users:login' \%\}">log in</a>
    \{\% endif \%\}
--snip--
```
下图显示了用户登录后看到的主页

![2.2.3 logout.png](https://upload-images.jianshu.io/upload_images/16846478-58e6c6ca1e9d2e1e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 2.2.4 注册页面

下面来创建一个让新用户能够注册的页面。 将使用Django提供的表单UserCreationForm ， 但编写自己的视图函数和模板。

**1. 注册页面的URL模式**

下面的代码定义了注册页面的URL模式， 它也包含在users/urls.py中

**urls.py**

```python
--snip--
urlpatterns = [
    # 登录页面
    --snip--
    # 注册页面
    re_path(r'^register/$', views.register, name='register'), # 与URL http://localhost:8000/users/register/匹配， 并将请求发送给我们即将编写的函数register()
]
```
这个模式与URL http://localhost:8000/users/register/匹配， 并将请求发送给我们即将编写的函数register() 。

**2. 视图函数register()**

在注册页面首次被请求时， 视图函数register() 需要显示一个空的注册表单， 并在用户提交填写好的注册表单时对其进行处理。 如果注册成功， 这个函数还需让用户自动登录。 请在users/views.py中添加如下代码

**views.py**

```python
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth import login,logout,authenticate
from django.contrib.auth.forms import UserCreationForm


# Create your views here.
def logout_view(request):
    --snip--
def register(request):
    """注册新用户"""
    if request.method != 'POST':
        # 显示空的注册表单
        form = UserCreationForm()
    else:
        # 处理填写好的表单   
        form = UserCreationForm(data=request.POST)
        if form.is_valid():
            new_user = form.save()
            # 让用户自动登录， 再重定向到主页
            authenticated_user = authenticate(username=new_user.username,password=request.POST['password1'])
            login(request, authenticated_user)
            return HttpResponseRedirect(reverse('learning_logs:index'))

    context = {'form': form} 
    return render(request, 'users/register.html', context)   
```

**3. 注册模板**

注册页面的模板与登录页面的模板类似， 请务必将其保存到login.html所在的目录中

**register.html**

```html
\{\% extends "learning_logs/base.html" \%\}
\{\% block content \%\}
<form method="post" action="\{\% url 'users:register' \%\}">
    \{\% csrf_token \%\}
    {{ form.as_p }}
    <button name="submit">register</button>
    <input type="hidden" name="next" value="\{\% url 'learning_logs:index' \%\}" />
</form>
\{\% endblock content \%\}
```
使用了方法as_p ， 让Django在表单中正确地显示所有的字段， 包括错误消息——如果用户没有正确地填写表单。

**4. 链接到注册页面**

添加这样的代码， 即在用户没有登录时显示到注册页面的链接

**base.html**

```html
--snip--
    \{\% if user.is_authenticated \%\}
    Hello, {{ user.username }}.
    <a href="\{\% url 'users:logout' \%\}">log out</a>
    \{\% else \%\}
    <a href="\{\% url 'users:register' \%\}">register</a> -
    <a href="\{\% url 'users:login' \%\}">log in</a>
    \{\% endif \%\}
--snip--
```
如下图所示
![2.2.4 register.png](https://upload-images.jianshu.io/upload_images/16846478-b9c0c52a91213eb3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 2.3 让用户拥有自己的数据

阶段代码：GitHub [learning_log_2.3_让用户拥有自己的数据](https://github.com/lichangke/Python3_Project/tree/master/learning_log/learning_log_2.3_%E8%AE%A9%E7%94%A8%E6%88%B7%E6%8B%A5%E6%9C%89%E8%87%AA%E5%B7%B1%E7%9A%84%E6%95%B0%E6%8D%AE)


不包括虚拟环境ll_env文件夹下文件

用户应该能够输入其专有的数据， 因此将创建一个系统， 确定各项数据所属的用户， 再限制对页面的访问， 让用户只能使用自己的数据

将修改模型Topic ， 让每个主题都归属于特定用户。 这也将影响条目， 因为每个条目都属于特定的主题。 先来限制对一些页面的访问。

#### 2.3.1 使用@login_required 限制访问

Django提供了装饰器@login_required ， 让你能够轻松地实现这样的目标： 对于某些页面， 只允许已登录的用户访问它们。 装饰器 （decorator） 是放在函数定义前面的指令， Python在函数运行前， 根据它来修改函数代码的行为。

**1. 限制对topics 页面的访问**

每个主题都归特定用户所有， 因此应只允许已登录的用户请求topics 页面。 为此， 在learning_logs/views.py中添加如下代码

**views.py**

```python
--snip--
from django.contrib.auth.decorators import login_required
--snip--
#Django提供了装饰器@login_required ， 让你能够轻松地实现这样的目标： 对于某些页面， 只允许已登录的用户访问它们
@login_required  
def topics(request):
    """显示所有的主题"""
--snip--
```
导入了函数login_required() 。 我们将login_required() 作为装饰器用于视图函数topics() ——在它前面加上符号@ 和login_required ， 让Python在运行topics() 的代码前先运行login_required() 的代码。

login_required() 的代码检查用户是否已登录， 仅当用户已登录时， Django才运行topics() 的代码。 如果用户未登录， 就重定向到登录页面。

为实现这种重定向， 需要修改settings.py， 让Django知道到哪里去查找登录页面。 请在settings.py末尾添加如下代码

**settings.py**

```python

--snip--
# 我的设置
LOGIN_URL = '/users/login/'
```
如果未登录的用户请求装饰器@login_required 的保护页面， Django将重定向到settings.py中的LOGIN_URL 指定的URL

**2. 全面限制对项目“学习笔记”的访问**

Django让你能够轻松地限制对页面的访问， 但你必须针对要保护哪些页面做出决定。 最好先确定项目的哪些页面不需要保护， 再限制对其他所有页面的访问。 可以轻松地修改过于严格的访问限制， 其风险比不限制对敏感页面的访问更低。

在项目“学习笔记”中， 将不限制对主页、 注册页面和注销页面的访问， 并限制对其他所有页面的访问。

在下面的learning_logs/views.py中， 对除index() 外的每个视图都应用了装饰器@login_required

**views.py**

```python
--snip--
@login_required
def topics(request):
--snip--
@login_required
def topic(request, topic_id):
--snip--
@login_required
def new_topic(request):
--snip--
@login_required
def new_entry(request, topic_id):
--snip--
@login_required
def edit_entry(request, entry_id):
--snip
```
#### 2.3.2 将数据关联到用户

需要将数据关联到提交它们的用户。 我们只需将最高层的数据关联到用户， 这样更低层的数据将自动关联到用户。  例如， 在项目“学习笔记”中， 应用程序的最高层数据是主题， 而所有条目都与特定主题相关联。 只要每个主题都归属于特定用户， 我们就能确定数据库中每个条目的所有者。

修改模型Topic ， 在其中添加一个关联到用户的外键。 这样做后， 我们必须对数据库进行迁移。 最后， 我们必须对有些视图进行修改， 使其只显示与当前登录的用户相关
联的数据

**1. 修改模型Topic**

对models.py的修改只涉及两行代码：

**models.py**

```python
from django.db import models
from django.contrib.auth.models import User
class Topic(models.Model):
    ''' 用户学习的主题'''
    # https://docs.djangoproject.com/en/2.2/ref/models/fields/#charfield
    text = models.CharField(max_length = 200) # 属性text是一个CharField——由字符或文本组成的数据
    # https://docs.djangoproject.com/en/2.2/ref/models/fields/#datetimefield
    date_added = models.DateTimeField(auto_now_add=True) # 实参auto_add_now=True 让Django将这个属性自动设置成当前日期和时间。
    owner = models.ForeignKey(User,on_delete=models.CASCADE) # 
    def __str__(self):
        """返回模型的字符串表示"""
        return self.text

class Entry(models.Model):
    --snip--
```

**2. 确定当前有哪些用户**

迁移数据库时， Django将对数据库进行修改， 使其能够存储主题和用户之间的关联。 为执行迁移， Django需要知道该将各个既有主题关联到哪个用户。 最简单的办法是， 将既有主题都关联到同一个用户， 如超级用户。 为此， 我们需要知道该用户的ID。

查看已创建的所有用户的ID。 为此， 启动一个Django shell会话， 并执行如下命令：

> python manage.py shell

![2.3.2 shell.png](https://upload-images.jianshu.io/upload_images/16846478-17b8a93237f6ea38.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**3. 迁移数据库**

知道用户ID后， 就可以迁移数据库了

>python manage.py makemigrations learning_logs

![2.3.2 makemigrations .png](https://upload-images.jianshu.io/upload_images/16846478-d40521ed3a68d5a1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

为将所有既有主题都关联到管理用户ll_admin， 我输入了用户ID值2。并非必须使用超级用户， 而可使用已创建的任何用户的ID。 接下来， Django使用这个值来迁移数据库， 并生成了迁移文件0003_topic_owner.py， 它在模型Topic 中添加字段owner 。

现在可以执行迁移了。 为此， 在活动的虚拟环境中执行下面的命令

>python manage.py migrate

![2.3.2 migrate.png](https://upload-images.jianshu.io/upload_images/16846478-63dfeac65a32e1e1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

为验证迁移符合预期， 可在shell会话中像下面这样做：

![2.3.2 shell.png](https://upload-images.jianshu.io/upload_images/16846478-a5cbc6e6243a50b0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 2.3.3 只允许用户访问自己的主题

当前， 不管你以哪个用户的身份登录， 都能够看到所有的主题。 改变这种情况， 只向用户显示属于自己的主题

在views.py中， 对函数topics() 做如下修改

**views.py**

```python
--snip--
 # Django提供了装饰器@login_required ， 让你能够轻松地实现这样的目标： 对于某些页面， 只允许已登录的用户访问它们
@login_required
def topics(request):
    """显示所有的主题"""
    # topics = Topic.objects.order_by('date_added') # 查询数据库——请求提供Topic 对象， 并按属性date_added 对它们进行排序
    topics = Topic.objects.filter(owner=request.user).order_by('date_added')
    context = {'topics': topics} # 一个将要发送给模板的上下文。 上下文是一个字典， 其中的键是我们将在模板中用来访问数据的名称， 而值是我们要发送给模板的数据。 
    return render(request, 'learning_logs/topics.html', context)
--snip--
```

要查看结果， 以所有既有主题关联到的用户的身份登录， 并访问topics页面， 你将看到所有的主题。 然后， 注销并以另一个用户的身份登录， topics页面将不会列出任何主题。

#### 2.3.4 保护用户的主题

还没有限制对显示单个主题的页面的访问， 因此任何已登录的用户都可输入类似于http://localhost:8000/topics/1/的URL， 来访问显示相应主题的页面

为修复这种问题， 我们在视图函数topic() 获取请求的条目前执行检查：

**views.py**

```python
--snip--
from django.http import HttpResponseRedirect, Http404
--snip--
@login_required
def topic(request, topic_id):
    """显示单个主题及其所有的条目"""
    topic = Topic.objects.get(id=topic_id)
    # 确认请求的主题属于当前用户
    if topic.owner != request.user:
        raise Http404
    entries = topic.entry_set.order_by('-date_added')
    context = {'topic': topic, 'entries': entries}
    return render(request, 'learning_logs/topic.html', context)
--snip--
```
导入了异常Http404,并在用户请求它不能查看的主题时引发这个异常

![2.3.4 Http404.png](https://upload-images.jianshu.io/upload_images/16846478-3d73ab158708cb91.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 2.3.5 保护页面edit_entry

页面edit_entry 的URL为http://localhost:8000/edit_entry/entry_id / ， 其中 entry_id 是一个数字。 下面来保护这个页面， 禁止用户通过输入类似于前面的URL来访问其他用户的条目

**views.py**

```python
--snip--
@login_required
def edit_entry(request, entry_id):
    """编辑既有条目"""
    entry = Entry.objects.get(id=entry_id)
    topic = entry.topic

    if topic.owner != request.user: # 保护页面edit_entry
        raise Http404

    if request.method != 'POST':
        # 初次请求， 使用当前条目填充表单
        form = EntryForm(instance=entry)
    else:
        # POST提交的数据， 对数据进行处理
        # 让Django根据既有条目对象创建一个表单实例， 并根据request.POST 中的相关数据对其进行修改
        form = EntryForm(instance=entry, data=request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('learning_logs:topic',args=[topic.id]))
    context = {'entry': entry, 'topic': topic, 'form': form}
    return render(request, 'learning_logs/edit_entry.html', context)
```
获取指定的条目以及与之相关联的主题， 然后检查主题的所有者是否是当前登录的用户， 如果不是， 就引发Http404 异常

#### 2.3.6 将新主题关联到当前用户

当前， 用于添加新主题的页面存在问题， 因此它没有将新主题关联到特定用户。 如果你尝试添加新主题， 将看到错误消息IntegrityError ， 指出learning_logs_topic.user_id 不能为NULL 。 Django的意思是说， 创建新主题时， 你必须指定其owner 字段的值。

可以通过request 对象获悉当前用户， 因此存在一个修复这种问题的简单方案。 请添加下面的代码， 将新主题关联到当前用户：

**views.py**

```python
--snip--
@login_required
def new_topic(request):
    """添加新主题"""
    if request.method != 'POST':
        # 未提交数据： 创建一个新表单
        form = TopicForm()  # 如果请求方法不是POST， 请求就可能是GET， 因此我们需要返回一个空表单
    else:
        '''
        if form.is_valid(): # 必须先通过检查确定它们是有效的
            form.save() # 表单中的数据写入数据库
            # 函数reverse() 根据指定的URL模型确定URL， 这意味着Django将在页面被请求时生成URL。 
            # 调用HttpResponseRedirect() 将用户重定向到显示新增条目所属主题的页面
            return HttpResponseRedirect(reverse('learning_logs:topics'))
        '''
        if form.is_valid(): # 将新主题关联到当前用户
            new_topic = form.save(commit=False)
            new_topic.owner = request.user
            new_topic.save()
            return HttpResponseRedirect(reverse('learning_logs:topics'))
    context = {'form': form}
    return render(request, 'learning_logs/new_topic.html', context)
--snip--
```

现在， 这个项目允许任何用户注册， 而每个用户想添加多少新主题都可以。 每个用户都只能访问自己的数据， 无论是查看数据、 输入新数据还是修改旧数据时都如此。


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