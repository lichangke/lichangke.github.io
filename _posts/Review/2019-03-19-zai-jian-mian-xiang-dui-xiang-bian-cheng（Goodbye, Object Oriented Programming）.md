---
layout:    post
title:    再见，面向对象编程！（Goodbye, Object Oriented Programming）
author:    leacoder
categories:    Review 
tags:
    Review Medium
---

* content
{:toc}



**原文：**[Goodbye, Object Oriented Programming](https://medium.com/@cscalfani/goodbye-object-oriented-programming-a59cda4c0e53)
**原作者：**[Charles Scalfani](https://medium.com/@cscalfani)

# 原文介绍
作为使用面向对象编程已有十几年的作者，曾经也非常热衷于继承、封装、多态的优点。它们是范式的三大支柱。但是随着对面向对象编程的深入理解，结合实际遇到的问题，带着挑剔的眼光，作者看到了面向对象编程的一些问题。
## *继承，堕落的第一支柱
### **香蕉 猴 丛林问题
你想要一个香蕉，但是你得到的却是一只拿着香蕉的大猩猩和整个丛林。

由于继承原因，当你想要复用其他项目某一个已经存在的类时，你不得不需要这个类的父类，然后可能它父类的父类……最后会发现我需要它的祖宗十八代=。=。你以为解决了这个就可以了吗？少年你还是太天真了，你会发现，它编译不过，为什么？ 这个对象包含了这个其他对象。 所以你也需要它，这没问题，但问题是你不只是需要那个对象，你需要对象的父对象及其父对象的父对象，依此类推，每个包含的对象以及包含父对象，父对象，父对象的所有父对象......

### **香蕉猴丛林解决方案
我们可以通过不创建太深的层次结构来解决这个问题。哦……似乎没什么不对，但如果继承是重用的关键，那么我对该机制的任何限制肯定会限制重用的好处。

### **钻石问题(菱形继承问题)

早晚你会遇到下面这种恶心的问题，有些语言甚至根本解决不了。

![image.png](https://upload-images.jianshu.io/upload_images/16846478-24b585e69034f014.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

大多数面向对象语言都不支持这种情况，尽管看上去似乎很符合逻辑。为什么面向对象语言支持这种情况如此困难？
```
Class PoweredDevice {
}
Class Scanner inherits from PoweredDevice {
  function start() {
  }
}
Class Printer inherits from PoweredDevice {
  function start() {
  }
}
Class Copier inherits from Scanner, Printer {
}
```
请注意，Scanner类和Printer类都实现了一个名为start的函数。那么Copier类继承了哪个启动函数？ 扫描仪在？ 打印机一个？ 它不可能两者兼而有之。

### **钻石(菱形继承问题)解决方案

解决方案很简单：不要这样做。没错。大多数面向对象都不让你这么干。但是，但是……要是必须这样建模该怎么办？我需要重用！那就必须使用包含和委托。
```
Class PoweredDevice {
}
Class Scanner inherits from PoweredDevice {
  function start() {
  }
}
Class Printer inherits from PoweredDevice {
  function start() {
  }
}
Class Copier {
  Scanner scanner
  Printer printer
  function start() {
    printer.start()
  }
}
```
这里注意Copier类现在包含了Printer类和Scanner类的实例。Copier委派Printer类的start方法去实现自己的start方法，它也可以简单的委派给Scanner类的start方法。
在C++我们可以采用虚继承，这个网上搜索下很多讲解。

## **脆弱的基类问题
我们尽量使用较浅的类层次结构，并保证里面没有环，这样就不会出现菱形继承了。
似乎一切都解决了。直到我们发现……
我前一天工作得好好的代码今天出错了！关键是，我没有改任何代码！
嗯也许是个 bug……但等等……的确有些改动……
但改动的不是我的代码。似乎改动来自我继承的那个类。
基类的改动怎么让我的代码挂了呢？
看看下面这个基类
```
import java.util.ArrayList;
 
public class Array
{
  private ArrayList<Object> a = new ArrayList<Object>();
 
  public void add(Object element)
  {
    a.add(element);
  }
 
  public void addAll(Object elements[])
  {
    for (int i = 0; i < elements.length; ++i)
      a.add(elements[i]); // this line is going to be changed
  }
}
```
注意被注释的那一行，那一行改动会让代码挂掉。
下面是派生类
```
public class ArrayCount extends Array
{
  private int count = 0;

  @Override
  public void add(Object element)
  {
    super.add(element);
    ++count;
  }

  @Override
  public void addAll(Object elements[])
  {
    super.addAll(elements);
    count += elements.length;
  }
}
```
Array的add()添加一个元素到本地的ArrayList
Array的addAll()调用本地的ArrayList的add()方法添加循环的每一个元素。
ArrayCount的add()方法调用了父类的add()然后count变量+1。
ArrayCount的addAll()方法调用父类的addAll()然后加上元素数组的长度。
基类中加注释的那行代码现在改成这样,问题就出现了：
```
 public void addAll(Object elements[])
  {
    for (int i = 0; i < elements.length; ++i)
      add(elements[i]); // this line was changed
  }
```
从基类的作者的角度来看，这个类实现的功能完全没有变化。而且所有自动化测试也都通过来了。但是基类的作者忘记了继承的类。而继承类的作者就被坑了T_T。

现在ArrayCount的addAll()调用父类的addAll()，后者在内部调用add()，而add()被继承类重载了。
因此，每次继承类的add()被调用时，count都会增加，然后在继承类的addAll()被调用时再次增加。
count被增加了两次。

### **脆弱的基类的解决方法
这个问题还得要包含和委托来解决。使用包含和委托，可以从白盒编程转到黑盒编程。白盒编程的意思是说，写继承类时必须要了解基类的实现。而黑盒编程可以完全无视基类的实现，因为不可能通过重载函数的方式向基类注入代码。只需要关注接口即可。

## *封装，倒塌的第二根支柱
封装似乎是面向对象编程的第二大好处。对象状态变量被保护起来防止外部访问，即它们被封装在对象内部。我们不需要再操心那些可能被不知道谁访问的全局变量。但是：

### **引用问题

为了提高效率，对象传递给函数时传递的是引用，而不是值。也就是说，函数不会传递对象本身，而是传递指向对象的一个引用或指针。
如果一个对象的引用被传递给另一个对象的构造函数，构造函数就能将这个对象引用放到私有变量中，用封装保护起来。
但这个传递的对象不是安全的！因为其他代码也可能拥有指向该对象的指针，比如调用构造函数的那段代码。它必须有指向对象的引用，否则没办法传递给构造函数。
### **引用的解决
构造函数必须要复制传递过来的对象。而且不能是浅复制，必须是深复制，即传入的对象内包含的所有对象和所有对象中包含的所有对象……都必须要复制。但这却没有效率。更糟糕的是，并非所有对象都能复制的。一些拥有操作系统资源的对象，最好的情况是复制无效，最糟糕的情况是根本不可能复制。
## *多态，倒塌的第三根支柱
并不是因为多态不好，而是因为实现多态并不需要面向对象语言。接口也能实现多态，而且不需要面向对象的负担。而且，接口也不会限制你能混入的不同行为的数目。可以告别面向对象的多态，使用基于接口的多态。

# 个人观点：
作者罗列了面向对象编程的多个问题：香蕉 猴 丛林问题、钻石问题(菱形继承问题)、脆弱的基类问题、引用问题。并且可以使用基于接口的多态而非面向对象的多态。这是作者几十年面向对象编程的经验之谈，但是 说 再见，面向对象编程 肯定是夸大了，不过其问题与不足我们也该谨慎处理避免掉坑里。也许随着历史的发展会出现更好的更NB的不同理念的编程语言，即使那时我相信面向对象编程也会有一席之地。

