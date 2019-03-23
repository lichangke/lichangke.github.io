---
layout: post
title:   LeetCode 20.有效的括号(Valid Parentheses)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}


## 有效的括号

[有效的括号（Valid Parentheses）](https://leetcode-cn.com/problems/valid-parentheses/)
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true

## Python3 实现

### 1、堆栈 + 字典

[有效的括号(Valid Parentheses) Py3 堆栈 + 字典实现 ](https://github.com/lichangke/LeetCode/blob/master/20.%20Valid%20Parentheses/ValidParentheses.py)
```
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        paren_dict = {')':'(',']':'[','}':'{'}  #有配对情况 可以使用dict存储其键值对
        for c in s:
            if c not in paren_dict: #右括号类型 入栈
                stack.append(c)
            elif not stack: #如果这时栈已经空了 无效 注这个判断需要在下一个判断之前
                return False
            elif stack.pop()!= paren_dict[c]: #左括号类型 其paren_dict对应值需要与栈顶元素匹配 
                return False
        return not stack #s遍历完了  如果为空栈 有效 否则为无效
```

## Java实现

### 1、堆栈 + map

其解题思路同Python3一样
[有效的括号(Valid Parentheses) Java堆栈 + map实现 ](https://github.com/lichangke/LeetCode/blob/master/20.%20Valid%20Parentheses/ValidParentheses.java)

## C++实现

### 1、堆栈 + map

[有效的括号(Valid Parentheses) C++堆栈 + map实现 ](https://github.com/lichangke/LeetCode/blob/master/20.%20Valid%20Parentheses/ValidParentheses.cpp)


