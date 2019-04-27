---
layout: post
title:  LeetCode-111--二叉树的最小深度(Minimum-Depth-of-Binary-Tree)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}


![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-84ae625e47c363f4.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [111\. 二叉树的最小深度](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明: 叶子节点是指没有子节点的节点。

示例:

给定二叉树 [3,9,20,null,null,15,7],

      3
     / \
    9  20
      /  \
     15   7

返回它的最小深度  2.

## Python3实现
### DFS 深度优先
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
# @author:leacoder 
# @des:  DFS 深度优先  二叉树的最大深度  时间复杂度 O(n)

class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if not root: 
            return 0  #入参校验
        else: # DFS
            leftlevel = self.maxDepth(root.left) #  递归 左子树 得到其深度
            rightlevel = self.maxDepth(root.right) #  递归 右子树 得到其深度
            return 1 + max(leftlevel,rightlevel) # 取最大深度 
```
### BFS广度优先

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
# @author:leacoder 
# @des:  BFS 广度优先  二叉树的最大深度  时间复杂度 O(n)

class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if not root: 
            return 0  #入参校验
        else: # BFS
            queue = collections.deque()
            queue.append(root) # 辅助队列
            maxlevel = 0 #层级记录
            while queue:
                levelsize = len(queue) #
                for i in range(levelsize): 
                    node = queue.popleft()
                    if node.left:
                        queue.append(node.left)
                    if node.right:
                        queue.append(node.right)
                maxlevel +=1 # 广度优先搜索 每层搜完 层级+1
            
            return maxlevel
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

