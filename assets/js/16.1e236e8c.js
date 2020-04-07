(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{240:function(t,e,a){"use strict";a.r(e);var i=a(0),n=Object(i.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h3",{attrs:{id:"尝试用例子来解释"}},[t._v("尝试用例子来解释")]),t._v(" "),a("p",[t._v("假设你有三个子组件，每个子组件里面有一个「有状态的」孙子组件。\n"),a("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-7352dada85c0e791262828ca3375bcc7_720w.jpg",alt:"avatar"}}),t._v("\n现在用户点击删除按钮，把第二个子组件删掉了，请问结果是怎样的？\n你可能会说，那还用问？当然是 2 消失了。因为 data 里的数组从 [1,2,3] 变成了 [1,3]。\n实际上你没有考虑全面：注意看图中的绿色正方形没有被删除。\n"),a("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-e62b3d17489d5b7e87df0389d87acc40_720w.jpg",alt:"avatar"}}),t._v("\n不信的话点击\n"),a("strong",[a("a",{attrs:{href:"https://codesandbox.io/s/vue-template-z5xud?fontsize=14",target:"_blank",rel:"noopener noreferrer"}},[t._v("codeBox"),a("OutboundLink")],1)]),t._v("\n首先，在三个 input 里依次输入三角形、正方形和圆形。")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("h4",{attrs:{id:"原因"}},[t._v("原因")]),t._v(" "),a("p",[t._v("原因很简单，你认为你删除了2，但Vue会认为你做了两件事：")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("h4",{attrs:{id:"破解方法"}},[t._v("破解方法")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("你可能会问，凭什么加 key 就 ok 了！点击代码试试吧。\n"),a("strong",[a("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//codesandbox.io/s/vue-template-xmt14%3Ffontsize%3D14",target:"_blank",rel:"noopener noreferrer"}},[t._v("codeBox"),a("OutboundLink")],1)]),t._v("\n同样的操作再来一遍:首先，在三个 input 内输入三角形、正方形、圆形：")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("原本的数组是 [{ id: 1, value: 1 }, { id: 2, value: 2 }, { id: 3, value: 3 }]")]),t._v(" "),a("p",[t._v("点击删除之后的数组是 [{ id: 1, value: 1 }, { id: 3, value: 3 }]")]),t._v(" "),a("p",[t._v("然后对比一下：（注意我没有说这里是 diff 算法，我也不打算在这里讲 diff 算法）")]),t._v(" "),t._m(7),t._v(" "),a("h3",{attrs:{id:"为什么不能用-index-作为-key"}},[t._v("为什么不能用 index 作为 key")]),t._v(" "),a("p",[t._v("如果你用 index 作为 key，那么在删除第二项的时候，index 就会从 1 2 3 变成 1 2（而不是 1 3），那么 Vue 依然会认为你删除的是第三项。也就是会遇到上面一样的 bug。")]),t._v(" "),a("p",[t._v("所以，永远不要用 index 作为 key。永远不要！除非你是大神。能清楚地知道如何解决 index 做 key 带来的 bug。")]),t._v(" "),a("p",[t._v("有人说简单的场景可以用 key。问题在于，你如何确保需求会一直保持简单？只要出现了删除一项或新增一项的需求，而且这一项里面含有子组件，上面说的 bug 就有可能出现。")]),t._v(" "),a("p",[t._v("前端的需求变更让你永远无法保证简单。相信我~")]),t._v(" "),a("p",[t._v("完。")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-fad8bcaa35c550be3b91ff4382e8a349_720w.jpg",alt:"avatar"}}),this._v("\n然后，点击中间的 delete 按钮，你会看到结果变成了：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-9d5426c54f8b91b8872138df9425c627_720w.jpg",alt:"avatar"}}),this._v("\n令人疑惑的在于原来的第三项「圆形」消失了！「正方形」却被保留下来了！")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("p",[t._v("把2变成了3")])]),t._v(" "),a("li",[a("p",[t._v("然后把3删除了\nVue 为什么要舍近求远呢？\n看看这两个数组：[1,2,3] 和 [1,3]，人类会说，这不就是少了个 2 吗？\n但是计算机会怎么对比数组？遍历！\n首先对比 1 和 1，发现「1 没变」；然后对比 2 和 3，发现「2 变成了 3」；最后对比 undefined 和 3，发现「3 被删除了」。\n所以计算机的结论是：「2 变成了 3」以及「3 被删除了」，有毛病吗？没毛病。")])]),t._v(" "),a("li",[a("p",[t._v("既然「1 没变」，那么就地复用之前的 1 和三角形就好了。")])]),t._v(" "),a("li",[a("p",[t._v("既然「2 变成了 3」，那么正方形左边的 2，当然要改成 3。里面的正方形，就地复用（正方形没有被删除），。因为正方形三个字是孙子元素的 data，不受「2 变成 3」的影响，所以可以就地复用。")])]),t._v(" "),a("li",[a("p",[t._v("既然「3 被删除了」，之前的「圆形」当然应该被删掉，里面的子元素也要删除。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("所以现在看这个结果，是不是很合理：\n"),e("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-02bd0e8075bb929f65ccbf610f402da9_720w.jpg",alt:"avatar"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("怎么解决这个问题呢？怎么让 Vue 知道我删除的是第二个，不是第三个？\n用 id 作为 key 就行了。不信你再看：\n"),e("img",{attrs:{src:"https://pic3.zhimg.com/80/v2-5115a6a50acc421f50b255f0108e241a_720w.jpg",alt:"avatar"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("现在删除第二个：\n"),e("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-6f6d53572bf07e71b6ac83fd8049175a_720w.jpg",alt:"avatar"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-1d5ba330307a552e14b20beb332249d6_720w.jpg",alt:"avatar"}}),this._v("\n然后删除中间的正方形："),e("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-e88cb3e52a5611a51721b45de9d60383_720w.jpg",alt:"avatar"}}),this._v("\n我们以计算机的角度来思考一下：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("首先发现 id 从 1 2 3 变成了 1 3，说明第二项被删除了")]),this._v(" "),e("li",[this._v("然后依次对此 id: 1 的项和 id: 3 的项，发现没变化。\n所以计算机得出结论：第二项被删除了。符合人类预期！")])])}],!1,null,null,null);n.options.__file="exampleForKey.md";e.default=n.exports}}]);