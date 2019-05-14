---
layout: post
title:  LeetCode-300--最长上升子序列(Longest-Increasing-Subsequence)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}



![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-3fe093b91f818f88.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [300\. 最长上升子序列](https://leetcode-cn.com/problems/longest-increasing-subsequence/)

```
    300. 最长上升子序列
    给定一个无序的整数数组，找到其中最长上升子序列的长度。

    示例:

    输入: [10,9,2,5,3,7,101,18]
    输出: 4 
    解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
    说明:

    可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
    你算法的时间复杂度应该为 O(n2) 。
    进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?
```

## Python3 实现

### 动态规划
```python
# @author:leacoder
# @des:  动态规划 最长上升子序列  时间复杂度 O(n*n) 

class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        if not nums: return 0
        result = 1
        DP = [1 for i in range(len(nums))] # DP[ii] 表示 从 0 到 ii 且 第ii元素nums[ii]被选入最长上升子序列 的 序列长度  至少 为 1
        
        for i in range(1,len(nums)):
            for j in range(i):
                if nums[j] < nums[i]: # 表示 序列为上升的 DP[j] 第j元素nums[j]被选入最长上升子序列 的 序列长度
                    DP[i] = max(DP[i],DP[j] + 1) # 这时 nums[i] 被选入，长度 + 1。max 找出 第 0 到 i 元素 被选入最长上升子序列 的 序列长度 的 最大值
            result = max(result,DP[i])
        return result
```

### 维护子序列+二分查找 
```python
# @author:leacoder
# @des:  维护子序列+二分查找 最长上升子序列  时间复杂度 O(n log n)

class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        
        tails = [0] * len(nums)
        size = 0 # 最长上升子序列长度
        for num in nums:
            i , j = 0 , size 
            while i != j: # 二分查找 num 插入位置
                m = int((i + j)/2)
                if tails[m] < num : 
                    i = m + 1 # 查找后半段  
                else:
                    j = m # 查找前半段
            # i 为数据插入位置 ，可能 1、已有替换 2、后面新增替换
            tails[i] = num #
            # 这之前 size 为 num 插入前 最长上升子序列长度
            size = max(i+1,size) # 1、已有替换 size > i+1   2、后面新增替换   size < i+1
        return size              
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