---
layout: post
title:  LeetCode-188--买卖股票的最佳时机-IV(Best-Time-to-Buy-and-Sell-Stock-IV)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}

![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-bfb52264af2d2448.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [188\. 买卖股票的最佳时机 IV](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/)

    给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

    设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。

    注意: 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

    示例 1:

    输入: [2,4,1], k = 2
    输出: 2
    解释: 在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
    示例 2:

    输入: [3,2,6,5,0,3], k = 2
    输出: 7
    解释: 在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。
         随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 。

## Python3 实现

### 动态规划
买卖股票的最佳时机  系列问题 通用型 解法 ，LeetCode 121 123 均可参考此方法
```python
# @author:leacoder 
# @des: 动态规划 买卖股票的最佳时机 IV(通用型) 


class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
        n = len(prices)
        if n<=1: return 0
        if k>int(n/2): # 会超时
            #k = int(n/2)
            return self.greedy(prices) # 使用贪心
            
        maxprof = 0
        profit = [[[0 for _ in range(2)] for _ in range(k+1)] for _ in range(0,len(prices))]  # DP[ii][kk][0] 第ii天完成kk次操作无股票 DP[ii][kk][1]第ii天完成kk次操作有股票 prices[ii] 第ii天股票价格

        for i in range(0,k+1):
            profit[0][i][0] = 0 # 第 1 天 操作i 次 没有股票，所以初始值为 0
            profit[0][i][1] = - prices[0] # 第 1 天 操作i 次 有股票， 所以初始值为 - prices[ii]

        for ii in range(1,len(prices)):  # 天数
            for kk in range(0, k + 1):  # 交易次数
                if kk == 0: #
                    profit[ii][kk][0] = profit[ii - 1][kk][0] # 0 次交易 今天利润 == 前一天利润
                else:
                    # 今天完成kk次操作无股票  max(前一天无股票今天不交易，前一天有股票今天卖出)  买卖一次算一笔交易 故 profit[ii - 1][kk - 1][1] + prices[ii]
                    profit[ii][kk][0] = max(profit[ii - 1][kk][0], profit[ii - 1][kk - 1][1] + prices[ii])
                # 今天完成kk次操作有股票  max(前一天有股票今天不交易，前一天无股票今天买入)
                profit[ii][kk][1] = max(profit[ii - 1][kk][1], profit[ii - 1][kk][0] - prices[ii])
                maxprof = max(maxprof, profit[ii][kk][0])
        return maxprof
    
    def greedy(self,prices: List[int]) -> int:
        max = 0
        for i in range(1,len(prices)):
            if prices[i]>prices[i-1]:
                max += prices[i] - prices[i-1]
        return max
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
