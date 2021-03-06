---
layout: post
title:  LeetCode-50--Pow(x,-n)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}

![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-ea95be2be0d9a299.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [Pow(x, n)](https://leetcode-cn.com/problems/powx-n/)
实现 [pow(*x*, *n*)](https://www.cplusplus.com/reference/valarray/pow/) ，即计算 x 的 n 次幂函数。
    示例 1:

    输入: 2.00000, 10
    输出: 1024.00000

    示例 2:

    输入: 2.10000, 3
    输出: 9.26100

    示例 3:

    输入: 2.00000, -2
    输出: 0.25000
    解释: 2(-2) = 1/2(2) = 1/4 = 0.25

    说明:

    -100.0 < x < 100.0
    n 是 32 位有符号整数，其数值范围是 [−2(31), 2(31) − 1] 。

## Python3实现
### 非递归移位
每次对半计算，先每次算n/2 n/2的值,由两值可得n
注意每次对半计算时 n为偶数还是计算
```python
# @author:leacoder
# @des:  非递归  移位法 Pow(x, n)

class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n<0:
            x = 1/x
            n = -n
        pow = 1
        while n:
            if n&1: # n 为奇数
                pow *= x
            
            x *=x #偶数   x = x*x  n=n>>1 (右移1 n减半)   即为 x(n) = (x*x)(n/2)
            n >>=1 #移位 左移1 n减半
            
        return pow
```
### 递归
每次对半计算，先每次算n/2 n/2的值,由两值可得n
注意每次对半计算时 n为偶数还是计算
```python
# @author:leacoder
# @des:  递归  Pow(x, n)

class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n == 0: #递归终止条件
            return 1
        if n<0: #n<0的情况
            return 1/self.myPow(x,-n)
        if n%2 == 0: # n为偶数
            return self.myPow(x*x,n/2) # x(n/2) * x(n/2) = (x * x)(n/2)
        else:#n为奇数
            return x*self.myPow(x,n-1) # x * x((n-1)/2) * x((n-1)/2) = x * (x*x)((n-1)/2) = x* x(n-1)
            # return x*self.myPow(x*x,(n-1)/2)
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

