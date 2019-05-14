---
layout: post
title:  LeetCode-72--编辑距离(Edit-Distance)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}


![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-a0df1aee60ffa1b7.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [72\. 编辑距离](https://leetcode-cn.com/problems/edit-distance/)

```
    72. 编辑距离
    给定两个单词 word1 和 word2，计算出将 word1 转换成 word2 所使用的最少操作数 。

    你可以对一个单词进行如下三种操作：

    插入一个字符
    删除一个字符
    替换一个字符
    示例 1:

    输入: word1 = "horse", word2 = "ros"
    输出: 3
    解释: 
    horse -> rorse (将 'h' 替换为 'r')
    rorse -> rose (删除 'r')
    rose -> ros (删除 'e')
    示例 2:

    输入: word1 = "intention", word2 = "execution"
    输出: 5
    解释: 
    intention -> inention (删除 't')
    inention -> enention (将 'i' 替换为 'e')
    enention -> exention (将 'n' 替换为 'x')
    exention -> exection (将 'n' 替换为 'c')
    exection -> execution (插入 'u')
```

## Python3 实现
### 动态规划

```python
#@author:leacoder
#@des:  动态规划  编辑距离

class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        len1 = len(word1)
        len2 = len(word2)
        '''
        动态规划 
        step1: 状态  
        首先只定义一维 DP[i] 不能有效简化问题的处理
        使用 二维 DP[i][j]，表示 word1 的 i 个字母 与 word2 的 第 j 个字母 相同 需要的操作步骤数
        将最对 word1 处理 转化为 对 word1 和 word2 均处理
        word1 插入一个字符   DP[i-1][j] + 1 ->  DP[i][j]
        word1 删除一个字符 = word2 插入一个字符  DP[i][j-1] + 1 -> DP[i][j]
        word1 替换一个字符 = word1 word2 都替换一个字符 DP[i-1][j-1] + 1 -> DP[i][j]
        step2: 动态方程
        DP[i][j]  A、 word1 的 i 个字母 与 word2 的 第 j 个字母 相同
                     DP[i][j] =  DP[i-1][j-1]  #不操作
                  B、不相同,需要进行 插入 删除 或者 替换操作
                     DP[i][j]  =  min(DP[i-1][j] + 1,DP[i][j-1] + 1,DP[i-1][j-1]+1)
        
        '''
        DP = [[0 for _ in range(len2+1)] for _ in range(len1+1)]
        # 初始
        for i in range(len1+1):
            DP[i][0] = i
        for j in range(len2+1):
            DP[0][j] = j
        for i in range(1,len1+1):
            for j in range(1,len2+1):
                if word1[i - 1] == word2[j -1]:
                    DP[i][j] =  DP[i-1][j-1]
                else:
                    DP[i][j]  =  min(DP[i-1][j] + 1,DP[i][j-1] + 1,DP[i-1][j-1]+1)
        return DP[len1][len2]
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

