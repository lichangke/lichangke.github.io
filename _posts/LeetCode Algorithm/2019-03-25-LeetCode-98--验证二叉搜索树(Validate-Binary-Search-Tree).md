---
layout: post
title:  LeetCode-98--验证二叉搜索树(Validate-Binary-Search-Tree)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}

![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-5621628e5fedf65f.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [验证二叉搜索树](https://leetcode-cn.com/problems/validate-binary-search-tree/)
    给定一个二叉树，判断其是否是一个有效的二叉搜索树。

    假设一个二叉搜索树具有如下特征：

    节点的左子树只包含小于当前节点的数。
    节点的右子树只包含大于当前节点的数。
    所有左子树和右子树自身必须也是二叉搜索树。
    示例 1:

    输入:
        2
       / \
      1   3
    输出: true
    示例 2:

    输入:
        5
       / \
      1   4
         / \
        3   6
    输出: false
    解释: 输入为: [5,1,4,null,null,3,6]。
         根节点的值为 5 ，但是其右子节点值为 4 。

## Python3 实现
### 中序遍历
```python
#@author:leacoder
#@des:  中序遍历  验证二叉搜索树
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        inorderlist = self.inorder(root) #中序遍历后 如果是二叉搜索树 那么 结果必然是递增有序的 
        return inorderlist == list(sorted(set(inorderlist))) #set 集合用于去重  有重复的数那么必然不是二叉搜索树
        
    def inorder(self,root): #中序遍历 形成 左 根 右形式
        if root is None:
            return []
        return self.inorder(root.left) + [root.val] + self.inorder(root.right)
    
    
    '''
    sort() 对list本身进行排序,改变list的值。sort()只能对list排序。
    sorted() 产生一个新的list，不改变list的值。sorted()可以对iterable对象排序
    集合（set）是一个无序的不重复元素序列。
    可以使用大括号 { } 或者 set() 函数创建集合，注意：创建一个空集合必须用 set() 而不是 { }，因为 { } 是用来创建一个空字典。
```
### 中序遍历 优化
```python
#@author:leacoder
#@des:  中序遍历 优化  验证二叉搜索树
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        self.prev = None
        return self.helper(root)
    
    def helper(self,root): #中序遍历 但是不全返回， 比较前节点是否比后节点小 小:二叉搜索树 大：非二叉搜索树
        if root is None:
            return True
        if not self.helper(root.left): #先判断左子树
            return False
        #前节点 与 后节点比  
        if self.prev and self.prev.val >= root.val:  #左子树:left 与root比    右子树：root与right比
            return False
        
        self.prev = root  #右子树将prev 设为 root
        #程序向后走（判断右叶子） 将前节点（root）与后节点（right）比较
        return self.helper(root.right) #再判断右子树
        
        '''
        对每个  left root right 判断 是否  left <root< right
        '''
```
### 递归比较min max
```python
#@author:leacoder
#@des:  递归 min max,  验证二叉搜索树
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        min = max = None
        return self.isValid(root,min,max)
    
    def isValid(self,root,min,max):
        if root is None:
            return True
        # 当前root节点值 必须在 min 和 max之间
        if min is not None and root.val <=min:
            return False
        if max is not None and root.val >=max:
            return False
        # 分别递归检测   root的左子树（min下界不关心，其上界必须是root的值） 与 root右子树（max上界不关心，其下界必须是root的值）
        if self.isValid(root.left,min,root.val) and self.isValid(root.right,root.val,max):
            return True
        else:
            return False
    
```

## Java实现
### 递归比较min max
```java
/*
 *@author:leacoder
 *@des:  递归比较min max,  验证二叉搜索树
 */
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public boolean isValidBST(TreeNode root) {
        Integer min = null;
        Integer max = null;
        
        return isValid(root,min,max);
    }
    public boolean isValid(TreeNode root,Integer min,Integer max){ //min 下界   max上界
        if(root == null) return true;
        if(min!=null && root.val <=min) return false; 
        if(max!=null && root.val >=max) return false;  //当前root节点值 必须在 min 和 max之间
        
        //注意下边函数式子     分别递归检测   root的左子树（min下界不关心，其上界必须是root的值） 与 root右子树（max上界不关心，其下界界必须是root的值）
        return isValid(root.left,min,root.val)&&isValid(root.right,root.val,max);
    }
}
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
