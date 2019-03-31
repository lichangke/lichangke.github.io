---
layout:    post
title:    每个开发人员都应该知道面向对象设计的原则(SOLID Principles every Developer Should Know)
author:    leacoder
categories:    Review 
tags: Review 
---


* content
{:toc}


![左耳听风 第二周 Review.png](https://upload-images.jianshu.io/upload_images/16846478-ebc323d4ee1d317e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


**原文：**[SOLID Principles every Developer Should Know](https://blog.bitsrc.io/solid-principles-every-developer-should-know-b3bfa96bb688)
**原作者：**[Chidume Nnamdi ](https://blog.bitsrc.io/@kurtwanger40)

第一次看到SOLID 原则，是在[http://www.runoob.com/](http://www.runoob.com/)学习设计模式时
想了解设计模式（Design pattern）点击链接 [设计模式](http://www.runoob.com/design-pattern/design-pattern-tutorial.html)


每个开发人员都应知道的 SOLID 原则。作者通过简单代码示例，介绍了SLOID原则。
面向对象的编程并不能防止难以理解或不可维护的程序。因此，Robert C. Martin 制定了五项指导原则，使开发人员很容易创建出可读性强且可维护的程序。
这五个原则被称为S.O.L.I.D原则(首字母缩写是迈克尔·费瑟[Michael Feathers]提出的)。
- S: 单一职责原则  Single Responsibility Principle
    *一个类应该只负责一件事*
- O: 开闭原则原则  Open-Closed Principle
    *软件实体（类，模块，函数）应该是可以扩展的，而不是修改。*
- L: 里氏替换原则  Liskov Substitution Principle
    *任何基类可以出现的地方，子类一定可以出现*
- I: 接口隔离原则  Interface Segregation Principle
    *创建特定于客户端的细粒度接口*
    *不强制客户端依赖他们不使用的接口。*
- D: 依赖倒置原则  Dependency Inversion Principle
    *依赖关系应该是抽象的，而不是具体的。*
    *A. 高级模块不应该依赖于低级模块。两者都应该依赖于抽象。*
    *B. 抽象不应该依赖于细节。细节应该依赖于抽象。*

### S: 单一职责原则  Single Responsibility Principle
一个类应该只负责一件事。如果一个类有多个职责，它就会耦合。对一个职责的更改会导致对另一个职责的更改。
```
class Animal {
    constructor(name: string){ }
    getAnimalName() { }
    saveAnimal(a: Animal) { }
}
```
Animal类违反了单一职责原则（SRP）。
SRP声明类应该只有一个职责，在这个类里，我们可以看到有两个职责：Animal数据管理和动物属性管理。这个类的构造函数和getAnimalName方法管理Animal的属性，而saveAnimal方法管理Animal的数据存储。
这个设计在以后会引起什么样的问题?
如果应用的更改影响到了数据库的操作，那么使用Animal属性的类必须做相应的修改。
这个系统缺乏弹性，就像多米诺骨牌效应，触摸一张牌就会影响到其他所有的牌。
为了符合SRP，我们创建了另一个类，它的职责是存储animal到数据库:
```
class Animal {  
    constructor(name: string){ }  
    getAnimalName() { }  
}

class AnimalDB {  
    getAnimal(a: Animal) { }  
    saveAnimal(a: Animal) { }  
}
```
>当我们在设计类时，应该把特性相关的放在一起。同时，我们应该把特性不同的分开。-史蒂夫芬頓
### O: 开闭原则原则  Open-Closed Principle
软件实体（类，模块，函数）应该是可以扩展的，而不是修改。

```
class Animal {  
    constructor(name: string){ }  
    getAnimalName() { }  
}
//我们想要遍历动物列表并设置它们的声音。
const animals: Array<Animal> = [  
    new Animal('lion'),  
    new Animal('mouse')  
];

function AnimalSound(a: Array<Animal>) {  
    for(int i = 0; i <= a.length; i++) {  
        if(a[i].name == 'lion')  
            log('roar');  
        if(a[i].name == 'mouse')  
            log('squeak');  
    }  
}  
AnimalSound(animals);
```

AnimalSound方法不符合开闭原则，因为有新动物出现时，需要修改AnimalSound方法

我们如何使它(AnimalSound方法)遵循OCP?

```
class Animal {  
        makeSound();  
        ...  
}

class Lion extends Animal {  
    makeSound() {  
        return 'roar';  
    }  
}

class Squirrel extends Animal {  
    makeSound() {  
        return 'squeak';  
    }  
}  
class Snake extends Animal {  
    makeSound() {  
        return 'hiss';  
    }  
}

...  
function AnimalSound(a: Array<Animal>) {  
    for(int i = 0; i <= a.length; i++) {  
        log(a[i].makeSound());  
    }  
}  
AnimalSound(animals);
```

### L: 里氏替换原则  Liskov Substitution Principle
任何基类可以出现的地方，子类一定可以出现

```
function AnimalLegCount(a: Array<Animal>) {
    for(int i = 0; i <= a.length; i++) {
        if(typeof a[i] == Lion)
            log(LionLegCount(a[i]));
        if(typeof a[i] == Mouse)
            log(MouseLegCount(a[i]));
        if(typeof a[i] == Snake)
            log(SnakeLegCount(a[i]));
    }
}
AnimalLegCount(animals);
```

这违反了LSP原则(以及OCP原则)。它必须知道每种Animal类型，并调用相应的leg-counting方法。

现在，我们可以重新实现下AnimalLegCount方法

```
function AnimalLegCount(a: Array<Animal>) {  
    for(let i = 0; i <= a.length; i++) {  
        a[i].LegCount();  
    }  
}  
AnimalLegCount(animals);
/*
AnimalLegCount方法不用关心参数Animal的类型，它只是去调用LegCount方法。它只要求参数必须为Animal类型，要么是Animal类，要么是它的子类。
*/
//现在，Animal类必须实现或者定义一个LegCount方法：
class Animal {  
    ...  
    LegCount();  
}
//而它的子类必须实现LegCount方法：
//...
class Lion extends Animal{
    //...
    LegCount() {
        //...
    }
}
//...
```

当在AnimalLegCount方法中调用时，会返回lion的腿数。
AnimalLegCount方法在不需要知道Animal类型的情况下，只调用每个Animal的LegCount方法，来获得Animal的腿数，因为根据约定，Animal的子类实现了LegCount方法。

### I: 接口隔离原则  Interface Segregation Principle

```
interface IShape {  
    drawCircle();  
    drawSquare();  
    drawRectangle();  
}
//这个接口绘制正方形、圆形和矩形。实现IShape接口的类必须定义drawCircle, drawSquare, drawRectangle方法。
class Circle implements IShape {
    drawCircle(){
        //...
    }
    drawSquare(){
        //...
    }
    drawRectangle(){
        //...
    }    
}
class Square implements IShape {
    drawCircle(){
        //...
    }
    drawSquare(){
        //...
    }
    drawRectangle(){
        //...
    }    
}
class Rectangle implements IShape {
    drawCircle(){
        //...
    }
    drawSquare(){
        //...
    }
    drawRectangle(){
        //...
    }    
}

```

Rectangle类实现了它不使用的方法(drawCircle和drawSquare) ，同样，Square类实现了drawCircle和drawRectangle方法，Square类实现了drawSquare和drawSquare方法。
如果我们需要在IShape接口中添加另外一个方法drawTriangle，

```
interface IShape {  
    drawCircle();  
    drawSquare();  
    drawRectangle();  
    drawTriangle();  
}
```

类必须实现新的方法，否则会抛出错误。

为了让我们的IShape接口遵循ISP原则，我们将不同的操作隔离到不同的接口上：

```
interface IShape {  
    draw();  
}

interface ICircle {  
    drawCircle();  
}

interface ISquare {  
    drawSquare();  
}

interface IRectangle {  
    drawRectangle();  
}

interface ITriangle {  
    drawTriangle();  
}

class Circle implements ICircle {  
    drawCircle() {  
        ...  
    }  
}

class Square implements ISquare {  
    drawSquare() {  
        ...  
    }  
}

class Rectangle implements IRectangle {  
    drawRectangle() {  
        ...  
    }      
}

class Triangle implements ITriangle {  
    drawTriangle() {  
        ...  
    }  
}  
class CustomShape implements IShape {  
   draw(){  
      ...  
   }  
}
```

ICircle接口只绘制圆，IShape接口绘制任意形状，ISquare接口只绘制正方形，IRectangle接口只绘制矩形。
或者
类（Circle、Rectangle、Square、Triangle等）只继承IShape接口，并且实现它们自己的绘画行为。

```
class Circle implements IShape {
    draw(){
        //...
    }
}

class Triangle implements IShape {
    draw(){
        //...
    }
}

class Square implements IShape {
    draw(){
        //...
    }
}

class Rectangle implements IShape {
    draw(){
        //...
    }
}      
```

### D: 依赖倒置原则  Dependency Inversion Principle

```
class XMLHttpService extends XMLHttpRequestService {}

class Http {  
    constructor(private xmlhttpService: XMLHttpService) { }  
    get(url: string , options: any) {  
        this.xmlhttpService.request(url,'GET');  
    }

    post() {  
        this.xmlhttpService.request(url,'POST');  
    }  
    //...  
}
```

Http是高级组件，而HttpService是低级组件。这种设计违反了DIP A：高级模块不应该依赖于低级模块。它应该依赖它的抽象。
这个Http类被强制依赖XMLHttpService类。如果我们要更改Http连接服务，可能需要通过Nodejs连接到互联网，或者模拟http服务。我们将必须修改每个Http实例，这违背了OCP原则。

```
/*
Http类应该更少的去关心你用的Http服务类型。
让我们来实现一个Connection接口：
*/
interface Connection {  
    request(url: string, opts:any);  
}
//Connection这个接口有一个request方法。有了这个接口，我们可以给我们的Http类传入一个Connection类型的参数：
class Http {  
    constructor(private httpConnection: Connection) { }

    get(url: string , options: any) {  
        this.httpConnection.request(url,'GET');  
    }

    post() {  
        this.httpConnection.request(url,'POST');  
    }  
    //...  
}
//现在，不管给Http类传入什么类型的Http服务连接参数，在不用关心网络连接类型的情况下，连接到网络也是很容易的。
//我们可以重新实现下我们的XMLHttpService类，来实现Connection接口：
class XMLHttpService implements Connection {  
    const xhr = new XMLHttpRequest();  
   // ...  
    request(url: string, opts:any) {  
        xhr.open();  
        xhr.send();  
    }  
}
//我们可以创建许多Http Connection类型，并将其传递给我们的Http类，而无需担心错误。
class NodeHttpService implements Connection {  
    request(url: string, opts:any) {  
        ...  
    }  
}

class MockHttpService implements Connection {  
    request(url: string, opts:any) {  
        ...  
    }      
}

```

现在，我们可以看到高级模块和低级模块都依赖于抽象。Http类（高级模块）依赖于Connection接口（抽象），而Http服务类型（低级模块）也依赖Connection接口（抽象）。


----
>*GitHub链接：*
>*[https://github.com/lichangke/LeetCode](https://github.com/lichangke/LeetCode)*

>*知乎主页：*
>*[https://www.zhihu.com/people/lichangke/](https://www.zhihu.com/people/lichangke/)*

>*简书主页*
>*[https://www.jianshu.com/u/3e95c7555dc7](https://www.jianshu.com/u/3e95c7555dc7)*

>*欢迎大家来一起交流学习*