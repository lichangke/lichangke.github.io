---
layout: post
title:  LeetCode-208-实现-Trie-(前缀树)-(Implement-Trie-(Prefix-Tree))
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}


![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-445835ef18f65d0e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [208\. 实现 Trie (前缀树)](https://leetcode-cn.com/problems/implement-trie-prefix-tree/)

    实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。

    示例:

    Trie trie = new Trie();

    trie.insert("apple");
    trie.search("apple");   // 返回 true
    trie.search("app");     // 返回 false
    trie.startsWith("app"); // 返回 true
    trie.insert("app");   
    trie.search("app");     // 返回 true
    说明:

    你可以假设所有的输入都是由小写字母 a-z 构成的。
    保证所有输入均为非空字符串。
    在真实的面试中遇到过这道题？

## Python3 实现
```python
# @author:leacoder 
# @des:  实现 Trie (前缀树)
class Trie:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.root = {}
        self.endofword = "end"

    def insert(self, word: str) -> None:
        """
        Inserts a word into the trie.
        """
        node = self.root
        for char in word:
            # dict.setdefault(key, default=None) 如果 key 在 字典中，返回对应的值。
            # 如果不在字典中，则插入 key 及设置的默认值 default，并返回 default ，default 默认值为 None。
            node = node.setdefault(char,{}) 
            
        node[self.endofword] = self.endofword

    def search(self, word: str) -> bool:
        """
        Returns if the word is in the trie.
        """
        node = self.root
        for char in word:
            if char not in node:
                return False
            #node = node[char]
            node = node.get(char)
        return self.endofword in node
        

    def startsWith(self, prefix: str) -> bool:
        """
        Returns if there is any word in the trie that starts with the given prefix.
        """
        node = self.root
        for char in prefix:
            if char not in node:
                return False
            #node = node[char]
            node = node.get(char)
        return True
```

## Java 实现
```java
/*
 *@author:leacoder
 *@des:  实现 Trie (前缀树)
 */
class Trie {
    
    public int SIZE = 26;
    public TrieNode root;
    
    class TrieNode {
        
        TrieNode(char c){
            this.val = c;
            this.isWord = false;
            this.child = new TrieNode[SIZE];
        }
        
        public char val;
        public boolean isWord;
        public TrieNode[] child ;
    }
    
    

    /** Initialize your data structure here. */
    public Trie() {
        this.root = new TrieNode(' ');
    }
    
    /** Inserts a word into the trie. */
    public void insert(String word) {
        if(word == null || word.length() == 0) return;
        TrieNode node = this.root;
        for( int i = 0; i < word.length(); i++ ){
            char c = word.charAt(i);
            if( node.child[c - 'a'] == null){
                node.child[c - 'a'] = new TrieNode(c);
            } 
            node = node.child[c - 'a'];
        }
        node.isWord = true;
        
    }
    
    /** Returns if the word is in the trie. */
    public boolean search(String word) {
        TrieNode node = this.root;
        for( int i = 0; i < word.length(); i++ ){
            char c = word.charAt(i);
            if( node.child[c - 'a'] == null){
                return false;
            }
            node = node.child[c - 'a'];
        }
        
        return node.isWord;
    }
    
    /** Returns if there is any word in the trie that starts with the given prefix. */
    public boolean startsWith(String prefix) {
        
        TrieNode node = this.root;
        for( int i = 0; i < prefix.length(); i++ ){
            char c = prefix.charAt(i);
            if( node.child[c - 'a'] == null){
                return false;
            }
            node = node.child[c - 'a'];
        }
        
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */
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
