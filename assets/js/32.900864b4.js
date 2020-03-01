(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{221:function(t,_,v){"use strict";v.r(_);var r=v(17),a=Object(r.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"_2-4-总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-总结"}},[t._v("#")]),t._v(" 2.4 总结")]),t._v(" "),v("ol",[v("li",[t._v("分类任务与回归任务的区别在于它们涉及离散预测。")]),t._v(" "),v("li",[t._v("有两种类型的分类：二分类和多分类。在二分类中，给定输入有两种可能的类别，而在多分类中则有三种或更多种。")]),t._v(" "),v("li",[t._v("二分类通常可以被视为在所有输入示例中检测某种类型的事件或称为正数的有意义的对象。当以这种方式查看时，除了精度之外，我们还可以使用诸如准确度，召回率和误报率之类的指标来量化二进制分类器行为的各个方面。")]),t._v(" "),v("li",[t._v("在二分类任务中，通常需要在捕获所有肯定示例与最小化错误率（错误警报）之间进行权衡。ROC 曲线以及曲线下的相关面积（AUC）度量标准是一种帮助我们量化和可视化此关系的技术。")]),t._v(" "),v("li",[t._v("为二分类而创建的神经网络应在其最后（输出）层中使用 sigmoid 激活，并在训练过程中使用二进制交叉熵作为损失函数。")]),t._v(" "),v("li",[t._v("为了创建用于多类别分类的神经网络，通常用 one-hot 编码来表示输出目标。该神经网络应在其输出层中使用 softmax 激活，并应使用分类交叉熵损失函数进行训练。")]),t._v(" "),v("li",[t._v("对于多类分类，混淆矩阵可以提供比精度所能提供的有关模型错误的更多细粒度信息。")]),t._v(" "),v("li",[t._v("下表 3.6 总结了迄今为止我们所见过的最常见类型的机器学习问题（回归，二进制分类和多分类）的推荐方法。")]),t._v(" "),v("li",[t._v("超参数是关于机器学习模型结构层的属性及其训练过程的配置。它们与模型的权重参数不同之处在于：1）在模型的训练过程中它们不发生变化； 2）它们通常是离散的。超参数优化是一个过程，在该过程中将查找超参数的值，以最大程度地减少验证数据集上的损失。超参数优化仍然是一个活跃的领域和研究领域。当前，最常用的方法包括网格搜索，随机搜索和贝叶斯方法。")])]),t._v(" "),v("h6",{attrs:{id:"表-3-6-概述了最常见的机器学习任务类型，其合适的最后层激活功能和损失函数以及有助于量化模型质量的指标。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#表-3-6-概述了最常见的机器学习任务类型，其合适的最后层激活功能和损失函数以及有助于量化模型质量的指标。"}},[t._v("#")]),t._v(" 表 3.6 概述了最常见的机器学习任务类型，其合适的最后层激活功能和损失函数以及有助于量化模型质量的指标。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("任务类型")]),t._v(" "),v("th",[t._v("激活输出层")]),t._v(" "),v("th",[t._v("损失函数")]),t._v(" "),v("th",[t._v("在 Model.fit（）调用期间支持合适的指标")]),t._v(" "),v("th",[t._v("其他指标")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("回归")]),t._v(" "),v("td",[t._v("'线性' （默认）")]),t._v(" "),v("td",[t._v("“ meanSquaredError” 或“ meanAbsoluteError”")]),t._v(" "),v("td",[t._v("（与损失相同）")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("二分类")]),t._v(" "),v("td",[t._v("sigmoid")]),t._v(" "),v("td",[t._v("“binaryCrossentropy”")]),t._v(" "),v("td",[t._v("' accuracy '")]),t._v(" "),v("td",[t._v("精度，召回率，精度/召回曲线，ROC 曲线，曲线下面积（AUC）")])]),t._v(" "),v("tr",[v("td",[t._v("单标签，多类别分类")]),t._v(" "),v("td",[t._v("'softmax'")]),t._v(" "),v("td",[t._v("“categoricalCrossentropy”")]),t._v(" "),v("td",[t._v("' accuracy '")]),t._v(" "),v("td",[t._v("混淆矩阵")])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);