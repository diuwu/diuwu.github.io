(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{272:function(t,a,s){t.exports=s.p+"assets/img/image-20210711214113309.10117778.png"},273:function(t,a,s){t.exports=s.p+"assets/img/image-20210721101511706.b1a6b887.png"},274:function(t,a,s){t.exports=s.p+"assets/img/image-20210723112852676.651b0faf.png"},275:function(t,a,s){t.exports=s.p+"assets/img/image-20210726145446746.bd3deea2.png"},322:function(t,a,s){"use strict";s.r(a);var e=s(13),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"简单认识vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单认识vue"}},[t._v("#")]),t._v(" 简单认识Vue")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("读音")])]),t._v(" "),a("li",[a("p",[t._v("Vue 是渐进式框架")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("渐进式意味着你可以将Vue作为你应用的一部分嵌入其中，带来更丰富的交互体验。")])]),t._v(" "),a("li",[a("p",[t._v("或者如果你希望将更多的业务逻辑使用Vue实现，那么Vue的核心库及其生态系统，比如Core+Vue-router+Vuex,也可以满足你各种各样的需求。")])])])]),t._v(" "),a("li",[a("p",[t._v("Vue有很多特点和Web开发中常见的高级功能")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("解耦视图和数据")])]),t._v(" "),a("li",[a("p",[t._v("可复用的组件")])]),t._v(" "),a("li",[a("p",[t._v("前端路由技术")])]),t._v(" "),a("li",[a("p",[t._v("状态管理")])]),t._v(" "),a("li",[a("p",[t._v("虚拟DOM")])])])]),t._v(" "),a("li",[a("p",[t._v("做到数据和界面彻底分离")])])]),t._v(" "),a("h2",{attrs:{id:"vue中的mvvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue中的mvvm"}},[t._v("#")]),t._v(" Vue中的MVVM")]),t._v(" "),a("p",[a("img",{attrs:{src:s(272),alt:"image"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("View层：")]),t._v(" "),a("blockquote",[a("p",[t._v("视图层")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在我们前端开发中，通常就是DOM层。")])]),t._v(" "),a("li",[a("p",[t._v("主要的作用是给用户展示各种信息。")])])])]),t._v(" "),a("li",[a("p",[t._v("Model层：")]),t._v(" "),a("blockquote",[a("p",[t._v("数据层")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("数据可能是我们固定的死数据，更多的是来自我们服务器，从网络上请求下来的数据。")])]),t._v(" "),a("li",[a("p",[t._v("在我们计数器的案例中，就是后面抽取出来的obj，当然，里面的数据可能没有这么简单。")])])])]),t._v(" "),a("li",[a("p",[t._v("VueModel层：")]),t._v(" "),a("blockquote",[a("p",[t._v("视图模型层")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("视图模型层是View和Model沟通的桥梁。")])]),t._v(" "),a("li",[a("p",[t._v("一方面它实现了Data Binding，也就是数据绑定，将Model的改变实时地反应到View中。")])]),t._v(" "),a("li",[a("p",[t._v("另一方面它实现了DOM Listener，也就是DOM监听，当DOM发生一些事件（点击、滚动、touch等）时，可以监听到，并在需要的情况下改变对应的Data。")])])])])]),t._v(" "),a("h2",{attrs:{id:"vue的options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue的options"}},[t._v("#")]),t._v(" Vue的options")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("el")]),t._v(":")]),t._v(" "),a("p",[t._v("类型：string | HTMLElement")]),t._v(" "),a("p",[t._v("作用：决定之后Vue实例会管理哪一个DOM。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("data")]),t._v(":")]),t._v(" "),a("p",[t._v("类型：Object | Function（组件当中data必须是一个函数）")]),t._v(" "),a("p",[t._v("作用：Vue实例对应的数据对象。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("methods")]),t._v(":")]),t._v(" "),a("p",[t._v("类型：{[key:string]:Function}")]),t._v(" "),a("p",[t._v("作用：定义属于Vue的一些方法，可以在其他地方调用，也可以在指令中使用。")])])]),t._v(" "),a("h2",{attrs:{id:"vue的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue的生命周期"}},[t._v("#")]),t._v(" Vue的生命周期")]),t._v(" "),a("ul",[a("li",[t._v("生命周期：事物从诞生到消亡的整个过程。")]),t._v(" "),a("li",[t._v("Vue生命周期：自己找图了解。")])]),t._v(" "),a("h2",{attrs:{id:"vue插值操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue插值操作"}},[t._v("#")]),t._v(" Vue插值操作")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Mustache语法：")])]),t._v(" "),a("p",[t._v("通过双大括号 "+t._s()+" 将数据插入HTML 。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("v-once指令:")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("v-once后面不需要跟任何表达式。")])]),t._v(" "),a("li",[a("p",[t._v("该指令表示元素和组件只渲染一次，不会随着数据的改变而改变。")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("v-html指令:")])]),t._v(" "),a("ol",[a("li",[t._v("该指令后往往跟上一个string的类型。")]),t._v(" "),a("li",[t._v("会将string的html解析出来并进行渲染。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("v-text指令：")])]),t._v(" "),a("p",[t._v("类似mustache将数据显示在界面中，接受一个string类型，但是会覆盖标签的内容。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("v-pre指令：")])]),t._v(" "),a("p",[t._v("用于跳过这个元素和它子元素的编译过程，用于显示原本的Mustache语法。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("v-cloak指令：")])]),t._v(" "),a("p",[t._v("cloak:斗篷。****")]),t._v(" "),a("p",[t._v("某些情况下，浏览器可能会直接显示出未编译的Mustache标签，")]),t._v(" "),a("p",[t._v("Vue解析之后会把标签中的v-cloak属性删掉。")])])]),t._v(" "),a("h2",{attrs:{id:"v-bind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-bind"}},[t._v("#")]),t._v(" v-bind")]),t._v(" "),a("blockquote",[a("p",[t._v("作用：动态绑定")]),t._v(" "),a("p",[t._v("​            用于绑定一个或多个属性值，或者像另一个组件传递props值")]),t._v(" "),a("p",[t._v("缩写：：（一个冒号）")]),t._v(" "),a("p",[t._v("预期：any(with argument) | Object(without argument)")]),t._v(" "),a("p",[t._v("参数：attrOrProp(optional)")])]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("动态绑定class(对象语法)")])]),t._v(" "),a("p",[t._v("用法一，直接通过{}绑定一个类")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"{'active': isActive}\"")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("用法二，通过判断，传入多个值")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"{'active': isActive, 'line': isLine}\"")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("用法三，和普通的类同时存在，并不冲突")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"{'active': isActive, 'line': isLine}\"")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("用法四,如果过于复杂，可以放在一个methods或computed中")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{"')]),t._v("classes"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"}"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("动态绑定class(数组语法)")])]),t._v(" "),a("p",[t._v("和对象语法差不多，但是很不常用。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("动态绑定style(对象语法)")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{color: finalColor}"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("动态绑定style(数组语法)")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[baseStyle1,baseStyle2]"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("和对象语法差不多，但是很不常用。")])])]),t._v(" "),a("h2",{attrs:{id:"vue计算属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue计算属性"}},[t._v("#")]),t._v(" Vue计算属性")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("有时我们需要对数据进行一些转化后再显示，或者将多个数据结合起来进行显示。")])]),t._v(" "),a("li",[a("p",[t._v("计算属性写在computed选项中。")])]),t._v(" "),a("li",[a("p",[t._v("计算属性会进行缓存，如果多次使用，计算属性只会调用一次。")])]),t._v(" "),a("li",[a("p",[t._v("计算属性有set方法和get方法，但一般不使用set方法，为只读属性")])]),t._v(" "),a("li",[a("p",[t._v("计算属性和methods的区别：")]),t._v(" "),a("ol",[a("li",[t._v("计算属性会进行缓存，如果多次使用，计算属性只会调用一次。")]),t._v(" "),a("li",[t._v("methods每次使用调用一次函数，性能低")])])])]),t._v(" "),a("h2",{attrs:{id:"es6-块级作用域let和var和const"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6-块级作用域let和var和const"}},[t._v("#")]),t._v(" ES6 块级作用域let和var和const")]),t._v(" "),a("ul",[a("li",[t._v("看vscode的笔记")]),t._v(" "),a("li",[t._v("闭包：函数有自己的作用域，函数有自己的i就不用其他地方的i")])]),t._v(" "),a("h2",{attrs:{id:"es6-const的使用和注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6-const的使用和注意"}},[t._v("#")]),t._v(" ES6 const的使用和注意")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在很多语言中已经存在，比如C/C++，作用是将某个变量修饰为常量。")])]),t._v(" "),a("li",[a("p",[t._v("在javascript中也是如此，使用const修饰的标识符为常量，不可以再次赋值。")])]),t._v(" "),a("li",[a("p",[t._v("用const来保证数据的安全性。")])]),t._v(" "),a("li",[a("p",[t._v("在开发中优先使用const，只有需要改变标识符时才使用let。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//定义时必须初始化")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//错误，不能修改")]),t._v("\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zhou'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jiahui'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可以修改对象内部的属性")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("const声明是指向一个内存地址，不能修改指向，能修改地址里面的值。")])])]),t._v(" "),a("h2",{attrs:{id:"es6-字面量增强写法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6-字面量增强写法"}},[t._v("#")]),t._v(" ES6 字面量增强写法")]),t._v(" "),a("ul",[a("li",[t._v("属性增强写法")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ES5的写法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zhou'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" age\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ES6的写法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  age\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("函数增强写法")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ES5的写法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ES6的写法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"vue事件监听"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue事件监听"}},[t._v("#")]),t._v(" Vue事件监听")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("vue使用"),a("strong",[t._v("v-on")]),t._v("监听事件")])]),t._v(" "),a("li",[a("p",[t._v("缩写：@")])]),t._v(" "),a("li",[a("p",[t._v("预期：Function | Inline Statement | Object")])]),t._v(" "),a("li",[a("p",[t._v("参数：event")])])]),t._v(" "),a("h4",{attrs:{id:"v-on参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-on参数"}},[t._v("#")]),t._v(" "),a("strong",[t._v("v-on参数")])]),t._v(" "),a("ol",[a("li",[t._v("如果方法不需要额外参数，那么方法后的（）可以不添加。")]),t._v(" "),a("li",[t._v("如果需要同时传入某个参数，同时需要event时，可以通过$event传入事件。")])]),t._v(" "),a("h4",{attrs:{id:"v-on修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-on修饰符"}},[t._v("#")]),t._v(" v-on修饰符")]),t._v(" "),a("ol",[a("li",[t._v(".stop  -  调用event.stopPropagation()")]),t._v(" "),a("li",[t._v(".prevent  -  调用 event.preventDefault()")]),t._v(" "),a("li",[t._v(".{KeyCode | keyAlias}  -  只当事件师从特定键触发时才触发返回")]),t._v(" "),a("li",[t._v(".native  -  监听组件根元素的原生事件")]),t._v(" "),a("li",[t._v(".once  -  只触发一次回调")])]),t._v(" "),a("h2",{attrs:{id:"条件判断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件判断"}},[t._v("#")]),t._v(" 条件判断")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("v-if、v-else-if、v-else：")]),t._v(" "),a("p",[t._v("这三条指令与javaScript的条件语句if  else  else if类似")]),t._v(" "),a("p",[t._v("Vue的条件指令可以根据表达式在DOM中渲染或销毁元素或组件")])]),t._v(" "),a("li",[a("p",[t._v("v-if的原理：")]),t._v(" "),a("p",[t._v("v-if后面的条件为false时，对应的元素以及其子元素不会渲染")]),t._v(" "),a("p",[t._v("也就是根本不会有对应的标签出现在DOM中")])]),t._v(" "),a("li",[a("p",[t._v("v-show条件为false时，将display属性设置为none而已。")])]),t._v(" "),a("li",[a("p",[t._v("需要显示隐藏之间切片很频繁时，使用v-show")]),t._v(" "),a("p",[t._v("当只有一次切换时，使用v-if")])])]),t._v(" "),a("h2",{attrs:{id:"循环遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#循环遍历"}},[t._v("#")]),t._v(" 循环遍历")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("v-for遍历数组和对象")])]),t._v(" "),a("li",[a("p",[t._v("官方推荐我们在使用v-for时，给对应的元素或组件添加上一个key属性")])]),t._v(" "),a("li",[a("p",[a("img",{attrs:{src:s(273),alt:"image"}})])])]),t._v(" "),a("h2",{attrs:{id:"js高阶函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js高阶函数"}},[t._v("#")]),t._v(" JS高阶函数")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("编程范式：命令式编程/声明式编程")])]),t._v(" "),a("li",[a("p",[t._v("编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）")])]),t._v(" "),a("li",[a("p",[t._v("熟悉三个函数filter / map / reduce 的使用")])])]),t._v(" "),a("h2",{attrs:{id:"表单绑定-v-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表单绑定-v-model"}},[t._v("#")]),t._v(" 表单绑定 v-model")]),t._v(" "),a("ul",[a("li",[t._v("表单控件在开发中很常见，特别是对于用户信息的提交需要大量的表单。")]),t._v(" "),a("li",[t._v("Vue中使用v-model 指令来实现表单元素和数据的双向绑定。")]),t._v(" "),a("li",[t._v("v-model本质上包含两个操作：\n"),a("ol",[a("li",[t._v("v-bind绑定一个value属性。")]),t._v(" "),a("li",[t._v("v-on指令给当前元素绑定input事件。")])])])]),t._v(" "),a("h4",{attrs:{id:"值绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#值绑定"}},[t._v("#")]),t._v(" 值绑定")]),t._v(" "),a("ul",[a("li",[t._v("应用v-bind给input动态绑定value值")])]),t._v(" "),a("h4",{attrs:{id:"修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修饰符"}},[t._v("#")]),t._v(" 修饰符")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("lazy修饰符：")]),t._v(" "),a("ol",[a("li",[t._v("默认情况下，v-model默认是在input事件中同步输入框的数据的")]),t._v(" "),a("li",[t._v("也就是说，一旦有数据发生改变相对应的data中的数据就会自动发生改变")]),t._v(" "),a("li",[t._v("lazy修饰符可以让数据在失去焦点或者回车时才会更新")])])]),t._v(" "),a("li",[a("strong",[t._v("number修饰符：")]),t._v(" "),a("ol",[a("li",[t._v("默认情况下，在输入框中无论我们输入的是字母还是数字，都会被当作字符串类型进行处理")]),t._v(" "),a("li",[t._v("但是如果我们希望处理的时数字类型，那么最好直接将内容当作数字处理")]),t._v(" "),a("li",[t._v("number修饰符可以让在输入框中输入的内容自动转成数字类型")])])]),t._v(" "),a("li",[a("strong",[t._v("trim修饰符：")]),t._v(" "),a("ol",[a("li",[t._v("如果输入的内容首尾有很多空格，通常我们希望将其去除")]),t._v(" "),a("li",[t._v("trim修饰符可以过滤内容左右两边的空格")])])])]),t._v(" "),a("h2",{attrs:{id:"vue组件化思想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue组件化思想"}},[t._v("#")]),t._v(" Vue组件化思想")]),t._v(" "),a("ul",[a("li",[t._v("组件化是Vue.js中的重要思想：\n"),a("ol",[a("li",[t._v("它提供了一种抽象，让我们可以开发除一个个可独立复用的小组件来构造我们的应用。")]),t._v(" "),a("li",[t._v("任何应用都会被抽象成一颗组件树。")])])]),t._v(" "),a("li",[t._v("组件化思想的应用：\n"),a("ol",[a("li",[t._v("有了组件化的思想，我们在之后的开发中就要充分地利用它。")]),t._v(" "),a("li",[t._v("尽可能地将页面拆分成一个个小的、可复用的组件。")]),t._v(" "),a("li",[t._v("这样我们的代码更加方便组织和管理，并且拓展性也更强。")])])])]),t._v(" "),a("h4",{attrs:{id:"创建组件的基本步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建组件的基本步骤"}},[t._v("#")]),t._v(" 创建组件的基本步骤")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("三步：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("创建组件构造器")])]),t._v(" "),a("li",[a("p",[t._v("注册组件")])]),t._v(" "),a("li",[a("p",[t._v("使用组件")])])])])]),t._v(" "),a("p",[a("img",{attrs:{src:s(274),alt:"image"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("1.Vue.extend():")]),t._v(" "),a("ul",[a("li",[t._v("调用Vue.extend()创建的是一个组件构造器。")]),t._v(" "),a("li",[t._v("通常在创建组件构造器时，传入template代表我们自定义组件的模板。")]),t._v(" "),a("li",[t._v("该模板就是在使用到组件的地方，要显示的html代码。")])])]),t._v(" "),a("li",[a("p",[t._v("2.Vue.components():")]),t._v(" "),a("ul",[a("li",[t._v("调用Vue.components是将刚才的组件构造器注册为一个组件，并且给它起一个组件的标签名称。")]),t._v(" "),a("li",[t._v("所以需要传递两个参数：1、注册组件的标签名 2、组件构造器")])])]),t._v(" "),a("li",[a("p",[t._v("3.组件挂载在Vue实例中")])])]),t._v(" "),a("h4",{attrs:{id:"全局组件和局部组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局组件和局部组件"}},[t._v("#")]),t._v(" 全局组件和局部组件")]),t._v(" "),a("h4",{attrs:{id:"父组件和子组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#父组件和子组件"}},[t._v("#")]),t._v(" 父组件和子组件")]),t._v(" "),a("h4",{attrs:{id:"注册组件语法糖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册组件语法糖"}},[t._v("#")]),t._v(" 注册组件语法糖")]),t._v(" "),a("ul",[a("li",[t._v("省去extend()步骤，直接用一个对象来代替")])]),t._v(" "),a("h4",{attrs:{id:"模板分离写法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板分离写法"}},[t._v("#")]),t._v(" 模板分离写法")]),t._v(" "),a("ul",[a("li",[t._v("使用 script 标签")]),t._v(" "),a("li",[t._v("使用 template 标签")])]),t._v(" "),a("h4",{attrs:{id:"组件数据的存放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件数据的存放"}},[t._v("#")]),t._v(" 组件数据的存放")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("组件不能访问Vue实例的数据，有自己保存数据的地方")])]),t._v(" "),a("li",[a("p",[t._v("组件对象也有data,methods等属性")])]),t._v(" "),a("li",[a("p",[t._v("data属性必须是一个函数，函数返回一个对象")])])]),t._v(" "),a("h4",{attrs:{id:"父子组件的通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#父子组件的通信"}},[t._v("#")]),t._v(" 父子组件的通信")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在开发中，往往让大组件请求数据发送到小组件。")])]),t._v(" "),a("li",[a("p",[t._v("父组件通过props向子组件传递数据。")])]),t._v(" "),a("li",[a("p",[t._v("子组件通过事件向父组件发送消息。")])]),t._v(" "),a("li",[a("p",[t._v("Vue实例和子组件的通信和父组件和子组件的通信是一样的。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:s(275),alt:"image"}})]),t._v(" "),a("h4",{attrs:{id:"父子组件的访问方式-children"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#父子组件的访问方式-children"}},[t._v("#")]),t._v(" 父子组件的访问方式：$children")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("父组件直接访问子组件：$children或$refs")]),t._v(" "),a("ul",[a("li",[t._v("this.$children是一个数组类型，它包含所有子组件对象，很不常用。")]),t._v(" "),a("li",[t._v("this.%refs是对象类型，非常地常用")])])]),t._v(" "),a("li",[a("p",[t._v("子组件访问父组件：$parent（同children很不常用）")])]),t._v(" "),a("li",[a("p",[t._v("子组件访问根组件：$root (直接访问vue实例)")])])]),t._v(" "),a("h4",{attrs:{id:"插槽slot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插槽slot"}},[t._v("#")]),t._v(" 插槽slot")]),t._v(" "),a("ul",[a("li",[t._v("组件的插槽可以决定组件内部的一些内容到底展示什么。")])]),t._v(" "),a("h4",{attrs:{id:"编译作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译作用域"}},[t._v("#")]),t._v(" 编译作用域")]),t._v(" "),a("ul",[a("li",[t._v("父组件模板的所有东西都会在父级作用域编译")]),t._v(" "),a("li",[t._v("子组件模板的所有东西都会在子级作用域编译")])]),t._v(" "),a("h4",{attrs:{id:"作用域插槽"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域插槽"}},[t._v("#")]),t._v(" 作用域插槽")]),t._v(" "),a("ul",[a("li",[t._v("父组件替换插槽的标签，但是内容由子组件来提供")])]),t._v(" "),a("h2",{attrs:{id:"模块化开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块化开发"}},[t._v("#")]),t._v(" 模块化开发")]),t._v(" "),a("ul",[a("li",[t._v("解决命名冲突的问题，同时解决代码复用的问题。")])]),t._v(" "),a("h4",{attrs:{id:"commonjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs"}},[t._v("#")]),t._v(" CommonJS")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("模块化的两个核心：导出和导入")])]),t._v(" "),a("li",[a("p",[t._v("CommonJS的导出")]),t._v(" "),a("ul",[a("li",[a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("flag")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("b\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("b\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])]),t._v(" "),a("li",[a("p",[t._v("CommonJS的导入")]),t._v(" "),a("ul",[a("li",[a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("flag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'moduleA'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])])]),t._v(" "),a("h4",{attrs:{id:"es6的模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6的模块化"}},[t._v("#")]),t._v(" ES6的模块化")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("导出变量：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lihua'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lihua'")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("导入变量")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./***.js"')]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("export default")]),t._v(" "),a("p",[t._v("某些情况下，一个模块中包含的某个功能，我们并不希望给这个功能命名，而且让导入者可以自己来命名。")]),t._v(" "),a("ul",[a("li",[t._v("这个时候可以使用export。")]),t._v(" "),a("li",[t._v("export default在同一个模块中只能存在一个。")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);