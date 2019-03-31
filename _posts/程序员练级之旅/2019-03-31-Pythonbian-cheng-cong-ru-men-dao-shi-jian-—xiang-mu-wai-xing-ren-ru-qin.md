---
layout: post
title:   Python编程从入门到实践—项目1 外星人入侵
author: leacoder
categories: 程序员练级之旅 Share
tags: 程序员练级之旅 Python
---

* content
{:toc}


## 开发系统和开发IDE

开发系统： Ubuntu 16.0.4 LTS

开发IDE：  Visual Studio Code  版本: 1.32.3

Python版本： Python3

依赖库：  pygame

## 资料《Python编程从入门到实践》书籍

链接：[https://pan.baidu.com/s/1USkqvL2dLU3Q9XplVaGQJg ](https://pan.baidu.com/s/1USkqvL2dLU3Q9XplVaGQJg )

提取码：zoyc 

## 相关问题以及解决

*VM中安装linux系统，安装VS Code，搭建Python环境*

*[https://www.jianshu.com/p/8584299bbdc8](https://www.jianshu.com/p/8584299bbdc8)*

*Ubuntu下切换Python2和Python3*

*[https://www.jianshu.com/p/4d28325889e6](https://www.jianshu.com/p/4d28325889e6)*

 *Ubuntu下安装 pygame*

*也可以参见 《Python编程从入门到实践》书籍 第12章 安装其他库*

*[https://www.jianshu.com/p/3dda1fc3b0bb](https://www.jianshu.com/p/3dda1fc3b0bb)*


## GitHub: 

[https://github.com/lichangke/Python3_Project/tree/master/alien_invasion](https://github.com/lichangke/Python3_Project/tree/master/alien_invasion)

----
## 目录文件结构
![001.png](https://upload-images.jianshu.io/upload_images/16846478-fcc1e5eac267b1e7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

|#| 文件名|    内容 | 
| -|------| -----------|
| -|.vscode| VSCode 配置|
| -|images文件夹| 存放所需图片|
| -|alien.py| 外星人属性，加载 绘制 移动 以及 边缘检测相关 |
| - | alien_invasion.py | 程序入口，初始化游戏，循环事件检测以及绘制更新游戏屏幕  |
| - | bullet.py | 子弹属性，位置更新 和 绘制  |
| - | button.py |  开始按钮属性，绘制 |
| - | game_functions.py | 存储大量让游戏运行的函数，响应按键和鼠标事件，更新屏幕上的图像，其他逻辑计算与处理  |
| - | game_stats.py | 游戏运行状态信息，活动状态，分数和级别状态  |
| - | scoreboard.py |  得分信息，显示当前和最高分数 |
| - |settings.py  |  游戏参数设置 ，飞船 外星人 记分 子弹 游戏速度 等设置|
| - | ship.py | 飞船属性， 位置更新 和 绘制 |

### 运行与效果

在 alien_invasion 文件夹中，终端命令:

>python3 alien_invasion.py

需要linux系统以及Python3 和依赖库pygame支持


![002.png](https://upload-images.jianshu.io/upload_images/16846478-b8c09c5979340e29.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

点击 Play 开始 

方向键 左右移动 

空格 发射子弹 (同时最多3发) settings.py-> self.bullets_allowed = 3  # 限制子弹数目

退出 按 Q


### alien.py
``` python
import pygame
from pygame.sprite import Sprite

class Alien(Sprite):
    """表示单个外星人的类"""
    def __init__(self, ai_settings, screen):
        """初始化外星人并设置其起始位置"""
        super(Alien,self).__init__()
        self.screen = screen
        self.ai_settings = ai_settings

        # 加载外星人图像， 并设置其rect属性
        self.image = pygame.image.load('images/alien.bmp')
        self.rect = self.image.get_rect()

        # 每个外星人最初都在屏幕左上角附近
        self.rect.x = self.rect.width
        self.rect.y = self.rect.height   

        # 同子弹一样处理 先在初始位置绘制 再设置准确位置
        # 存储外星人的准确位置
        self.x = float(self.rect.x)   

    def blitme(self):
        """在指定位置绘制外星人"""
        self.screen.blit(self.image, self.rect) 

    def update(self):
        """向右或向左移动外星人"""
        self.x += (self.ai_settings.alien_speed_factor *self.ai_settings.fleet_direction)  #-1表示向左移
        self.rect.x = self.x

    def check_edges(self):
        """如果外星人位于屏幕边缘， 就返回True"""
        screen_rect = self.screen.get_rect()
        if self.rect.right >= screen_rect.right:
            return True
        elif self.rect.left <= 0:
            return True
```
### alien_invasion.py
``` python
# 导入了模块sys 和pygame
import sys

# 模块pygame 包含开发游戏所需的功能
import pygame

# 导入设置
from settings import Settings

# 导入飞船
from ship import Ship

# # 导入 Alien
# from alien import Alien

# 导入功能函数模块 在模块game_functions 而不是run_game() 中完成大部分工作。
import game_functions as gf

# pygame.sprite.Group 类类似于列表，但提供了有助于开发游戏的额外功能
# 用于存储所有有效的子弹， 以便能够管理发射出去的所有子弹。
from pygame.sprite import Group

# 导入 GameStats 跟踪游戏统计信息
from game_stats import GameStats

# 导入按钮
from button import Button

# 导入Scoreboard 用于 创建记分牌
from scoreboard import Scoreboard

# pygame 文档 https://www.pygame.org/docs/ref/pygame.html


def run_game():
    # 初始化游戏并创建一个屏幕对象
    pygame.init()  # ide 可能会误报 不存在
    ai_settings = Settings()  # 设置
    screen = pygame.display.set_mode(
        (ai_settings.screen_width, ai_settings.screen_height))  # 屏幕大小  默认创建一个黑色屏幕

    pygame.display.set_caption("Alien Invasion")

    # 创建Play按钮
    play_button = Button(ai_settings, screen, "Play")

    # 创建一个用于存储游戏统计信息的实例
    stats = GameStats(ai_settings)

    # 创建一个Scoreboard 实例
    sb = Scoreboard(ai_settings, screen, stats)

    # 创建一艘飞船
    ship = Ship(ai_settings, screen)  # 入参 包括屏幕 和 设置 信息

    # 创建一个用于存储子弹的编组
    # 创建了一个Group 实例， 并将其命名为bullets 。 这个编组是在while 循环外面创建的， 这样就无需每次运行该循环时都创建一个新的子弹
    bullets = Group()
    aliens = Group()
    # # 创建一个外星人
    # alien = Alien(ai_settings, screen)
    # 创建外星人群
    gf.create_fleet(ai_settings, screen, ship,aliens)

    # 开始游戏的主循环
    while True:

        # 监视键盘鼠标事件
        gf.check_events(ai_settings, screen, stats, sb, play_button, ship,aliens, bullets)

        # 仅在游戏处于活动状态时才运行
        if stats.game_active:
            # 每次执行循环时都调用飞船的方法update() 根据标志 更新飞船位置 通过绘制实现移动
            ship.update()
            # 子弹更新
            gf.update_bullets(ai_settings, screen, stats, sb, ship,aliens, bullets)

            print(len(bullets))

            # 更新每个外星人的位置
            gf.update_aliens(ai_settings, screen, stats, sb, ship, aliens,bullets)
        # 绘制更新屏幕
        gf.update_screen(ai_settings, screen, stats, sb, ship, aliens,bullets, play_button)


run_game()

```
### bullet.py
``` python
import pygame
from pygame.sprite import Sprite


class Bullet(Sprite):
    """一个对飞船发射的子弹进行管理的类"""

    def __init__(self, ai_settings, screen, ship):
        """在飞船所处的位置创建一个子弹对象"""
        # 了解 super 可参见  https://www.jianshu.com/p/6b79d13fcff5
        super(Bullet, self).__init__()  # 在super机制里可以保证公共父类仅被执行一次
        self.screen = screen

        # 在(0,0)处创建一个表示子弹的矩形， 再设置正确的位置
        # 子弹并非基于图像的， 因此我们必须使用pygame.Rect() 类从空白开始创建一个矩形。
        self.rect = pygame.Rect(
            0, 0, ai_settings.bullet_width, ai_settings.bullet_height)
        # 正确的位置
        self.rect.centerx = ship.rect.centerx
        self.rect.top = ship.rect.top
        # 存储用小数表示的子弹位置
        self.y = float(self.rect.y)

        self.color = ai_settings.bullet_color
        self.speed_factor = ai_settings.bullet_speed_factor

    # 位置更新
    def update(self):
        """向上移动子弹"""
        # 更新表示子弹位置的小数值
        self.y -= self.speed_factor
        # 更新表示子弹的rect的位置
        self.rect.y = self.y
    # 绘制子弹
    def draw_bullet(self):
        """在屏幕上绘制子弹"""
        pygame.draw.rect(self.screen, self.color, self.rect)
```
### button.py
``` python
# 导入了模块pygame.font ， 它让Pygame能够将文本渲染到屏幕上
import pygame.font


class Button():
    def __init__(self, ai_settings, screen, msg):
        """初始化按钮的属性"""
        self.screen = screen
        self.screen_rect = screen.get_rect()
        # 设置按钮的尺寸和其他属性
        self.width, self.height = 200, 50
        self.button_color = (0, 255, 0)
        self.text_color = (255, 255, 255)
        self.font = pygame.font.SysFont(None, 48)
        # 创建按钮的rect对象， 并使其居中
        self.rect = pygame.Rect(0, 0, self.width, self.height)
        self.rect.center = self.screen_rect.center
        # 按钮的标签只需创建一次
        self.prep_msg(msg)

    def prep_msg(self, msg):
        """将msg渲染为图像， 并使其在按钮上居中"""
        # 调用font.render() 将存储在msg 中的文本转换为图像， 然后将该图像存储在msg_image 中
        self.msg_image = self.font.render(
            msg, True, self.text_color, self.button_color)
        self.msg_image_rect = self.msg_image.get_rect()
        self.msg_image_rect.center = self.rect.center

    # 创建方法draw_button() ， 通过调用它可将这个按钮显示到屏幕上
    def draw_button(self):
        # 绘制一个用颜色填充的按钮， 再绘制文本
        self.screen.fill(self.button_color, self.rect)
        self.screen.blit(self.msg_image, self.msg_image_rect)

```
### game_functions.py
> 此部分过多 点击下面链接查看
>[https://github.com/lichangke/Python3_Project/blob/master/alien_invasion/game_functions.py](https://github.com/lichangke/Python3_Project/blob/master/alien_invasion/game_functions.py)

### game_stats.py

``` python
#在这个游戏运行期间， 我们只创建一个GameStats 实例， 但每当玩家开始新游戏时， 需要重置一些统计信息。
#我们在方法reset_stats() 中初始化大部分统计信息，而不是在__init__() 中直接初始化它们。 
class GameStats():
    """跟踪游戏的统计信息"""

    def __init__(self, ai_settings):
        """初始化统计信息"""
        self.ai_settings = ai_settings
        self.reset_stats()
        # 让游戏一开始处于非活动状态 单击Play按钮来开始游戏
        self.game_active = False

        # 在任何情况下都不应重置最高得分
        self.high_score = 0


    def reset_stats(self):
        """初始化在游戏运行期间可能变化的统计信息"""
        self.ships_left = self.ai_settings.ship_limit
        self.score = 0
        self.level = 1
```

### scoreboard.py
``` python
import pygame.font
from ship import Ship
from pygame.sprite import Group


class Scoreboard():
    """显示得分信息的类"""

    def __init__(self, ai_settings, screen, stats):
        """初始化显示得分涉及的属性"""
        self.screen = screen
        self.screen_rect = screen.get_rect()
        self.ai_settings = ai_settings
        self.stats = stats

        # 显示得分信息时使用的字体设置
        self.text_color = (30, 30, 30)
        self.font = pygame.font.SysFont(None, 48)

        # 准备包含最高得分和当前得分的图像
        self.prep_score()
        self.prep_high_score()
        self.prep_level()  # 当前等级
        self.prep_ships()  # 剩余飞船

    def prep_score(self):
        """将得分转换为一幅渲染的图像"""
        rounded_score = int(round(self.stats.score, -1))  # 将得分显示为10的整数倍
        # score_str = str(self.stats.score)  # 首先将数字值stats.score 转换为字符串
        score_str = "{:,}".format(rounded_score)
        self.score_image = self.font.render(
            score_str, True, self.text_color, self.ai_settings.bg_color)

        # 将得分放在屏幕右上角
        self.score_rect = self.score_image.get_rect()
        self.score_rect.right = self.screen_rect.right - 20
        self.score_rect.top = 20

    # 显示渲染好的得分图像
    def show_score(self):
        """在屏幕上显示当前得分和最高得分"""
        self.screen.blit(self.score_image, self.score_rect)
        self.screen.blit(self.high_score_image, self.high_score_rect)
        self.screen.blit(self.level_image, self.level_rect)
        # 绘制飞船
        self.ships.draw(self.screen)

    def prep_high_score(self):
        """将最高得分转换为渲染的图像"""
        high_score = int(round(self.stats.high_score, -1))
        high_score_str = "{:,}".format(high_score)
        self.high_score_image = self.font.render(high_score_str, True,
                                                 self.text_color, self.ai_settings.bg_color)
        # 将最高得分放在屏幕顶部中央
        self.high_score_rect = self.high_score_image.get_rect()
        self.high_score_rect.centerx = self.screen_rect.centerx
        self.high_score_rect.top = self.score_rect.top

    def prep_level(self):
        """将等级转换为渲染的图像"""
        self.level_image = self.font.render(
            str(self.stats.level), True, self.text_color, self.ai_settings.bg_color)
        # 将等级放在得分下方
        self.level_rect = self.level_image.get_rect()
        self.level_rect.right = self.score_rect.right
        self.level_rect.top = self.score_rect.bottom + 10

    def prep_ships(self):
        """显示还余下多少艘飞船"""
        self.ships = Group()
        for ship_number in range(self.stats.ships_left):
            ship = Ship(self.ai_settings, self.screen)
            ship.rect.x = 10 + ship_number * ship.rect.width
            ship.rect.y = 10
            self.ships.add(ship)
```

### settings.py
``` python
class Settings():
    """存储《外星人入侵》 的所有设置的类"""

    def __init__(self):
        """初始化游戏的设置"""
        # 屏幕设置
        self.screen_width = 1200
        self.screen_height = 800
        self.bg_color = (230, 230, 230)

        # 飞船的设置
        self.ship_speed_factor = 1.5  # 速度
        self.ship_limit = 3

        # 子弹设置
        self.bullet_speed_factor = 3
        self.bullet_width = 3
        self.bullet_height = 15
        self.bullet_color = 60, 60, 60
        self.bullets_allowed = 3  # 限制子弹数目

        # 外星人设置
        self.alien_speed_factor = 1
        self.fleet_drop_speed = 10  # fleet_drop_speed 指定了有外星人撞到屏幕边缘时， 外星人群向下移动的速度
        # fleet_direction为1表示向右移， 为-1表示向左移
        self.fleet_direction = 1
        # 记分
        self.alien_points = 50

        # 以什么样的速度加快游戏节奏
        self.speedup_scale = 1.1
        # 外星人点数的提高速度
        self.score_scale = 1.5
        self.initialize_dynamic_settings()  # 设置speedup_scale ， 用于控制游戏节奏的加快速度2 表示玩家每提高一个等级， 游戏的节奏就翻倍； 1表示游戏节奏始终不变。

    def initialize_dynamic_settings(self):
        """初始化随游戏进行而变化的设置"""
        self.ship_speed_factor = 1.5
        self.bullet_speed_factor = 3
        self.alien_speed_factor = 1
        # fleet_direction为1表示向右； 为-1表示向左
        self.fleet_direction = 1

    def increase_speed(self):
        """提高速度设置"""
        self.ship_speed_factor *= self.speedup_scale
        self.bullet_speed_factor *= self.speedup_scale
        self.alien_speed_factor *= self.speedup_scale
        self.alien_points = int(self.alien_points * self.score_scale)
        print(self.alien_points)

```

### ship.py
``` python
import pygame
from pygame.sprite import Sprite

class Ship(Sprite):
    def __init__(self, ai_settings,screen):
        """初始化飞船并设置其初始位置"""
        super(Ship, self).__init__()
        
        self.screen = screen  # 屏幕数据
        self.ai_settings = ai_settings  # 设置
        # 加载飞船图像并获取其外接矩形
        self.image = pygame.image.load('images/ship.bmp')
        self.rect = self.image.get_rect()
        self.screen_rect = screen.get_rect()
        # 将每艘新飞船放在屏幕底部中央
        # 在Pygame中， 原点(0, 0)位于屏幕左上角， 向右下方移动时， 坐标值将增大
        self.rect.centerx = self.screen_rect.centerx  #每次飞船移动 只是 rect.centerx 改变  rect.bottom 不变
        self.rect.bottom = self.screen_rect.bottom
        # 在飞船的属性center中存储小数值
        self.center = float(self.rect.centerx)

        # 移动标志  玩家按住右箭头键不放时， 我们希望飞船不断地向右移动， 直到玩家松开为止 让游戏检测pygame.KEYUP 事件然
        # 后， 我们将结合使用KEYDOWN 和KEYUP 事件， 以及一个名为moving_right 的标志来实现持续移动
        self.moving_right = False
        self.moving_left = False

    def update(self):
        """根据移动标志调整飞船的位置"""
        # 更新飞船的center值， 而不是rect
        if self.moving_right and self.rect.right < self.screen_rect.right: # 限制右边界
            self.center += self.ai_settings.ship_speed_factor
        if self.moving_left and self.rect.left > 0: # 限制左边界
            self.center -= self.ai_settings.ship_speed_factor

        # 根据self.center更新rect对象
        self.rect.centerx = self.center  #self.rect.centerx 将只存储self.center 的整数部分， 但对显示飞船而言， 这问题不大

    def blitme(self):
        """在指定位置绘制飞船"""
        self.screen.blit(self.image, self.rect)

    def center_ship(self):
        """让飞船在屏幕上居中"""
        self.center = self.screen_rect.centerx

```



----
>*GitHub链接：*
>*[https://github.com/lichangke/LeetCode](https://github.com/lichangke/LeetCode)*

>*知乎主页：*
>*[https://www.zhihu.com/people/lichangke/](https://www.zhihu.com/people/lichangke/)*

>*简书主页*
>*[https://www.jianshu.com/u/3e95c7555dc7](https://www.jianshu.com/u/3e95c7555dc7)*

>*欢迎大家来一起交流学习*