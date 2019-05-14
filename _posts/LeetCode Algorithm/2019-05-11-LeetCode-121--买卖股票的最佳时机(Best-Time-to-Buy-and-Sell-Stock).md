---
layout: post
title:  LeetCode-121--买卖股票的最佳时机(Best-Time-to-Buy-and-Sell-Stock)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}


![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-b063edced4b04cb2.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [121\. 买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)

    给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

    如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

    注意你不能在买入股票前卖出股票。

    示例 1:

    输入: [7,1,5,3,6,4]
    输出: 5
    解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
         注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
    示例 2:

    输入: [7,6,4,3,1]
    输出: 0
    解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。

## Python3 实现

### 动态规划
```python
# @author:leacoder
# @des:  动态规划  买卖股票的最佳时机 II  (通用型) 

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if not prices: return 0
        result = 0
        # 二维数组 
        # profit[i][0] 第i天 一直没有股票 的利润
        # profit[i][1] 第i天 当前有股票（ 前面有股票今天不卖 + 前面没股票 今天买入 ） 的利润
        # profit[i][2] 第i天 之前买入现在卖了   （前面有股票 今天卖出 ） 的利润
        profit = [[0 for _ in range(3)] for _ in range(len(prices))]
        # 第一天利润初始
        profit[0][0],profit[0][1],profit[0][2] = 0, - prices[0] , 0
        
        for i in range(1,len(prices)):
            profit[i][0] = profit[i - 1][0]
            profit[i][1] = max(profit[i - 1][1],profit[i - 1][0] - prices[i] )
            profit[i][2] = profit[i - 1][1] + prices[i] 
            result = max(result,profit[i][0],profit[i][1],profit[i][2])
        return result
```
### 一次遍历 记录最小价格

```python
# @author:leacoder
# @des:  一次遍历  买卖股票的最佳时机 II 
# 由于一次交易操作 故可以通过记录最小价格 计算最大利润的方式

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if not prices: return 0
        minprice,maxprofit = float("inf"),0
        
        for i in range(len(prices)):
            minprice = min(minprice,prices[i]) # 记录当前最小
            maxprofit = max(maxprofit,prices[i] - minprice) # 计算 当前最大利润（之前最大利润 与 当前价格与之前最小价格之差 的最大值）
        return maxprofit
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
