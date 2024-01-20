# 深度学习和 Javascript

:::tip 内容包括：

- 什么是深度学习及其与人工智能（AI）和机器学习的关系，
- 是什么让深度学习在各种机器学习技术中脱颖而出，以及导致当前“深度学习革命”的因素，
- 使用 TensorFlow.js 在 JavaScript 中进行深度学习的原因
- 本书的整体内容
  :::

围绕人工智能（AI）的所有讨论都有一个很好的理由：有时人们称之为“深度学习革命”的事情确实发生了。
“深度学习革命”（deep-learning revolution）是指自 2012 年左右开始并仍在进行中的深度神经网络在速度和技术方面取得的迅速发展。
自那时起，神经网络应用的越来越广泛，机器能够在某些情况下解决以前无法解决的问题，并在其他情况下显著提高解决方案的准确性（示例见下表 1.1）。
对于人工智能领域的专家来说，神经网络的许多突破都是惊人的。
对于使用神经网络的工程师来说，这种进步所创造的机会是令人振奋的。

JavaScript 是一种传统上致力于创建 web 浏览器用户界面（UI）和后端业务逻辑（Node.js）的语言。作为一个在 JavaScript 中表达思想和创造力的人，你可能会被深度学习革命所忽略，这似乎是 Python、R 和 C++等语言的专属领域。本书旨在通过 JavaScript 深度学习库 Tensorflow.js 将深度学习和 JavaScript 集成在一起。我们这样做不仅是为了让像您这样的 JavaScript 开发人员能够在不学习新语言的情况下学习如何编写深度神经网络；更重要的是，我们相信深度学习和 JavaScript 是可以联系在一起的。领域的相互交叉将创造独特的机会，这些机会在任何其他编程语言中都不可用。这对于 JavaScript 和深入学习来说都有好处。有了 JavaScript，深度学习应用程序可以运行在更多的平台上，接触到更广泛的受众，变得更加可视化和交互式。而拥有了深度学习，Javascript 的开发者会使得 web 应用更加的智能。我们将在本章后面描述原因。

下表 1.1 列出了迄今为止我们在这场深度学习革命中看到的一些最令人兴奋的深度学习成果。在本书中，我们选择了一些应用程序，并创建了如何在 TensorFlow.js 中实现它们的示例，无论是在对他们整体还是在简化的形式中。在接下来的章节中会对这些示例进行深入讨论。因此，你将难以停下对这些突破的惊叹：你可以学习它们，理解它们，并用 JavaScript 实现它们。

但是在你深入研究这些令人兴奋的深度学习示例之前，我们需要介绍一下人工智能、深度学习和神经网络的基本背景。

###### 表 1 自 2012 年左右的“深度学习革命”开始以来，由于采用深度学习技术，一些任务的准确性显著提高。这份名单不全面。但毫无疑问，今后几个月和几年进展的步伐将继续下去。[0]

| 机器学习任务           | 具有代表性的深度学习技术带来的显著的改进                                                                                                                    | 本书介绍如何使用 TensorFlow.js 执行任务的章节                         |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 图像分类               | ResNet[1]和 Inception[2]等深度卷积神经网络（convnets）将 ImageNet 分类任务中的错误率从 2011 年的约 25%降低到 2017 年的 5%以下                            | 为 MNIST 训练 convnets（第四章）；Mobilenet 推理与迁移学习（第 5 章） |
| 物体和图像定位         | deep convnets 的变体[3]将定位误差从 2012 年的 0.33 降低到 2017 年的 0.06。                                                                                  | TensorFlow.js 中的 YOLO（第 5.2 节）                                  |
| 文本翻译               | 谷歌的神经机器翻译（GNMT）比最好的传统机器翻译技术减少了约 60%的翻译误差[4]                                                                                    | 基于 LSTM 的的序列化模型 (第 9 章)                                    |
| 识别大量词汇，连续语音 | 基于 LSTM 的编码-解码结构比最佳的非深度学习语音识别系统具有更低的误码率[5]。                                                                                | 基于 Attention 的 LSTM 小词汇连续语音识别（第 9 章）                  |
| 生成逼真的图像         | 生成性对抗网络（GANs）现在能够基于训练数据生成逼真的图像。                                                                                               | 使用变分自动编码器（VAEs）和 GANs 生成图像（第 9 章）                 |
| 生成音乐               | 递归神经网络（RNN）和 VAE 正在帮助创造音乐乐谱和新颖的乐器声音[6]。                                                                                         | 训练 LSTM 生成文本（第 9 章）                                         |
| 学习玩游戏             | 强化学习（reinforcement learning, RL for short）让机器学习使用原始像素作为唯一输入来玩简单的 Atari 游戏[7]。结合深度学习和 Monte Carlo tree，通过自我学习，AlphaZero 达到了超人类的水平[8]。 | 利用强化学习解决手推车杆控制问题与蛇视频游戏 (第 11 章)               |
| 利用医学图像诊断疾病   | 基于患者视网膜图像的糖尿病视网膜病变诊断方面，Deep convnets 能够获得与资深眼科医生相当的特异性和敏感性[9]。                                                | 使用预先训练的 MobileNet 图像模型进行转移学习（第 5 章）。            |


____

[0] 可以从图灵社区本书主页浏览并下载相关资源：http:ituring.cn/book/2813

[1] 参见何凯明等人在CVPR 2016（IEv模式识别会议）上发表的“Deep Residual Learning for Image Recognition”。

[2] 参见Christian Szegedy等人在CVPR 2015上发表的“Going Deeper with Convolutions”。

[3] 参见陈云鹏等人发表的“Dual Path Networks”

[4] 参见吴永辉等人发表的“Google's Neural Machine Translation System: Bridging the Gap between Human and Machine Translation”。

[5] 参见Chung-Cheng Chiu等人发表的“State-of-the-Art Speech Recognition with Sequence-to-Sequence Models”。

[6] 访问Magenta.js网站的Demos界面，浏览更多示例。

[7] 参见Volodymyr Mnih等人发表的“Playing Atari with Deep Reinforcement Learning”。

[8] 参见David Silver等人发表的“Mastering Chess and Shogi by Self-Play with a General Reinforcement Learning Algorithm”。

[9] 参见Varun Gulshan等人发表的“Development and Validation of a Deep Learning Algorithm for Detection of Diabetic Retinopathy in Retinal Fundus Photographs”。
