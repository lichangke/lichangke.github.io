---
layout:    post
title:    LeetCode 232. 用栈实现队列(Implement Queue using Stacks)
author:    leacoder
categories:    Algorithm 
tags:
    Algorithm LeetCode
---

* content
{:toc}


![LeetCode.jpg](https://upload-images.jianshu.io/upload_images/16846478-86ba6be3f8a7c9df.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 用栈实现队列

[用栈实现队列(Implement Queue using Stacks)](https://leetcode-cn.com/problems/implement-queue-using-stacks/)

使用栈实现队列的下列操作：

push(x) -- 将一个元素放入队列的尾部。
pop() -- 从队列首部移除元素。
peek() -- 返回队列首部的元素。
empty() -- 返回队列是否为空。
示例:

MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);  
queue.peek();  // 返回 1
queue.pop();   // 返回 1
queue.empty(); // 返回 false
说明:

你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。

## Python3 实现

### 1、出入双栈 Py3

[用栈实现队列(Implement Queue using Stacks) Py3 出入双栈实现](https://github.com/lichangke/LeetCode/blob/master/232.%20Implement%20Queue%20using%20Stacks/ImplementQueueusingStacks.py)
```
#@author:leacoder
#@des: 用栈实现队列
class MyQueue:

    def __init__(self):
        self.inputstack = []
        self.outputstack = []
        

    def push(self, x: int) -> None:
        self.inputstack.append(x)
        

    def pop(self) -> int:
        if 0!=len(self.outputstack):
            return self.outputstack.pop()
        else:
            while 0!=len(self.inputstack):     
                self.outputstack.append(self.inputstack.pop())      
            return self.outputstack.pop()        

    def peek(self) -> int:
        if 0!=len(self.outputstack):
            return self.outputstack[-1]
        else:
            while 0!=len(self.inputstack):
                self.outputstack.append(self.inputstack.pop())
            return self.outputstack[-1]

    def empty(self) -> bool:
        return 0==len(self.inputstack) and 0==len(self.outputstack)
        

# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()
```
1.push(x) -- 将x放入 入栈（inputstack ）
2.pop() --  判断 出栈（outputstack）是否为空，不为空从出栈（outputstack）直接取元素；为空则先将入栈（inputstack）所有元素依次取出放入出栈（outputstack）中，再从出栈（outputstack）取元素
3.peek() -- 同pop()
4.empty() -- 判断出入栈是否都为空（inputstack 、outputstack）

## Java 实现

### 1、出入双栈 Java

实现逻辑不变
[用栈实现队列(Implement Queue using Stacks) Java  出入双栈实现](https://github.com/lichangke/LeetCode/blob/master/232.%20Implement%20Queue%20using%20Stacks/ImplementQueueusingStacks.java)

## C++实现

### 1、出入双栈 C++

[用栈实现队列(Implement Queue using Stacks) C++  出入双栈实现](https://github.com/lichangke/LeetCode/blob/master/232.%20Implement%20Queue%20using%20Stacks/ImplementQueueusingStacks.cpp)

----
>*GitHub链接：*
>*[https://github.com/lichangke/LeetCode](https://github.com/lichangke/LeetCode)*

>*知乎主页：*
>*[https://www.zhihu.com/people/lichangke/](https://www.zhihu.com/people/lichangke/)*

>*简书主页*
>*[https://www.jianshu.com/u/3e95c7555dc7](https://www.jianshu.com/u/3e95c7555dc7)*

>*欢迎大家来一起交流学习*