---
layout: post
title:  LeetCode-231--2的幂(Power-of-Two)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}


![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-fc638e4601f2f3ee.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [231\. 2的幂](https://leetcode-cn.com/problems/power-of-two/)

给定一个整数，编写一个函数来判断它是否是 2 的幂次方。

示例 1:

        输入: 1

        输出: true

        解释: 20 = 1

示例 2:

        输入: 16

        输出: true

        解释: 24 = 16

示例 3:

        输入: 218

        输出: false

## Python3 实现
```python
# @author:leacoder 
# @des: 位运算  2的幂

class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        if n != 0 and n & (n-1) == 0:
            return True
        else:
            return False
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
