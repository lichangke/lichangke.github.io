---
layout: post
title:  Python编程从入门到实践：Web-API简单使用与可视化
author: leacoder
categories: 程序员练级之旅
tags: 程序员练级之旅 Python Project requests pygal
---

* content
{:toc}

## 开发系统和开发IDE

开发系统： Ubuntu 16.0.4 LTS

开发IDE：  Visual Studio Code  版本: 1.32.3

Python版本： Python3

依赖库：  requests 、 pygal

## 资料《Python编程从入门到实践》书籍
链接：[https://pan.baidu.com/s/1USkqvL2dLU3Q9XplVaGQJg ](https://pan.baidu.com/s/1USkqvL2dLU3Q9XplVaGQJg )
提取码：zoyc 

## GitHub: 
[https://github.com/lichangke/Python3_Project/tree/master/web_api](https://github.com/lichangke/Python3_Project/tree/master/web_api)

## 相关第三方库
requests ：[https://2.python-requests.org/zh_CN/latest/](https://2.python-requests.org/zh_CN/latest/)

> pip install --user requests

pygal：[http://www.pygal.org/en/stable/](http://www.pygal.org/en/stable/)

>pip install --user pygal

## 目录文件结构
![Web API简单使用与可视化.png](https://upload-images.jianshu.io/upload_images/16846478-b24584212ef3703f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

使用GitHub的API来请求有关该网站中Python项目的信息， 然后使用Pygal生成交互式
可视化， 以呈现这些项目的受欢迎程度。

|#| 文件名|    内容 | 
| -|------| -----------|
| -|.vscode| VSCode 配置|
| -|bar_descriptions.py| pygal生成条形图测试|
| -|python_repos.py| 通过Web API接口获取数据，使用pygal可视化|
| -|python_repos.svg| 生成的界面|
| -|urlresult.json| 使用GitHub的API获取的当前数据|

### bar_descriptions.py

```python
import pygal
from pygal.style import LightColorizedStyle as LCS, LightenStyle as LS

my_style = LS('#333366', base_style=LCS)

chart = pygal.Bar(style=my_style, x_label_rotation=45, show_legend=False)
chart.title = 'Python Projects'
chart.x_labels = ['httpie', 'django', 'flask']

plot_dicts = [
    {'value': 16101, 'label': 'Description of httpie.'},
    {'value': 15028, 'label': 'Description of django.'},
    {'value': 14798, 'label': 'Description of flask.'},
]
chart.add('', plot_dicts)
chart.render_to_file('bar_descriptions.svg')
```
### python_repos.py
```python
#!/usr/bin/env python
# -*- encoding: utf-8 -*-
'''
@File    :   python_repos.py
@Time    :   2019/04/26 23:01:12
@Author  :   leacoder
@Version :   1.0
@Contact :   leacock1991@gmail.com
@License :   
@Desc    :   None
'''

# here put the import lib
from pygal.style import LightColorizedStyle as LCS, LightenStyle as LS
import pygal
import requests

# 执行API调用并存储响应
url = 'https://api.github.com/search/repositories?q=language:python&sort=stars'

result = requests.get(url)

print("Status code:", result.status_code)

# 将API响应存储在一个变量中
response_dict = result.json()
print("Total repositories:", response_dict['total_count'])
# 探索有关仓库的信息
repo_dicts = response_dict['items']
print("Repositories returned:", len(repo_dicts))

print("\nSelected information about first repository:")

names, stars, plot_dicts = [], [], []
# 遍历仓库提取数据
for repo_dict in repo_dicts:
    names.append(repo_dict['name'])
    print('\nName:', repo_dict['name'])
    print('Owner:', repo_dict['owner']['login'])
    stars.append(repo_dict['stargazers_count'])
    print('Stars:', repo_dict['stargazers_count'])
    print('Repository:', repo_dict['html_url'])
    print('Description:', repo_dict['description'])
    # 规避 由于网络原因部分未获取到时，plot_dict 为 None，导致 chart.render_to_file('python_repos.svg') 报错 AttributeError: 'NoneType' object has no attribute 'decode'
    if not repo_dict['stargazers_count']:
        repo_dict['stargazers_count'] = "None"
        breakpoint() # 注 此内置函数 New in version 3.7.+
    if not repo_dict['description'] :
        repo_dict['description'] = "None"
        breakpoint()
    if not repo_dict['html_url']:
        repo_dict['html_url'] = "None"
        breakpoint()

    plot_dict = {
        'value': repo_dict['stargazers_count'],
        'label': repo_dict['description'],
        'xlink': repo_dict['html_url'],
    }  # 注意最后有 逗号
    plot_dicts.append(plot_dict)

# 可视化
mystyle = LS('#333366', base_style=LCS)


my_config = pygal.Config()
my_config.x_label_rotation = 45
my_config.show_legend = False
my_config.title_font_size = 24
my_config.label_font_size = 14
my_config.major_label_font_size = 18
my_config.truncate_label = 15
my_config.show_y_guides = False
my_config.width = 1000


chart = pygal.Bar(my_config, style=mystyle)
chart.title = 'Most-Starred Python Projects on GitHub'
chart.x_labels = names # x 轴数据 
chart.add('', plot_dicts)   # 

chart.render_to_file('python_repos.svg')

```


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
