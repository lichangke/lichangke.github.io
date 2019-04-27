---
layout: post
title:   LeetCode 152.乘积最大子序列(Maximum-Product-Subarray)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}


![image.png](https://upload-images.jianshu.io/upload_images/16846478-336e51eb42bd3f54.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [152\. 乘积最大子序列](https://leetcode-cn.com/problems/maximum-product-subarray/)

    152. 乘积最大子序列
    给定一个整数数组 nums ，找出一个序列中乘积最大的连续子序列（该序列至少包含一个数）。
    示例 1:
    输入: [2,3,-2,4]
    输出: 6
    解释: 子数组 [2,3] 有最大乘积 6。
    示例 2:
    输入: [-2,0,-1]
    输出: 0
    解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。

## Python3 实现
### 暴力求解
```python
#@author:leacoder
#@des:  暴力求解  乘积最大子序列
# leetcode 超时

class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        maxnum = float("-inf")
        for i in range(0,len(nums)):
            tmp = nums[i]
            for j in range(i+1,len(nums)):
                tmp *= nums[j]
                maxnum = max(maxnum,tmp)
            maxnum = max(maxnum,nums[i])
        return maxnum
```
### 动态规划 1
```python
#@author:leacoder
#@des:  动态规划  乘积最大子序列

class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        if nums is None : return 0
        imax = [0,0] 
        imin = [0,0]
        imax[0], imin[0],res= nums[0],nums[0],nums[0]
        
        for i in range(1,len(nums)):
            x,y=i%2,(i-1)%2 # x 表示当前最大或最小下标   y 表示前面最大或最小下标
            imax[x] = max( imax[y] * nums[i], imin[y] * nums[i], nums[i] ) 
            # nums[i]可能为负数，若为负数 前面最小 *  nums[i]变为最大，前面最大 *  nums[i]变为最小
            imin[x] = min( imax[y] * nums[i], imin[y] * nums[i], nums[i] ) 
            res = max(res,imax[x])
        return res
```
### 动态规划 2

```python
#@author:leacoder
#@des:  动态规划  乘积最大子序列

class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        if nums is None : return 0
        res , curMax, curMin = nums[0],nums[0],nums[0]
        for i in range(1,len(nums)):
            num = nums[i]
            curMax, curMin = curMax * num, curMin * num
            # 由于 num可能为负数 上面结果可能刚好反了, curMax * 负数变为 curMin 顾需要下面语句处理
            curMax,curMin = max(curMax,curMin,num),min(curMax,curMin,num)
            res = max(curMax,res)
        return res
```
### 动态规划 3 
```python
#@author:leacoder
#@des:  动态规划  乘积最大子序列

class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        if nums is None : return 0
        res , curMax, curMin = nums[0],nums[0],nums[0]
        for i in range(1,len(nums)):
            num = nums[i]
            if num < 0 :
                curMax, curMin = curMin, curMax # 由于 num为负数 导致最大的变最小的，最小的变最大的,因此交换两个的值
            curMax = max(curMax*num,num)
            curMin = min(curMin*num,num)
            res = max(curMax,res)
        return res
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
