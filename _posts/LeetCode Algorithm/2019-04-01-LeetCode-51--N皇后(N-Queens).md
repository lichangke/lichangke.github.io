---
layout: post
title:  LeetCode-51--N皇后(N-Queens)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}


![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-0bbcb4a0d1817b2f.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [51\. N皇后](https://leetcode-cn.com/problems/n-queens/)

*n *皇后问题研究的是如何将 *n* 个皇后放置在 *n*×*n* 的棋盘上，并且使皇后彼此之间不能相互攻击。

![image](http://upload-images.jianshu.io/upload_images/16846478-05148d288d4da965.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

上图为 8 皇后问题的一种解法。

给定一个整数 *n*，返回所有不同的 *n *皇后问题的解决方案。

每一种解法包含一个明确的 *n* 皇后问题的棋子放置方案，该方案中 `'Q'` 和 `'.'` 分别代表了皇后和空位。

**示例:**

**输入:** 4

**输出:** 

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

**解释:** 4 皇后问题存在两个不同的解法。

## Python3实现

## DFS 深度优先

![51. N-Queens.PNG](https://upload-images.jianshu.io/upload_images/16846478-07f676ce31d33534.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```python
# @author:leacoder 
# @des:  DFS 深度优先  N皇后

class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        if n < 1 : return []  #
        self.result = []
        shu = [] # 竖方向是否被攻击
        pie = [] # 撇方向是否被攻击  x y 坐标之和固定 x + y
        na = []  # 捺方向是否被攻击  x y 坐标之差固定 x - y
        
        self.DFS(n,shu,pie,na)
        
        return self.generate(n)
    
    def DFS(self,n,shu,pie,na): #深度优先搜索 
        p = len(shu) #  从 1 -> n
        if p == n :
            self.result.append(shu) #每层有且只能放一个
            return None
        for q in range(n): # 看成 x  每层枚举可能的 x
            if q not in shu and p - q not in na and p + q not in pie: #这一层存在可能位置，向下层搜索
                self.DFS(n,shu+[q],pie+[p+q],na+[p-q])  #深度优先搜索  将被攻击的 坐标记录下来 
        
    def generate(self,n):
        board=[]
        for res in self.result: #
            for count in res:
                board.append( "." * count + "Q" + "." * (n - count -1))  #将所有存放在一个列表中
        finalresult = []
        for i in range(0,len(board),n):  # 按每n组成一个新列表，最后生成所需形式
            finalresult.append(list(board[i:i+n]))
        return finalresult
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

