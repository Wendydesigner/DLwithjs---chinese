(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{215:function(t,e,l){"use strict";l.r(e);var s=l(17),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"_5-3-总结"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-总结"}},[t._v("#")]),t._v(" 5.3 总结")]),t._v(" "),l("ul",[l("li",[t._v("迁移学习是将一个预先训练好的模型或其中的一部分重新用于与模型最初训练的任务相关但不同的学习任务的过程。这种重用加速了新的学习任务。")]),t._v(" "),l("li",[t._v("在迁移学习的实际应用中，人们经常重用在非常大的分类数据集上训练过的深度神经网络，例如在 ImageNet 数据集上训练过的 MobileNet。由于原始数据集的规模及其包含的示例的多样性，这种预训练模型带来了卷积层，这是一种强大的通用特征提取器，可用于各种计算视觉问题。")]),t._v(" "),l("li",[t._v("我们讨论了 TensorFlow.js 中迁移学习的几种通用方法，它们的区别在于：1）是否创建了新的层作为迁移学习的新头）。2）迁移学习是使用一个模型实例还是使用两个模型实例。每种方法各有利弊，适合不同的示例（见表 5.1）。")]),t._v(" "),l("li",[t._v("通过设置模型层的可训练属性，我们可以防止在训练期间更新它们的权重（Model.fit()调用）。这称为冻结，用于在迁移学习期间保护基本模型的特征提取层。")]),t._v(" "),l("li",[t._v("在一些迁移学习问题中，我们可以通过在初始阶段的训练后解冻一些基本模型层来提高新模型的性能。这反映了未冻结层对新数据集中的独特特征的适应。")]),t._v(" "),l("li",[t._v("迁移学习是一种灵活多变的学习方法。基本模型可以帮助解决不同于最初训练的问题。我们通过展示如何训练基于 MobileNet.的目标检测模型来说明这一点。")]),t._v(" "),l("li",[t._v("TensorFlow.js 中的损失函数可以定义为对张量输入和输出进行自定义操作的 JavaScript 函数。如我们在简单的目标检测示例中所示，通常需要自定义损失函数来解决实际的机器学习问题。")])])])}),[],!1,null,null,null);e.default=i.exports}}]);