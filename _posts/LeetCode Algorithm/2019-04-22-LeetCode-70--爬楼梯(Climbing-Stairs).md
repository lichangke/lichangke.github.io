---
layout: post
title:  LeetCode-70--爬楼梯(Climbing-Stairs)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}

![image.png](https://upload-images.jianshu.io/upload_images/16846478-ae7b0ba3a257b970.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [70\. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)

    70. 爬楼梯
    假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
    每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

        注意：给定 n 是一个正整数。
        示例 1：
        输入： 2
        输出： 2
        解释： 有两种方法可以爬到楼顶。
        1.  1 阶 + 1 阶
        2.  2 阶

        示例 2：
        输入： 3
        输出： 3
        解释： 有三种方法可以爬到楼顶。
        1.  1 阶 + 1 阶 + 1 阶
        2.  1 阶 + 2 阶
        3.  2 阶 + 1 阶

## Python3 实现
### 动态规划 计算所有 f(n) 
```python
#@author:leacoder
#@des:  动态规划 计算所有 f(n) 爬楼梯

class Solution:
    def climbStairs(self, n: int) -> int:
        dicttmp = {0:1,1:1}
        if n == 1 or n == 0:
            return dicttmp[n]
        for i in range(2,n+1):
            dicttmp[i] = dicttmp[i-1] + dicttmp[i-2]  # 递推公式 f(n) = f(n-1) + f(n-2)
        return dicttmp[n]
```
### 动态规划 优化
```python
#@author:leacoder
#@des:  动态规划  爬楼梯

class Solution:
    def climbStairs(self, n: int) -> int:
        f0 = f1 = 1
        for i in range(1,n):
            f0,f1 = f1, f0+f1 # 递推公式 f(n) = f(n-1) + f(n-2)只关心 f(n-1) f(n-2)不必要所有f
        return f1
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

