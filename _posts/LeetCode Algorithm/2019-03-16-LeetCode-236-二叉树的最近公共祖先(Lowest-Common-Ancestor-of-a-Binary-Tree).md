---
layout: post
title:  LeetCode-236-二叉树的最近公共祖先(Lowest-Common-Ancestor-of-a-Binary-Tree)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}



![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-7e7f97004a1f9077.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [二叉树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/)

给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

[百度百科](https://baike.baidu.com/item/%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88/8918834?fr=aladdin)中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（**一个节点也可以是它自己的祖先**）。”

例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]

![image](http://upload-images.jianshu.io/upload_images/16846478-1cbccc7cd1d4daf3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

示例 1:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出: 3
解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
示例 2:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出: 5
解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
 

说明:

所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉树中。

## Python3 实现
### 递归查找法 , 前序遍历
```python
#@author:leacoder
#@des:  递归查找法 , 后续遍历 二叉树的最近公共祖先
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution: #所有的递归的返回值有4种可能性，None、p、q、公共祖先
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if root is None: #当遍历到叶结点后就会返回None
            return root
        if root == p or root == q : #当找到p或者q的是时候就会返回pq
            return root #如果公共祖先是自己（pq），并不需要寻找另外一个，我们在执行前序遍历会先找上面的，后找下面的，我们会直接返回公共祖先
        leftNode = self.lowestCommonAncestor(root.left,p,q) #找root的左子树 找 p 或 q  返回的结点进行保存，可能是None 也可能是pq，还可能是公共祖先
        rightNode = self.lowestCommonAncestor(root.right,p,q) #找root的右子树 找 p 或 q  返回的结点进行保存，可能是None 也可能是pq，还可能是公共祖先
        
    
        if leftNode is not None and rightNode is not None:
            return root # p, q 分别位于 x 的左子树和右子树；
        elif rightNode is not None: #p, q 都在 x 的右子树（也包括祖先其自身，另一个字节点在右子树）； 
            return rightNode 
        elif leftNode is not None: # p, q 都在 x 的左子树（也包括祖先其自身，另一个字节点在左子树）；
            return leftNode 
        
    '''
     注意p,q必然存在树内, 且所有节点的值唯一!!!
        递归思想, 对以root为根的(子)树进行查找p和q, 如果root == None || p || q 直接返回root
        表示对于当前树的查找已经完毕, 否则对左右子树进行查找, 根据左右子树的返回值判断:
        1. 左右子树的返回值都不为None, 由于值唯一左右子树的返回值就是p和q, 此时root为LCA
        2. 如果左右子树返回值只有一个不为None, 说明只有p和q存在与左或右子树中, 最先找到的那个节点为LCA
        3. 左右子树返回值均为None, p和q均不在树中, 返回None
    '''
    
    '''
    对于一个公共祖先（一定有子节点才能当祖先）来说，其两个子节点 p、q 有三种分布情况
    1 p, q 分别位于 x 的左子树和右子树；
    2 p, q 都在 x 的左子树（也包括祖先其自身，另一个字节点在左子树）；
    3 p, q 都在 x 的右子树（也包括祖先其自身，另一个字节点在右子树）；

    上述3条规律对每一子树都成立， 所以只要检查每个节点的 左右子树即可， 所以要用后续遍历
    '''
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
