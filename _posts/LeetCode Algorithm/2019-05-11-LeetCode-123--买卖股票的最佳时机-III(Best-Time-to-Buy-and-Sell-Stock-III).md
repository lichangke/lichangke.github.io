---
layout: post
title:  LeetCode-123--买卖股票的最佳时机-III(Best-Time-to-Buy-and-Sell-Stock-III)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}


![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-dbca559644bef71e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [123\. 买卖股票的最佳时机 III](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/)


    123. 买卖股票的最佳时机 III
    给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

    设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。

    注意: 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

    示例 1:

    输入: [3,3,5,0,0,3,1,4]
    输出: 6
    解释: 在第 4 天（股票价格 = 0）的时候买入，在第 6 天（股票价格 = 3）的时候卖出，这笔交易所能获得利润 = 3-0 = 3 。
         随后，在第 7 天（股票价格 = 1）的时候买入，在第 8 天 （股票价格 = 4）的时候卖出，这笔交易所能获得利润 = 4-1 = 3 。
    示例 2:

    输入: [1,2,3,4,5]
    输出: 4
    解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。   
         注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。   
         因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
    示例 3:

    输入: [7,6,4,3,1] 
    输出: 0 
    解释: 在这个情况下, 没有交易完成, 所以最大利润为 0。


## Python3 实现

### 动态规划
```python
# @author:leacoder
# @des:  动态规划  买卖股票的最佳时机 III(通用型) 

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if not prices: return 0
        # 三维数组 
        # profit[ii][kk][jj] 
        # ii 第 ii 天， kk 股票操作了几次 ， jj 是否有股票
        # 最多可以完成 两笔 交易： kk 可以为 0 1 2 次操作 ， jj可以为 0 ，1    0 没有股票 1有股票
        profit = [[[0 for _ in range(2)] for _ in range(3)] for _ in range(len(prices))]
        # 第一天 初始化 
        for k in range(3): #最多可以完成 两笔 交易 故range(3)
            profit[0][k][0] = 0 # 第 1 天 操作 k 次 没有股票，所以初始值为 0
            profit[0][k][1] = - prices[0] # 第 1 天 操作i 次 有股票， 所以初始值为 - prices[0]
       
        # 注意 买 卖 都进行一次算一次操作 k + 1,单独 买入 不算完成一次操作
        for i in range(1,len(prices)):
            # 第 i 天 0 次交易 没有股票最大利润 = 第 i-1 天 0 次交易 没有股票最大利润
            profit[i][0][0] = profit[i-1][0][0] 
            # 第 i 天 0 次交易 有股票最大利润 = max(第 i-1 天 0 次交易 有股票最大利润 , 第 i-1 天 0 次交易 无股票最大利润 - 当天股票价格prices[i]（买入）)
            profit[i][0][1] = max(profit[i-1][0][1],profit[i-1][0][0] - prices[i])
            
            # 第 i 天 1 次交易 无股票最大利润 = max(第 i-1 天 1次交易 无股票最大利润 , 第 i-1 天 0 次交易 有股票最大利润 + 当天股票价格prices[i]（卖出）)
            profit[i][1][0] = max(profit[i-1][1][0],profit[i-1][0][1] +prices[i] ) 
            # 第 i 天 1 次交易 有股票最大利润 = max(第 i-1 天 1 次交易 有股票最大利润 , 第 i-1 天 1 次交易 无股票最大利润 - 当天股票价格prices[i]（买入）)
            profit[i][1][1] = max(profit[i-1][1][1],profit[i-1][1][0] - prices[i])
            
            # 第 i 天 2 次交易 无股票最大利润 = max(第 i-1 天 2次交易 无股票最大利润 , 第 i-1 天 1 次交易 有股票最大利润 + 当天股票价格prices[i]（卖出）)
            profit[i][2][0] = max(profit[i-1][2][0],profit[i-1][1][1] + prices[i] ) 
            
        end = len(prices) - 1
        
        return max(profit[end][0][0],profit[end][1][0],profit[end][2][0])
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
