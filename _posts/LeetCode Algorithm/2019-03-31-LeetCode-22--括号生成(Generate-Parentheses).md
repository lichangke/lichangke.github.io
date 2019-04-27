---
layout: post
title:  LeetCode-22--括号生成(Generate-Parentheses)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}

![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-fe604c1d3280ca45.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


#### [22\. 括号生成](https://leetcode-cn.com/problems/generate-parentheses/)

  给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

  例如，给出 n = 3，生成结果为：

    [
      "((()))",
      "(()())",
      "(())()",
      "()(())",
      "()()()"
    ]

## Python3实现
### 递归

```python
# @author:leacoder 
# @des:   递归 括号生成  
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        self.list = []
        self.fnrecursive(0,0,n,"")
        return self.list
    
   
    #left："("左括号被使用次数  right:")"右括号被使用次数 n:可以被使用括号对数  result：有效括号结果
    def fnrecursive(self,left,right,n,result):
        if left == n and right == n: # 左右括号使用次数均到达n次
            self.list.append(result)
            return
        # 1、要使括号有效 ，那么我们最先放的是 左括号 ，需要满足left < n
        if left < n:
            self.fnrecursive(left+1,right,n,result + "(")
        # 2、要使括号有效 ，右括号使用次数必然不大于左括号，并且 right < n
        if left > right and right < n: 
            self.fnrecursive(left,right+1,n,result + ")")
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

