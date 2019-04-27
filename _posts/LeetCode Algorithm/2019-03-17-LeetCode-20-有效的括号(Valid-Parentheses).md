---
layout: post
title:  LeetCode-20-有效的括号(Valid-Parentheses)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}


![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-ad7c94b0d15a5cfb.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

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
### 堆栈 + 字典
[有效的括号(Valid Parentheses) Py3 堆栈 + 字典实现 ](https://github.com/lichangke/LeetCode/blob/master/20.%20Valid%20Parentheses/ValidParentheses.py)
```python
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
### 堆栈 + map
其解题思路同Python3一样
[有效的括号(Valid Parentheses) Java堆栈 + map实现 ](https://github.com/lichangke/LeetCode/blob/master/20.%20Valid%20Parentheses/ValidParentheses.java)

## C++实现
### 堆栈 + map
[有效的括号(Valid Parentheses) C++堆栈 + map实现 ](https://github.com/lichangke/LeetCode/blob/master/20.%20Valid%20Parentheses/ValidParentheses.cpp)

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
