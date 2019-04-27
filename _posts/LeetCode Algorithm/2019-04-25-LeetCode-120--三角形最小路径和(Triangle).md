---
layout: post
title:  LeetCode-120--三角形最小路径和(Triangle)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}


![image.png](https://upload-images.jianshu.io/upload_images/16846478-a849376fdb1e8b02.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [120\. 三角形最小路径和](https://leetcode-cn.com/problems/triangle/)

    三角形最小路径和

    给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
    例如，给定三角形：
    [
    [2],
    [3,4],
    [6,5,7],
    [4,1,8,3]
    ]
    自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
    说明：
    如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。

## Python3 实现
### 动态规划 

```python
#@author:leacoder
#@des:  动态规划  三角形最小路径和

class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        if triangle == None:
            return 0
        for i in range(len(triangle)-2,-1,-1): # 从下至上
            for j in range(len(triangle[i])):
                triangle[i][j] += min(triangle[i+1][j],triangle[i+1][j+1]) 
                # DP状态方程：dp[i, j] = min(dp(i+1, j), dp(i+1, j+1)) + triangle[i, j]
        return triangle[0][0]
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
