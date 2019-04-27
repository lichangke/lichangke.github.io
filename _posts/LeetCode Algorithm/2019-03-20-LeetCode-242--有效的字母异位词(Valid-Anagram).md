---
layout: post
title:  LeetCode-242--有效的字母异位词(Valid-Anagram)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}



![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-6f15a9aad41a7f0b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### [有效的字母异位词](https://leetcode-cn.com/problems/valid-anagram/)
    给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的一个字母异位词。

    示例 1:

    输入: s = "anagram", t = "nagaram"
    输出: true
    示例 2:

    输入: s = "rat", t = "car"
    输出: false
    说明:
    你可以假设字符串只包含小写字母。

    进阶:
    如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

## Python3 实现
### 排序法
```python
# @author:leacoder
# @des:  排序法 有效的字母异位词
# 时间复杂度 O(NlogN)
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return sorted(s) == sorted(t)
```

### 使用map 计算
```python
# @author:leacoder
# @des:  使用map 计算 有效的字母异位词
# 时间复杂度 O(N)
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        dic1,dic2 = {},{}
        for item in s:
            dic1[item] = dic1.get(item,0) + 1  #dic.get(key, default=None)    #返回指定键的值，如果值不在字典中返回default值
        for item in t:
            dic2[item] = dic2.get(item,0) + 1
        return dic1==dic2
```

## Java实现
###  另类map 计算
```java
/*
 *@author:leacoder
 *@des:  另类map 计算 有效的字母异位词
 */
class Solution {
    public boolean isAnagram(String s, String t) {
        int[] Counts = new int[26];
        for (char ch : s.toCharArray()) {
            Counts[ch - 'a']++;
        }
        for (char ch : t.toCharArray()) {
            Counts[ch - 'a']--;
        }
        for (int i = 0; i < 26; i++) {
            if (Counts[i] != 0) {
                return false;
            }
        }
        return true;
    }
}
```
## C++实现
### map 计算
```c++
/*
 *@author:leacoder
 *@des:  map 计算 有效的字母异位词
 * 时间复杂度O(N)
 */

class Solution {
public:
    bool isAnagram(string s, string t) {
       if (s.size() != t.size()) return false;

		unordered_map<char, int> mp1;
		unordered_map<char, int> mp2;

		for (char c : s) mp1[c]++;
		for (char c : t) mp2[c]++;

		unordered_map<char, int>::iterator it;
		for (it = mp1.begin(); it != mp1.end(); it++) //for循环遍历map
			if (it->second != mp2[it->first]) //it->second 为value it->first为key
				return false;
		return true;
    }
};
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


