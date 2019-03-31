---
layout:    post
title:    LeetCode 141. 环形链表(Linked List Cycle)
author:    leacoder
categories:   Algorithm 
tags:
    Algorithm Leetcode
---

* content
{:toc}

![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-1484f807618fc51f.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 环形链表
[环形链表(Linked List Cycle)](https://leetcode-cn.com/problems/linked-list-cycle/)
给定一个链表，判断链表中是否有环。

为了表示给定链表中的环，我们使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 `pos` 是 `-1`，则在该链表中没有环。

**示例 1：**

**输入：**head = [3,2,0,-4], pos = 1
**输出：**true
**解释：**链表中有一个环，其尾部连接到第二个节点。
</pre>

![image](http://upload-images.jianshu.io/upload_images/16846478-7f225b016cbb23fa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**示例 2：**

**输入：**head = [1,2], pos = 0
**输出：**true
**解释：**链表中有一个环，其尾部连接到第一个节点。


![image](http://upload-images.jianshu.io/upload_images/16846478-5d22898dcf1b6191.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**示例 3：**

**输入：**head = [1], pos = -1
**输出：**false
**解释：**链表中没有环。

![image](http://upload-images.jianshu.io/upload_images/16846478-b9a206640305b298.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
有两种解题思路：
1、存储记录，遍历链表与存储记录进行比较，如果不存在这将其记录下来，如果存在那么链表成环
2、快慢指针，两个指针循环遍历链表，慢指针每次循环移一步快指针每次循环移两步，如果链表遍历结束之前存在快慢指针指向同一节点则链表成环
## Python3 实现
### 1、存储记录 实现 Py3
[环形链表(Linked List Cycle) Py3 存储记录 实现](https://github.com/CK-Li/LeetCode/blob/master/141.%20Linked%20List%20Cycle/LinkedListCycle.py)
```
# @author:leacoder
# @des:  存储记录 环形链表
class Solution(object):
    def hasCycle(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        save = set() #用于 存储 链表中每个节点地址
        cur = head
        while cur is not None: #循环迭代链表
            if cur in save: #是否有记录
                return True #有返回True
            else:
                save.add(cur) #存储记录cur
                cur = cur.next #下移
        return False
```
### 2、快慢指针 实现 Py3
[环形链表(Linked List Cycle) Py3 快慢指针 实现](https://github.com/CK-Li/LeetCode/blob/master/141.%20Linked%20List%20Cycle/LinkedListCycle_2.py)
```
# @author:leacoder
# @des:  快慢指针 环形链表

class Solution(object):
    def hasCycle(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        fast = slow = head
        while slow and fast and fast.next:
            slow = slow.next  #慢指针 每次移一步
            fast = fast.next.next #快指针 每次移二步
            if slow == fast: 
                return True
        return False
```
## Java实现
Java实现逻辑上与Python3无区别
### 1、存储记录 实现 Java
[环形链表(Linked List Cycle) Java 存储记录 实现](https://github.com/CK-Li/LeetCode/blob/master/141.%20Linked%20List%20Cycle/LinkedListCycle.java)
### 2、快慢指针 实现 Java
[环形链表(Linked List Cycle) Java 快慢指针 实现](https://github.com/CK-Li/LeetCode/blob/master/141.%20Linked%20List%20Cycle/LinkedListCycle_2.py)

## C++实现
[环形链表(Linked List Cycle) C++ 快慢指针 实现](https://github.com/CK-Li/LeetCode/blob/master/141.%20Linked%20List%20Cycle/LinkedListCycle.cpp)

## 扩展阅读：
[Python3 集合](http://www.runoob.com/python3/python3-set.html)
[Python Data Structures](https://docs.python.org/3/tutorial/datastructures.html)
[Java 集合框架](http://www.runoob.com/java/java-collections.html)
[Java HashSet api doc from oracle ](https://docs.oracle.com/javase/7/docs/api/java/util/HashSet.html)
[HashSet 的实现原理](http://wiki.jikexueyuan.com/project/java-collection/hashset.html)

----
>*GitHub链接：*
>*[https://github.com/lichangke/LeetCode](https://github.com/lichangke/LeetCode)*

>*知乎主页：*
>*[https://www.zhihu.com/people/lichangke/](https://www.zhihu.com/people/lichangke/)*

>*简书主页*
>*[https://www.jianshu.com/u/3e95c7555dc7](https://www.jianshu.com/u/3e95c7555dc7)*

>*欢迎大家来一起交流学习*