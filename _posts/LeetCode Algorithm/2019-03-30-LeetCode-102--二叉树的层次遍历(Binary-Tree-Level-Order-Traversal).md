---
layout: post
title:  LeetCode-102--二叉树的层次遍历(Binary-Tree-Level-Order-Traversal)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}


![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-882f8a75bae24779.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [102\. 二叉树的层次遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)

给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

例如:

给定二叉树: [3,9,20,null,null,15,7],

      3
     / \
    9  20
      /  \
     15   7

返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
]

## Python3实现

### BFS广度优先

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
# @author:leacoder 
# @des:  BFS 广度优先  二叉树的层次遍历  时间复杂度 O(n)

class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        
        if not root: return []  #输入参数校验
        result = []
        
        # deque 可参考 https://docs.python.org/3/library/collections.html#collections.deque
        queue = collections.deque()  #辅助队列  
        queue.append(root)
        # visited = set(root) #用于存放是否访问过 这样可以访问图
        
        while queue:
            level_node_count = len(queue) #获取当前层级 节点个数 
            currentlevel_nodes = [] #用于存放当前层级所有节点
            
            for i in range(level_node_count): #根据当前层级节点个数  循环遍历当前层级所有node
                node = queue.popleft()  #从左移除 节点
                currentlevel_nodes.append(node.val) #存储当前节点
                #由于循环之前已经获取 当前层级节点个数 ,循环按当前层级节点个数遍历并移除当前节点   
                #故下一层级节点直接加入 当循环结束 queue 存放的就只有下一层级所有节点 
                if node.left:#下一层 当前节点左子节点 不为空
                    queue.append(node.left) #加入  queue 
                if node.right:#下一层 当前节点右子节点 不为空
                    queue.append(node.right)
                    
            result.append(currentlevel_nodes)
            
        return result
```
###DFS深度优先

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
# @author:leacoder 
# @des:  DFS 深度优先  二叉树的层次遍历  时间复杂度 O(n)

class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root: return []
        self.result = []
        self.dfs(root,0) #深度优先搜索，每次传入层级 便于将每层级节点存放起来
        return self.result
    def dfs(self,node,level):
        if not node: return []
        
        if len(self.result) < level +1: #结果按这种方式 [ [0层数据],[1层数据] ,... ,[n层数据] ] 存储
            self.result.append([])  # 如果结果长度小于了层级 表明 需要新加一层级数据存放[]
            
        self.result[level].append(node.val) #将当前节点 按层级 存放入对应结果中
        
        self.dfs(node.left,level+1)  #递归深度优先查找  level 每层加1
        self.dfs(node.right,level+1)  #递归深度优先查找  level 每层加1
```

## Java
### BFS广度优先

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 *@author:leacoder 
 *@des:  BFS 广度优先  二叉树的层次遍历  时间复杂度 O(n)
 */
class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        
        List<List<Integer>> result = new ArrayList();
        if (root == null)
            return result;
        
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        
        while(!q.isEmpty()){
            int levelSize = q.size();
            List<Integer> currentLevel = new ArrayList();
            for(int i = 0; i < levelSize; i++ ){
                TreeNode currentNode = q.poll(); //先进先出 从第一个元素（头部）  移除
                currentLevel.add(currentNode.val);
                if(currentNode.left!=null){
                    q.add(currentNode.left);
                }
                if(currentNode.right!=null){
                    q.add(currentNode.right);
                }
            }
            result.add(currentLevel);
        }
        return result;
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
