---
layout:    post
title:    分享：深度学习框架的来龙去脉——史上最全面最新的深度学习框架对比分析
author:    leacoder
categories:    Share 
tags:
    Share
---

* content
{:toc}



**原文**:  [深度学习框架的来龙去脉——史上最全面最新的深度学习框架对比分析](https://zhuanlan.zhihu.com/p/59086302)
**原作者**： [神奇博士](https://www.zhihu.com/people/di-qi-73-47/activities)

这是一篇很长的文章，为了看完这篇文章，单单从头到尾鼠标的滑轮就要滚动了30多次 -_-!。但我还是认认真真从头到尾读了一遍。
为什么呢？也许是曾经与深度学习擦肩而过过。还记得2016年底，公司项目组PL组织内部的深度学习自学习，当时自己挺感兴趣，除了组织的学习外自己从网上找资料，实现了使用Python语言 基于TensorFlow处理图片风格转换（将A图片转换为B图片的风格），受限于电脑设备现在还对当时处理速度之慢记忆犹新，也许当时能继续研究下去就好了……，可是没有也许，不久PL调走了新的PL对着压根就不关注，慢慢地自己也就没有投入了，当时收集的资料笔记代码现在还躺在公司电脑中。
现在我依旧对深度学习感兴趣，所以分享了这篇文章给同样有这爱好的人，同时也是分享给自己。告诫自己有兴趣就要坚持，哪怕无人支持。

## 原文简述：
###  一、深度学习框架概述与深度学习技术的四大阵营
人工智能从学术理论研究到生产应用的产品化开发过程中通常会涉及到多个不同的步骤和工具，这使得人工智能开发依赖的环境安装、部署、测试以及不断迭代改进准确性和性能调优的工作变得非常繁琐耗时也非常复杂。为了简化、加速和优化这个过程，学界和业界都作了很多的努力，开发并完善了多个基础的平台和通用工具，也被称会机器学习框架或深度学习框架。有了这些基础的平台和工具，我们就可以避免重复发明轮子，而专注于技术研究和产品创新。这些框架有早期从学术界走出的Caffe、 Torch和Theano，到现在产业界由Google领导的TensorFlow，Amazon选择押注的MXNet，Facebook倾力打造的PyTorch，Microsoft内部开源的CNTK等等。

当前主流的深度学习框架列表：
1. TensorFlow
2. Keras
3. PyTorch
4. MXNet
5. Caffe
6. Caffe2
7. Theano
8. FastAI
9. CNTK
10. Gluon
11. Torch
12. Deeplearning4j
13. Chainer

看起来我们好像有很多很多选择，但其实如果我们进一步进行细分，就会发现我们的选择也并不是很多，没有巨头背书的框架就只能面临被淘汰和边缘化的命运了，其实顶级深度学习框架只有四大阵营，或者说是四大门派，Google领导的TensorFlow，Amazon选择的MXnet，Facebook倾力打造的PyTorch，Microsoft把内部核心技术开源的CNTK。虽然Keras等框架在深度学习框架中排名很高，但它却不是一个独立框架，而是作为前端对底层引擎进行上层封装的高级API层，提升易用性，此类深度学习框架的目标是只需几行代码就能让你构建一个神经网络，这类框架还有FastAI和Gluon。好在每一个前端上层轻量级框架又都对应一个最适合的基础底层框架，这样就出现了深度学习框架的四大技术方向，每一个技术方向背后又都有一个巨头在背书和推动。

深度学习框架的四大阵营与其技术方向分别为：
（1）TensorFlow，前端框架Keras，背后巨头Google；
（2）PyTorch，前端框架FastAI，背后巨头Facebook；
（3）MXNet，前端框架Gluon，背后巨头Amazon；
（4）Cognitive Toolkit (CNTK)，前端框架Keras或Gluon，背后巨头Microsoft。

### 二、主流开源深度学习框架的来龙去脉

原作者依次就少了以下主流开源深度学习框架的来龙去脉：
TensorFlow、Keras、PyTorch、Theano、Caffe、Caffe2、Torch、FastAI、MXNet、Gluon、CNTK、DL4J、Chainer 、ONNX  点击[这里读原文](https://zhuanlan.zhihu.com/p/59086302)
### 三、诞生于中国本土的深度学习框架
1. 华为MindSpore
2. 百度PaddlePaddle
3. 阿里巴巴XDL (X-Deep Learning)
4. 小米MACE
### 四、如何做深度学习框架的选型

进入深度学习领域，基础是学习Python。可以说现在进入深度学习领域是相对容易的，在5年前，研究深度学习需要用C++或Matlab来编写大量的低级算法，这需要研究生教育甚至是博士的教育。现在不一样了，你只需要学习Python，就很容易上手，虽然深度学习正在支持越来越多的编程语言，但Python最简单而且应用最广泛的一个，Python最厉害的地方在于其生态系统非常好，有社区的强大支持，比如要装Python，有方便的Anaconda；要用Python visualization，有Matplotlib可以用；要Numerical computation有NumPy和SciPy可以选择，要做图像处理，还有Scikit-image。有很多现成的工具可以使用，可以节省自己大量的时间，这正是工程师所需要的。

在对所有主流深度学习框架有一个了解后，我想是时候舍弃开发语言（基本都支持Python和C++，Java和Lua面向特定社区）、接口简易、文档完善、运算速度、性能、安装部署方便等方面的纯技术比较了，可能在这些框架诞生的初期我们更看重这些方面，但是随着各个框架的不断的完善与大企业的支持与不断的投入，各个框架之间也在不断的相互借鉴，最后的结果就是大家都差不多，各有千秋，我们现在要进入深一层维度的比拼，应该至少考虑下面几个维度：
1. 深度学习框架是否支持分布式计算，是不是分布式框架？
分布式：TensorFlow、MXNet、PyTorch、CNTK、Caffe2、DL4J
不支持分布式：Caffe、Theano、Torch

2. 深度学习框架是否支持移动端部署？
支持：PyTorch、MXNet、TensorFlow、Caffe2
不支持：CNTK

3. 编程接口的设计是命令式编程(imperative programming)还是声明式语言(declarative programing)？
命令式：简单易懂的编程接口PyTorch，NumPy和Torch、Theano
MXNet通过NDarray模块和Gluon高级接口提供了非常类似PyTorch的编程接口。
声明式：TensorFlow、Theano、Caffe

4. 深度学习框架是基于动态计算图还是静态计算图？
目前使用动态计算图的框架有PyTorch、MXNet、Chainer。
目前使用静态计算图框架有TensorFlow、Keras、CNTK、Caffe/Caffe2、Theano等，其中TensorFlow主要使用了静态计算图，TensorFlow在2018年10月宣布了一个动态计算选项Eager Execution，但该特性还比较新颖可能并不是很成熟，并且 TensorFlow 的文档和项目依然以静态计算图为主。MXNet同时具有动态计算图和静态计算图两种机制。

5. 深度学习框架是否有强大的社区和生态支持？
重金打造的TensorFlow，多方押注的MXNet，正在崛起的PyTorh，技术稳重的CNTK，
这四大开源深度学习框架都满足这一点。

6. 深度学习框架背后是否有巨头支持？
Google领导的TensorFlow，Amazon选择的MXNet，Facebook倾力打造的PyTorch，Microsoft把内部核心技术开源的CNTK，这四大开源深度学习框架都满足这一点。

通过对上面六个维度的思考，我想大家应该知道该如何作选择了：首先，静态计算图很好，但是动态图是未来和趋势，对于大多数开发者来说，Python是基础，Python的成熟可用的库、工具和生态与社区的支持太重要了；对于深度学习的商业应用而非纯粹的实验室研究来说，支持分布式和移动端运行平台是必选的，将来一定会用到的；前端的编程接口越灵活超好，我们需要考虑不同的应用场景，因此前端编程接口的设计需要兼容简单高效的命令式和逻辑清晰的声明式；深度学习框架一定要有背后巨头的大力支持和强大的社区，有专业的团队不断的更新并完善代码库。这样来看，只有下面的四大顶级深度学习框架阵营才能够满足我们的要求。
深度学习框架的四大阵营与其技术方向分别为：
（1）TensorFlow，前端框架Keras，背后巨头Google；
（2）PyTorch，前端框架FastAI，背后巨头Facebook；
（3）MXNet，前端框架Gluon，背后巨头Amazon；
（4）Cognitive Toolkit (CNTK)，前端框架Keras或Gluon，背后巨头Microsoft。

那么在这四大阵营中又如何选择呢？这就要看具体项目的需要了，看重Google无与伦比的巨大影响力的开发者并不需要太过纠结，TensorFlow会支持最广泛的开发语言与最多的运行平台，开发者很难逃出Google的覆盖范围，更多的开发者会被收编，AlphaGo已经帮助Google证明了Google在人工智能上技术领先地位，Keras+TensorFlow的方案已经被Google官方认可，Google的TensorFlow2.0将带来的新技术与突破；喜欢学习新事物和追求完美的开发者一定不能错过Facebook的PyTorch，PyTorch正在强势崛起，是动态图技术的最佳代表，是当前最活跃最有生命力的深度学习框架，这一次Google遇到了真正的对手；Amazon在云计算和云服务上的领先地位带给开发者更大的信心，选择Amazon人工智能背后的技术一定没有错；微软的技术正在不断挑战人类语音识别和图像识别的极限，长期受益于微软阵营的开发人员对于微软开源其核心技术是非常兴奋的，Cognitive Toolkit (CNTK)可以被Keras和Gluon同时支持，这太棒了，确实带给开发者更多的选择。

最后，我们会发现深度学习框架其实只是一个工具和平台，虽然分为四大阵营和四大技术路线，但是得益于这些主流框架之间的不停的比拼与互相借鉴，最后会发现其实大家都差不多，最棒的是这些主流的深度学习框架都是基于Python的，只要掌握了Python和深度学习算法的设计思想，每一种框架都是一个可用的库或工具集，我们是工程师，工程师需要善于学习并善于选择使用最优的工具。初学者可以从上层高级API框架开始学习，如Keras、Gluon和FastAI，但是不能依赖这些层层封装高级API，不然是无法真正掌握深度学习的技术本质的。深入学习并熟练掌握一种顶级深度学习框架是非常重要的，比如PyTorch，然后再跑一跑TensorFlow和MXNet，我们可以在对比中学习，在深度学习领域，可以深刻理解什么是“纸上得来终觉浅”，我觉得学习深度学习及人工智能技术，一定要动手实践，只有动手做过了才是自己的，不然，一切都还是书本上的。

----
>*GitHub链接：*
>*[https://github.com/lichangke/LeetCode](https://github.com/lichangke/LeetCode)*

>*知乎主页：*
>*[https://www.zhihu.com/people/lichangke/](https://www.zhihu.com/people/lichangke/)*

>*简书主页*
>*[https://www.jianshu.com/u/3e95c7555dc7](https://www.jianshu.com/u/3e95c7555dc7)*

>*欢迎大家来一起交流学习*
