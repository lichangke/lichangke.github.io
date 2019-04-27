---
layout: post
title:  LeetCode-52--N皇后-II(N-Queens-II)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}


![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-7cc089d35617447e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [52\. N皇后 II](https://leetcode-cn.com/problems/n-queens-ii/)

52. N皇后 II
    n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
![image.png](https://upload-images.jianshu.io/upload_images/16846478-9434707cd6707e0b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

        上图为 8 皇后问题的一种解法。

        给定一个整数 n，返回 n 皇后不同的解决方案的数量。

        示例:

        输入: 4
        输出: 2
        解释: 4 皇后问题存在如下两个不同的解法。
        [
         [".Q..",  // 解法 1
          "...Q",
          "Q...",
          "..Q."],

         ["..Q.",  // 解法 2
          "Q...",
          "...Q",
          ".Q.."]
        ]


## Python3 实现
### DFS 深度优先
可参见 [LeetCode 51. N皇后(N-Queens)](https://www.jianshu.com/p/e892a4220d71)
```python
# @author:leacoder 
# @des:  DFS 深度优先  N皇后II

class Solution:
    def totalNQueens(self, n: int) -> int:
        if n < 1 : return []  #
        self.count = 0
        shu = [] # 竖方向是否被攻击
        pie = [] # 撇方向是否被攻击  x y 坐标之和固定 x + y
        na = []  # 捺方向是否被攻击  x y 坐标之差固定 x - y
        
        self.DFS(n,shu,pie,na)
        
        return self.count
    
    def DFS(self,n,shu,pie,na): #深度优先搜索 
        p = len(shu) #  从 1 -> n
        if p == n :
            self.count += 1 #每层有且只能放一个
            return 
        for q in range(n): # 看成 x  每层枚举可能的 x
            if q not in shu and p - q not in na and p + q not in pie: #这一层存在可能位置，向下层搜索
                self.DFS(n,shu+[q],pie+[p+q],na+[p-q])  #深度优先搜索  将被攻击的 坐标记录下来 
```

### 位运算 + DFS 深度优先 

![image.png](https://upload-images.jianshu.io/upload_images/16846478-daa19dce84669ffe.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

    + 以 8 Q为例
    从第一行开始   由于棋盘第一行没有放任何皇后那么 row 行 cols 列 pie 撇 na 捺 位没有不可放置的 
    也就是 下方代码 self.DFS(n,0,0,0,0)处
    + 入参：1 表示被攻击，0表示可放置  ，下一行cols pie na 方向上被攻击位置
    cols:  0 0 0 0 0 0 0 0
    pie:    0 0 0 0 0 0 0 0
    na:     0 0 0 0 0 0 0 0
    本行（第1行） 所有被攻击位置  col | pie | na 
    0 0 0 0 0 0 0 0   （1 表示被攻击，0表示可放置）
    取反处理后的到：
    bits:   1 1 1 1 1 1 1 1      （ 0 表示被攻击位  1 表示可放置位）
    选取图中 黄色 Q放置皇后（代码是从右往左一次探索，这里假设在黄色Q处用于说明）
    p：0 0 0 1 0 0 0 0   （ 0 表示被攻击位  1 表示可放置位）
    + 向下一层深度搜索(第 2层)：
    self.DFS(n , row + 1, cols | p, (pie | p) << 1, (na | p) >> 1)  # 递归处理下一层
    那么cols pie na 与 p 处理后得到新的入参 （1 表示被攻击，0表示可放置）：下一行cols pie na 方向上被攻击位置
    cols: 0 0 0 1 0 0 0 0
    pie :  0 0 1 0 0 0 0 0
    na : 0 0 0 0 1 0 0 0 
    本行（第2行） 所有被攻击位置  col | pie | na 
    0 0 1 1 1 0 0 0  （1 表示被攻击，0表示可放置）
    图中（第2行） 黄色 1
    取反处理后的到：
    bits:   1 1 0 0 0 1 1 1       （ 0 表示被攻击位  1 表示可放置位）
    选取图中 蓝色 Q放置皇后（代码是从右往左一次探索，这里假设在蓝色Q处用于说明）
    p：0 0 0 0 0 0 1 0    （ 0 表示被攻击位  1 表示可放置位）
    + 向下一层深度搜索(第 3层)： 
    self.DFS(n , row + 1, cols | p, (pie | p) << 1, (na | p) >> 1)  # 递归处理下一层
    那么cols pie na 与 p 处理后得到新的入参 （1 表示被攻击，0表示可放置）：下一行cols pie na 方向上被攻击位置
    cols: 0 0 0 1 0 0 1 0
    pie :  0 1 0 0 0 1 0 0
    na : 0 0 0 0 0 1 0 1  
    本行（第三行） 所有被攻击位置  col | pie | na 
    0 1 0 1 0 1 1 1  （1 表示被攻击，0表示可放置）
    图中（第三行） 黄色 1 + 蓝色 1

```python
# @author:leacoder 
# @des:  位运算 + DFS 深度优先  N皇后II
class Solution:
    def totalNQueens(self, n: int) -> int:
        if n < 1: return []
        self.count = 0
        self.DFS(n,0,0,0,0) #从第一行开始   由于棋盘第一行没有放任何皇后那么 row 行 cols 列 pie 撇 na 捺 位没有不可放置的
        return self.count
    
    def DFS(self, n, row, cols, pie, na):
        if row >= n: #递归终止条件  深度搜索 n 个皇后均已放在棋盘上
            self.count += 1
            return
        # col | pie | na  (1 表示被攻击, 或了以后 等到本行 所有被攻击位置 )
        # ~( col | pie | na )  0 表示被攻击位  1 表示可放置位
        # (( 1<<n ) - 1)   形成 n位全1的二进制 筛子  用于 筛选出 n 位内的有效数据
        bits = ( ~( cols | pie | na )) & (( 1<<n ) - 1)
        
        while bits:
            p = bits & (-bits)  # 取出最低位的1 也就是最低位可以放置 皇后Q的位置
            # row + 1 下移一层   cols | p : p 上放置 Q 后  cols 列方向被攻击位刷新
            # (pie | p) << 1 下一层 pie撇方向被攻击位置刷新
            # (na | p) >> 1 下一层 na 捺方向被攻击位置刷新
            self.DFS(n , row + 1, cols | p, (pie | p) << 1, (na | p) >> 1)  # 递归处理下一层
            bits = bits & (bits - 1) #去掉最低位的 1 （表示这种可能已被探寻）
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
