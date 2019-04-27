---
layout: post
title:  LeetCode-69--x-的平方根(Sqrt(x))
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}


![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-8c784a47e1bc8b2b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [69\. x 的平方根](https://leetcode-cn.com/problems/sqrtx/)

      实现 int sqrt(int x) 函数。

    计算并返回 x 的平方根，其中 x 是非负整数。

    由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

    示例 1:

    输入: 4
    输出: 2
    示例 2:

    输入: 8
    输出: 2
    说明: 8 的平方根是 2.82842..., 
         由于返回类型是整数，小数部分将被舍去。


## Python3实现
### 二分查找
```python
# @author:leacoder 
# @des: 二分查找 , x 的平方根

class Solution:
    def mySqrt(self, x: int) -> int: 
        if x == 1 or x == 0:
            return x
        left,right,res = 0,x,0
        while left <= right:
            mid = int((left + right)/2)
            if mid * mid > x:
                right = mid - 1
            elif mid *mid < x:
                left = mid + 1
                res = mid
            else:
                return int(mid)  
        return int(res)
```
### 牛顿迭代
```python
# @author:leacoder 
# @des: 牛顿迭代 , x 的平方根
# 参看 https://www.cnblogs.com/qlky/p/7735145.html

class Solution:
    def mySqrt(self, x: int) -> int: 
        if x <= 1:
            return x
        r = x
        while r * r > x:
            r = int((r + x / r) /2) 
        return r
```
### 神秘的常数 0x5f3759df 0x5f375a86
```python
class Solution:
    def mySqrt(self, x: int) -> int: 
        if x <= 1:
            return x
        r = x
        r = 0x5f3759df - (r >> 1)
        while r * r > x:
            r = int((r + x / r) /2)
        return int(r)
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

