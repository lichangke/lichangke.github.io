---
layout: post
title:  LeetCode-206--反转链表(Reverse-Linked-List)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}


![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-4d8b4d54141e4edc.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


#反转一个单链表

[LeetCode 206\. 反转链表(Reverse Linked List)](https://leetcode-cn.com/problems/reverse-linked-list/)

**示例:**

**输入:**1->2->3->4->5->NULL**输出:**5->4->3->2->1->NULL

## C++实现

### 1、迭代实现 C++

[反转链表(Reverse Linked List)C++迭代实现](https://github.com/CK-Li/LeetCode/blob/master/206.%20Reverse%20Linked%20List/ReverseLinkedList.cpp)

```c++
/**
 * @author:leacoder
 * @des: 迭代实现 反转链表
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* cur = head; 	//当前指针节点
        ListNode* prev = NULL;	//前指针节点
        ListNode* temp = NULL;	//临时节点
        while(NULL!=cur){
            temp = cur->next;	//临时节点，暂存当前节点的下一节点(断开处的节点)，用于后移
            cur->next = prev;	//将当前节点指向它前面的节点
            prev = cur;	//前指针后移
            cur = temp;	//当前指针后移
        }
        return prev;
    }
};
``` 

### 2、递归实现 C++
[反转链表(Reverse Linked List)C++递归实现](https://github.com/CK-Li/LeetCode/blob/master/206.%20Reverse%20Linked%20List/ReverseLinkedList_2.cpp)

```c++
/**
 * @author:leacoder
 * @des: 递归实现 反转链表
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        //第一个条件是判断递归开始，传入的参数的合法性。第二个是递归的终止条件
        if (NULL==head || NULL==head->next) 
            return head; 
        ListNode* result = reverseList(head->next); // 循环递归找到最后一个节点 (head->next为最后一节点） 那么 result指向最后节点 以【A B C D】为例 指向 D
        head->next->next = head;//以【A B C D】为例 最底部到达此处时 head 为 C ,head->next 为 D ，反转为  head->next->next 为 C (head)
        head->next = NULL; //以【A B C D】为例 断开 C D 之间连接 C 的 next 指向 NULL，即为  head->next = NULL 如果不断掉 C D成环 递归无法终止
        
        return result; 
    }
};
```
递归实现注意传入的参数的合法性以及递归的终止条件终止条件的判断，特别注意 最后
```
head->next = NULL 
```
置空不然链表成环
## Java实现
Java实现逻辑上与C++无区别
### 1、迭代实现 Java
[反转链表(Reverse Linked List) JAVA 迭代实现](https://github.com/CK-Li/LeetCode/blob/master/206.%20Reverse%20Linked%20List/ReverseLinkedList.java)
### 2、递归实现 Java
[反转链表(Reverse Linked List) JAVA 递归实现](https://github.com/CK-Li/LeetCode/blob/master/206.%20Reverse%20Linked%20List/ReverseLinkedList_2.java)
## Python3 实现
[反转链表(Reverse Linked List) Py3 迭代实现](https://github.com/CK-Li/LeetCode/blob/master/206.%20Reverse%20Linked%20List/ReverseLinkedList_2.py)
```python
# @author:leacoder
# @des: 迭代实现 反转链表

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        cur = head
        prev = None
        while cur:
            cur.next,prev,cur = prev,cur,cur.next  #多元赋值
        return prev
```
实现逻辑 与 C++、Java 无差别，但是采用了一种赋值机制即多元赋值
采用这种方式赋值时，等号两边的对象都是元组并且元组的小括号是可选的。通常形式为
```
x, y = 1,'a string'
等同于(x, y) = (1,'a string') 
这种赋值类型最经常用到的环境是变量交换，形如
x, y = y, x
这种交换方式无需中间变量即可交换两个变量的值
```

```
x = 123
y = 'a string'
print(x,y)
x, y = y, x
print(x,y)
输出结果：
123 a string
a string 123
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

