---
layout: post
title:  LeetCode-25-k个一组翻转链表(Reverse-Nodes-in-k-Group)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}


![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-3ce5a2f42859cca9.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## k个一组翻转链表

    给出一个链表，每 k 个节点一组进行翻转，并返回翻转后的链表。

    k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么将最后剩余节点保持原有顺序。

    示例 :

    给定这个链表：1->2->3->4->5

    当 k = 2 时，应当返回: 2->1->4->3->5

    当 k = 3 时，应当返回: 3->2->1->4->5

    说明 :

    你的算法只能使用常数的额外空间。
    你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

## C++实现
### 存储法
用数组存储k个元素，虽然能通过但是执行用时有点长，不过逻辑简单
```c++
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 * @author:leacoder
 * @des: 存储法 k个一组翻转链表
 */
class Solution {
public:
    ListNode* reverseKGroup(ListNode* head, int k) {
        ListNode *nodearray[k];//存储 需翻转的 k个节点
        ListNode* result = new ListNode(0); //翻转后链表 用于结果返回
        ListNode* ret = result;//由于存储翻转后链表
        int count = 0;
        while( NULL != head){
            ListNode* next = head->next; //记录下移节点
            nodearray[count] = head; //记录到数组
            count++;//数组 下标自加 
            if(k == count){ //已存 k个值  需要翻转了
               for(int i = k;i>0;i--){ //循环读取 数组中数据
                   ret->next = nodearray[i-1]; //从后往前去数组中数据 添加到ret链表中
                   ret = ret->next;//移位
                   nodearray[i-1] = NULL;//置空
                   count--;//数组中数据个数--
               }
            }
            head = next;
        }
        
        for(int i = 0;i<count;i++){//处理不需要翻转的数据
           ret->next = nodearray[i];
           ret = ret->next;
           nodearray[i] = NULL;
        }
        ret->next = NULL;
        return result->next;
    }
};
```
k作为函数参数传入后就确定了可以当做常数，但是k作为参数可以为合理范围内任意值不确定，这点和题目描述说明貌似有点出入 

说明 : 你的算法只能使用常数的额外空间。 

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

我这种方法处理也只是提供一种思路，待后续其他实现方法

## Python3实现
### 借助单链表翻转 
```python
# @author:leacoder
# @des: 借助单链表翻转  k个一组翻转链表

class Solution:
    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:
        cur = head #由于遍历
        dim = ListNode(0) #新建一节点 
        dim.next = head #next指向head
        pre = dim #pre 赋值为 dim  1、记录和获取 k个一组的头 2、方便统一处理
        i = 1
        while cur: #遍历链表
            if i%k == 0: #k个一组 对这里面的数据翻转
                temp = cur.next #记录 后一个 k个一组的 头节点
                cur.next = None #赋值为None 前面 k个一组数据 为新的链表 以 None结束  
                end, start = self.reverse(pre.next)  #翻转新链表 返回头尾  注pre.next 为新链表翻转前的头
                pre.next = start  # 将翻转后的 链表头节点 赋值给 pre.next 链入按需要处理过的链表中
                end.next = temp #将翻转后的尾节点的next  end.next赋值为temp(后一个 k个一组的 头节点)  链入按需要处理过的链表中
                pre = end #pre 赋值为end 由于下一次循环 其 next为下一个 k个一组的头节点
                cur = temp #将之前 存下来的 后一个 k个一组的 头节点 赋值给 cur ，while循环下移
            else:
                cur = cur.next #我们关心k个一组的首尾
            i += 1
        return dim.next
    
    def reverse(self, head): #翻转链表
        dim1 = ListNode(0)
        dim1.next = head
        cur = head
        pre = None
        while cur: #遍历
            tmp = cur.next #存储 cur.next
            cur.next = pre #翻转 将 cur.next 赋值为pre
            pre = cur #pre移动
            cur = tmp #cur移动
        return dim1.next,pre    #翻转后end 和 start
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

