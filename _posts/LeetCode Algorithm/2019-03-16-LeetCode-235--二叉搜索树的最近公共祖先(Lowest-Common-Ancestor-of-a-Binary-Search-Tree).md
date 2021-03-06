---
layout: post
title:  LeetCode-235--二叉搜索树的最近公共祖先(Lowest-Common-Ancestor-of-a-Binary-Search-Tree
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}


![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-c5498fa1dac3a382.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [二叉搜索树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)
给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

[百度百科](https://baike.baidu.com/item/%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88/8918834?fr=aladdin)中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（**一个节点也可以是它自己的祖先**）。”

例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]

![image](http://upload-images.jianshu.io/upload_images/16846478-8773b4fa060425a2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


示例 1:

输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6 
解释: 节点 2 和节点 8 的最近公共祖先是 6。
示例 2:

输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
输出: 2
解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
 

说明:

所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉搜索树中。

## Python3实现
### 递归
```python
#@author:leacoder
#@des:  递归,  二叉搜索树的最近公共祖先
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if p.val<root.val and q.val<root.val: #如果 p q 的值都是小于root的值 那么 需要在二叉搜索树 左子树中找
            return self.lowestCommonAncestor(root.left,p,q)
        if p.val>root.val and q.val>root.val: #如果 p q 的值都是大于root的值 那么 需要在二叉搜索树 右子树中找
            return self.lowestCommonAncestor(root.right,p,q)
        return root  #其他情况  一个比root 大 一个比root小 那么 root必然为其公共祖先
```

### 循环
```python
#@author:leacoder
#@des:  循环,  二叉搜索树的最近公共祖先
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        while root:
            if p.val<root.val and q.val<root.val: #如果 p q 的值都是小于root的值 那么公共祖先必在其左子树中
                root = root.left
            elif p.val>root.val and q.val>root.val: #如果 p q 的值都是大于root的值 那么公共祖先必在其右子树中
                root = root.right
            else:
                return root
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

