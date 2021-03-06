# 4.5 摘要

- 卷积神经网络（convnet）从输入图像中提取 2D 空间特征，并具有堆叠的 conv2d 和 maxPooling2d 层的层次结构。
- conv2d 层是多通道可调空间滤波器。它们具有局部性和参数共享的特性，这使其成为功能强大的特征提取器和有效的表示形式转换。
- maxPooling2d 层通过在固定大小的窗口内计算最大值来减小输入图像张量的大小，从而实现更好的位置不变性。
- 卷积网络的 conv2d-maxPooling2d“塔”通常以平坦层结束，其后是由致密层组成的多层感知器（MLP），用于分类或回归任务。
- 由于资源有限，该浏览器仅适用于训练小型模型。要训练更大的模型，建议使用 tfjs-node，即 TensorFlow.js 的 Node.js 版本。tfjs-node 可以使用与 TensorFlow 的 Python 版本所使用的相同的 CPU 和 GPU 并行化内核。
- 更大的模型容量会带来更大的过度拟合风险。可以通过在 convnet 中添加丢弃层来改善过度拟合的情况。丢弃层在训练过程中将输入元素的给定部分随机归零。
- 卷积不仅对计算机视觉任务有用。当音频信号表示为频谱图时，可以在其上应用卷积以实现良好的分类精度。
