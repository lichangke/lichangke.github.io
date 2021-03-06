---
layout: post
title:  LeetCode-169-求众数(-Majority-Element)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}

![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-c7fc6a4ae3a96c4f.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [求众数](https://leetcode-cn.com/problems/majority-element/)
    给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

    你可以假设数组是非空的，并且给定的数组总是存在众数。

    示例 1:

    输入: [3,2,3]
    输出: 3
    示例 2:

    输入: [2,2,1,1,1,2,2]
    输出: 2

## Python3 实现
### 排序法
```python
# @author:leacoder
# @des:  排序法 求众数  时间复杂度 O（nlg(n)）

class Solution:
    def majorityElement(self, nums: List[int]) -> int: 
        nums.sort()
        return nums[int(len(nums)/2)]  #条件>n/2，所以排序后，中间元素一定是众数
```
### dic计数
```python
# @author:leacoder
# @des:  dic 求众数

class Solution:
    def majorityElement(self, nums: List[int]) -> int: 
        dic = {}
        for num in nums:
            if num in dic:
                dic[num] = dic[num]+1
            else:
                dic[num] = 1
        length = len(nums)
        for num in dic:
            if dic[num]>int(length/2):
                return num
```
### 摩尔投票法

```python
# @author:leacoder
# @des:  摩尔投票法 求众数

class Solution:
    def majorityElement(self, nums: List[int]) -> int: 
        moore = 0
        count = 0
        for num in nums:  #由于给定的数组总是存在众数。 众数 与 非众数 抵消后最后 count必然>0
            if count == 0:
                moore = num #最终 moore 存放的就是众数
            if num == moore:
                count +=1  #重复一次 +1
            else:
                count -=1 #出现其他数据 -1
        return moore
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

