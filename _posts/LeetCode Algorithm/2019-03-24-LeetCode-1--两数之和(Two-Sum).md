---
layout: post
title:  LeetCode-1--两数之和(Two-Sum)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}

![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-04267ac2b13ffa11.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [两数之和](https://leetcode-cn.com/problems/two-sum/)
    给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

    你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

    示例:

    给定 nums = [2, 7, 11, 15], target = 9

    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1]

## Python3实现
### 暴力循环
```python
# @author:leacoder
# @des:   暴力循环  两数之和  O(N*N)
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for index1,num1 in enumerate(nums):  #两层循环
            for index2,num2 in enumerate(nums[index1+1:]):
                if num1 + num2 == target:
                    return [index1,index1+index2+1]
        return []
```
### 和固定利用差值diff
```python
# @author:leacoder
# @des:   和固定利用差值diff 两数之和 O（N）
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)-1):#循环  O(N)
            diff = target - nums[i]
            if diff in nums[i+1:]: #O(1)
                return [i,nums[i+1:].index(diff)+i+1]
        return []
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

