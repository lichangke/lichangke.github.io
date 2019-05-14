---
layout: post
title:  LeetCode-322--零钱兑换(Coin-Change)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}


![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-43121ddb145fb38c.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [322\. 零钱兑换](https://leetcode-cn.com/problems/coin-change/)
```
    322. 零钱兑换

    给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

    示例 1:

    输入: coins = [1, 2, 5], amount = 11
    输出: 3 
    解释: 11 = 5 + 5 + 1
    示例 2:

    输入: coins = [2], amount = 3
    输出: -1
    说明:
    你可以认为每种硬币的数量是无限的。
```

## Python3 实现
### 动态规划
```python
# @author:leacoder
# @des:  动态规划 零钱兑换

class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        if amount < 0 :    return -1
        DP = [amount + 1]*(amount + 1) #DP[i] 表示 总金额 为 i 时的最少硬币数，极限情况硬币数为 amount 不可能为 amount + 1
        DP[0] = 0 # 初始  下面 DP[i - coin]  中 i - coin = 0时
        for i in range(1,amount+1): # 总金额 1 到 amount 的循环
            for coin in coins: # 不同面额遍历
                if coin <= i: # 面额小于总金额
                    DP[i] = min(DP[i],DP[i - coin] + 1) # DP方程 类似70. 爬楼梯； 
        
        if DP[amount] == amount+1: 
            return -1
        else:
            return DP[amount]
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
