---
layout: post
title:  LeetCode-338--比特位计数(Counting-Bits)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}


![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-4678affcb7af84b5.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [338\. 比特位计数](https://leetcode-cn.com/problems/counting-bits/)

    338. 比特位计数

    给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。

    示例 1:

    输入: 2
    输出: [0,1,1]
    示例 2:

    输入: 5
    输出: [0,1,1,2,1,2]

    进阶:
    给出时间复杂度为O(n*sizeof(integer))的解答非常容易。但你可以在线性时间O(n)内用一趟扫描做到吗？
    要求算法的空间复杂度为O(n)。
    你能进一步完善解法吗？要求在C++或任何其他语言中不使用任何内置函数（如 C++ 中的 __builtin_popcount）来执行此操作。


## Python3 实现
```python
# @author:leacoder 
# @des: 比特位计数
class Solution:
    def countBits(self, num: int) -> List[int]:
        res = [0] * (num + 1)
        for i in range(1,num+1):
            res[i] = res[i&(i-1)] + 1
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

