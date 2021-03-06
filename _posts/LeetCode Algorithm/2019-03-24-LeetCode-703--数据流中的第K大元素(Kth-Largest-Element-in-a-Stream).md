---
layout: post
title:  LeetCode-703--数据流中的第K大元素(Kth-Largest-Element-in-a-Stream)
author: leacoder
categories: Algorithm 
tags: Algorithm Leetcode
---

* content
{:toc}

![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-6031341eb4151a2e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


[数据流中的第K大元素](https://leetcode-cn.com/problems/kth-largest-element-in-a-stream)

    设计一个找到数据流中第K大元素的类（class）。注意是排序后的第K大元素，不是第K个不同的元素。

    你的 KthLargest 类需要一个同时接收整数 k 和整数数组nums 的构造器，它包含数据流中的初始元素。每次调用 KthLargest.add，返回当前数据流中第K大的元素。

    示例:

    int k = 3;
    int[] arr = [4,5,8,2];
    KthLargest kthLargest = new KthLargest(3, arr);
    kthLargest.add(3);   // returns 4
    kthLargest.add(5);   // returns 5
    kthLargest.add(10);  // returns 5
    kthLargest.add(9);   // returns 8
    kthLargest.add(4);   // returns 8
    说明: 
    你可以假设 nums 的长度≥ k-1 且k ≥ 1。

## Java 实现
### 优先队列
```java
/*
 *@author:leacoder
 *@des:  优先队列 数据流中的第K大元素
 */

class KthLargest {
    final PriorityQueue<Integer> myqueue;
    final int kMax;

    public KthLargest(int k, int[] nums) {
        myqueue = new PriorityQueue<>(k);  //指定初始容量k的优先队列
        kMax = k;
        for(int n:nums){
            add(n); //将数据加入到 优先队列中
        }
    }
    
    public int add(int val) {
        if(myqueue.size()<kMax){
            myqueue.offer(val); //队列还未填满 直接入队
        }
        else if(myqueue.peek()<val){//队列顶 小于加入的val 说明第k大变为val，原来的变为k+1大
            myqueue.poll();
            myqueue.offer(val);  //移除顶端 数据 加入新数据
        }
        
        return myqueue.peek(); 
            
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest obj = new KthLargest(k, nums);
 * int param_1 = obj.add(val);
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

