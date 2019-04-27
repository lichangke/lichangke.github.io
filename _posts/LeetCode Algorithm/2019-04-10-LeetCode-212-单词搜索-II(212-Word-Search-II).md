---
layout: post
title:  LeetCode-212-单词搜索-II(212-Word-Search-II)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}


![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-3b1024ff84c175e2.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [212\. 单词搜索 II](https://leetcode-cn.com/problems/word-search-ii/)

    给定一个二维网格 **board **和一个字典中的单词列表 **words**，找出所有同时在二维网格和字典中出现的单词。

    单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。

    **示例:**
    **输入:** 
    **words** = `["oath","pea","eat","rain"]` and **board** =
    [
      ['**o**','**a**','a','n'],
      ['e','**t**','**a**','**e**'],
      ['i','**h**','k','r'],
      ['i','f','l','v']
    ]

    **输出:**["eat","oath"]
    **说明:**
    你可以假设所有输入都由小写字母 `a-z` 组成。

    **提示:**

    -   你需要优化回溯算法以通过更大数据量的测试。你能否早点停止回溯？
    -   如果当前单词不存在于所有单词的前缀中，则可以立即停止回溯。什么样的数据结构可以有效地执行这样的操作？散列表是否可行？为什么？ 前缀树如何？如果你想学习如何实现一个基本的前缀树，请先查看这个问题： [实现Trie（前缀树）](https://leetcode-cn.com/problems/implement-trie-prefix-tree/description/)。


## Python3 实现

```python
# @author:leacoder 
# @des: Trie (前缀树，字典树) + DFS  单词搜索 II
# 将words存入 Trie 中，然后将board 中的字母按顺序依次与 Trie 中字母比较 


dx = [ 0, 0,-1, 1]
dy = [-1, 1, 0, 0,]
# 在board 中以当前位置（x0,y0） 上下左右的偏移量 ,上偏移(x0,y0-1) 下偏移（x0,y0+1） 左偏移（x0+1,y0） 右偏移（x0-1,y0）

class Trie: #辅助 Trie
    def __init__(self):
        self.root = {}
        self.endofword = "end"

    def insert(self, word: str) -> None:
        node = self.root
        for char in word:
            # dict.setdefault(key, default=None) 如果 key 在 字典中，返回对应的值。
            # 如果不在字典中，则插入 key 及设置的默认值 default，并返回 default ，default 默认值为 None。
            node = node.setdefault(char,{})      
        node[self.endofword] = self.endofword

class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        if not board or not board[0]: return []
        if not words: return []
        self.result = set()
        self.myTrie = Trie()
        
        for word in words:
            self.myTrie.insert(word)
            
        self.row ,self.col = len(board), len(board[0])  # 行 y   列 x
        
        for i in range(self.row): 
            for j in range(self.col): #board中每一个字符开始 深度优先搜索
                if board[i][j] in self.myTrie.root: # myTrie 中有前缀 board[i][j]
                    self._dfs(board,i,j,"",self.myTrie.root)
                    
        return list(self.result)
    
    # def
    def _dfs(self, board, i, j, cur_word, cur_dict):
        
        cur_word += board[i][j]  #board[i][j] 必然已经搜索到 累加字符  
        cur_dict = cur_dict[board[i][j]] # Trie树的下一层 某个word的下一字符
        
        if self.myTrie.endofword in cur_dict: # 是否已经探寻到Trie最后 也就是words中某个word 被找到
            self.result.add(cur_word)
        
        tmp,board[i][j] = board[i][j],"#"  #暂存 board[i][j]  用“#” 标记是否被访问过了   用于下面偏移
        
        for k in range(4): # 上下左右偏移 
            y, x = i + dy[k], j + dx[k]
            # 上下左右偏移 必须在row和col之内，偏移后的字符 board[y][x]没有被访问处理过，并且 偏移后的字符在Trie树的下一层有
            if 0 <= x < self.col and 0 <= y < self.row: # 注意范围
                if board[y][x] !="#" and board[y][x] in cur_dict:
                    self._dfs(board,y,x,cur_word,cur_dict)  # 深度优先继续搜索
        
        board[i][j] = tmp #循环结束 恢复以前数据 （board[i][j]之前被设置为"#"标记是否被访问过了）     
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

