---
layout:    post
title:    LeetCode 24. 两两交换链表中的节点(Swap Nodes in Pairs)
author:    leacoder
categories:   Algorithm 
tags:
    Algorithm Leetcode
---

* content
{:toc}


![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-99e6ef96e7d6f9cb.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 两两交换其中相邻的节点
[LeetCode 24. 两两交换链表中的节点(Swap Nodes in Pairs)](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例:
给定 1->2->3->4, 你应该返回 2->1->4->3.
## C++实现
### 1、迭代实现 C++
[两两交换其中相邻的节点(Swap Nodes in Pairs) C++ 迭代实现](https://github.com/CK-Li/LeetCode/blob/master/24.%20Swap%20Nodes%20in%20Pairs/SwapNodesinPairs_2.cpp)
``` c++
 * @author:leacoder
 * @des: 迭代实现 两两交换链表中的节点
 */
class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        /*在头节点前 新建一节点，其next指向head。好处 将[]\[1]这种特殊情况能够统一处理*/
        ListNode *virtualnode = new ListNode(0);
        virtualnode->next = head;
        
        ListNode *node = virtualnode;//存储新的开始节点
        
        while(head&&head->next){
            ListNode *tmp = head->next;//不变的 
            head->next = tmp->next;
            tmp->next = head;//交换
            node->next = tmp;
            
            node = head;
            head = node->next;//下移
        }
        
        return virtualnode->next;
            
    }
};
```
### 2、递归实现 C++
[两两交换其中相邻的节点(Swap Nodes in Pairs) C++ 递归实现](https://github.com/CK-Li/LeetCode/blob/master/24.%20Swap%20Nodes%20in%20Pairs/SwapNodesinPairs.cpp)
``` c++
/**
 * @author:leacoder
 * @des: 递归实现 两两交换链表中的节点
 */
class Solution {
public:
    //每两个节点为一组  反转前的前节点（反转后的 后节点）、反转前的后节点（反转后的 前节点）
    //下一组 为 反转前的后节点（反转后的 前节点）的 next 以及 next.next
    ListNode* swapPairs(ListNode* head) { //入参 反转前的前节点（反转后的 后节点）
        ////传入的参数的合法性，递归的终止条件
        if (NULL==head || NULL==head->next) 
            return head; 
        ListNode *res = head->next; //记录 反转前的后节点（反转后的 前节点）
        head->next = swapPairs(res->next); //更新 反转后的 后节点 的next  为下一组 反转后的 前节点  （入参为反转前的后节点的next 即为下一组的 反转前的前节点（反转后的 后节点）
        res->next = head; //更新 反转后的 前节点的next 为 反转前 的 前节点
        
        return res;
    }
};
```
以【A B C D】为例，那么可分为2组【A B】【C D】递归到最后一层非head->next = NULL那层， ListNode* swapPairs(ListNode* head)｛｝中head为C，head->next为D。
那么就有：
```
      ·【C D】组 此时 head 为 C  交换前
        ListNode *res = head->next;   //D
        head->next = swapPairs(res->next); //C->next = D->next=NULL 入参为D->next   NULL值跳出递归 返回入参 
        res->next = head; //D->next = C
        return res; //D
        此时结果为 【A B D C】
      ·【A B】组 此时 head 为 A  交换前
        ListNode *res = head->next;   //B
        head->next = D //上次迭代返回值   swapPairs(C)
        res->next = head; //B->next = A
        return res; //B
        此时结果为 【B A D C】
```
其他情况可同上分析
## Java实现
Java实现逻辑上与C++无区别
### 1、迭代实现 Java
[两两交换其中相邻的节点(Swap Nodes in Pairs) Java 迭代实现](https://github.com/CK-Li/LeetCode/blob/master/24.%20Swap%20Nodes%20in%20Pairs/SwapNodesinPairs_2.java)
### 2、递归实现 Java

[两两交换其中相邻的节点(Swap Nodes in Pairs) Java 递归实现]((https://github.com/CK-Li/LeetCode/blob/master/24.%20Swap%20Nodes%20in%20Pairs/SwapNodesinPairs.java)
)
## Python3 实现
[两两交换其中相邻的节点(Swap Nodes in Pairs) Py3 迭代实现](https://github.com/CK-Li/LeetCode/blob/master/24.%20Swap%20Nodes%20in%20Pairs/SwapNodesinPairs.py)
``` python
#@author:leacoder
#@des: 循环实现  多元赋值

class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        pre,pre.next = self,head  #在头节点前 新建一节点pre，其next指向head
        while pre.next and pre.next.next:
            a = pre.next
            b = a.next
            pre.next,b.next,a.next = b,a,b.next
            pre = a
        return self.next
```
实现逻辑 与 C++、Java 无差别，但是采用了多元赋值


----
>*GitHub链接：*
>*[https://github.com/lichangke/LeetCode](https://github.com/lichangke/LeetCode)*

>*知乎主页：*
>*[https://www.zhihu.com/people/lichangke/](https://www.zhihu.com/people/lichangke/)*

>*简书主页*
>*[https://www.jianshu.com/u/3e95c7555dc7](https://www.jianshu.com/u/3e95c7555dc7)*

>*欢迎大家来一起交流学习*
