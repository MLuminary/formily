(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{156:function(e,t,a){var l={"./bash":142,"./bash.js":142,"./css":143,"./css.js":143,"./htmlbars":144,"./htmlbars.js":144,"./javascript":145,"./javascript.js":145,"./scss":146,"./scss.js":146,"./typescript":147,"./typescript.js":147};function n(e){var t=c(e);return a(t)}function c(e){if(!a.o(l,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return l[e]}n.keys=function(){return Object.keys(l)},n.resolve=c,e.exports=n,n.id=156},546:function(e,t,a){"use strict";var l=a(151),n=(a(152),a(153)),c=(a(154),function(){return l.createElement(l.Fragment,{},l.createElement("h1",{id:"createform",className:"react-demo-h1"},"createForm"),l.createElement("h2",{id:"介绍",className:"react-demo-h2"},"介绍"),l.createElement("p",{className:"react-demo-p"},"创建一个Form实例，它负责管理整个表单的数据状态与校验状态。"),l.createElement("h2",{id:"类型描述",className:"react-demo-h2"},"类型描述"),l.createElement(n,{code:"type createForm({\n  initialValues : Object,\n  subscribes : Object,\n  schema : Object,\n  effects : Function,\n  onSubmit : Function,\n  onReset : Function,\n  onFormChange : Function,\n  onFieldChange : Function,\n  onValidateFailed : Function\n})\n",justCode:!0,lang:"typescript"}),l.createElement("h2",{id:"依赖",className:"react-demo-h2"},"依赖"),l.createElement(n,{code:"import {createForm} from '@alife/uform'\n",justCode:!0,lang:"javascript"}),l.createElement("h2",{id:"api",className:"react-demo-h2"},"API"),l.createElement("table",{className:"react-demo-table"},l.createElement("thead",{className:"react-demo-thead"},l.createElement("tr",{className:"react-demo-tr"},l.createElement("th",{align:null,className:"react-demo-th"},"属性名称"),l.createElement("th",{align:null,className:"react-demo-th"},"属性描述"),l.createElement("th",{align:null,className:"react-demo-th"},"属性类型"),l.createElement("th",{align:null,className:"react-demo-th"},"默认值"))),l.createElement("tbody",{className:"react-demo-tbody"},l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"initialValues"),l.createElement("td",{align:null,className:"react-demo-td"},"初始值"),l.createElement("td",{align:null,className:"react-demo-td"},"Object"),l.createElement("td",{align:null,className:"react-demo-td"})),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"subscribes"),l.createElement("td",{align:null,className:"react-demo-td"},"观察者对象"),l.createElement("td",{align:null,className:"react-demo-td"},l.createElement("code",{className:"react-demo-code"},"{[eventName:String]:Observable}")),l.createElement("td",{align:null,className:"react-demo-td"})),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"schema"),l.createElement("td",{align:null,className:"react-demo-td"},"json schema对象，用于搜索json schema中的default属性值，同时merge至initialValues中"),l.createElement("td",{align:null,className:"react-demo-td"},"Object"),l.createElement("td",{align:null,className:"react-demo-td"})),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"effects"),l.createElement("td",{align:null,className:"react-demo-td"},"副作用处理函数"),l.createElement("td",{align:null,className:"react-demo-td"},l.createElement("code",{className:"react-demo-code"},"Function( selector : Function ){}")),l.createElement("td",{align:null,className:"react-demo-td"})),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"onSubmit"),l.createElement("td",{align:null,className:"react-demo-td"},"Submit事件处理器"),l.createElement("td",{align:null,className:"react-demo-td"},l.createElement("code",{className:"react-demo-code"},"Function({formState : Object}){}")),l.createElement("td",{align:null,className:"react-demo-td"})),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"onReset"),l.createElement("td",{align:null,className:"react-demo-td"},"Reset事件处理器"),l.createElement("td",{align:null,className:"react-demo-td"},l.createElement("code",{className:"react-demo-code"},"Function({formState : Object}){}")),l.createElement("td",{align:null,className:"react-demo-td"})),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"onFormChange"),l.createElement("td",{align:null,className:"react-demo-td"},"FormChange事件处理器"),l.createElement("td",{align:null,className:"react-demo-td"},l.createElement("code",{className:"react-demo-code"},"Function({ formState : Object }){}")),l.createElement("td",{align:null,className:"react-demo-td"})),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"onFieldChange"),l.createElement("td",{align:null,className:"react-demo-td"},"FieldChange事件处理器"),l.createElement("td",{align:null,className:"react-demo-td"},l.createElement("code",{className:"react-demo-code"},"Function({ formState : Object, fieldState : Object }){}")),l.createElement("td",{align:null,className:"react-demo-td"})),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"onValidateFailed"),l.createElement("td",{align:null,className:"react-demo-td"},"Validate校验失败事件处理器"),l.createElement("td",{align:null,className:"react-demo-td"},l.createElement("code",{className:"react-demo-code"},"Function(errors : Array<String>){}")),l.createElement("td",{align:null,className:"react-demo-td"})))),l.createElement("h2",{id:"formstate",className:"react-demo-h2"},"formState"),l.createElement("p",{className:"react-demo-p"},"用于描述整个表单状态的模型对象"),l.createElement(n,{code:"type formState {\n    values            : Object, //表单数据\n    valid             : Boolean, //是否合法\n    invalid           : Boolean, //是否不合法\n    errors            : Array<String>, //错误提示集合\n    pristine          : Boolean, //是否是原始态\n    dirty             : Boolean //是否存在变化\n}\n",justCode:!0,lang:"typescript"}),l.createElement("h2",{id:"fieldstate",className:"react-demo-h2"},"fieldState"),l.createElement("p",{className:"react-demo-p"},"用于描述表单字段状态的模型对象"),l.createElement(n,{code:"type fieldState {\n    value            : Any,//字段值\n    valid            : Boolean,//字段是否合法\n    invalid          : Boolean,//字段是否非法\n    visible          : Boolean,//字段显示状态\n    editable         : Boolean,//字段是否可编辑\n    loading          : Boolean,//字段加载状态\n    errors           : Array<String>,//字段错误消息集合\n    pristine         : Boolean,//字段是否处于原始态\n    initialValue     : Any,//字段初始值\n    name             : String,//字段路径\n    path,            : Array<String>//字段路径，数组形式\n    props            : Object,//字段附加属性\n    rules            : Array<Object | Function | String>//字段校验规则\n}\n",justCode:!0,lang:"typescript"}),l.createElement("h2",{id:"用例",className:"react-demo-h2"},"用例"),l.createElement(n,{code:"const form = createForm({\n  initialValues: {\n    aa: 123,\n    bb: 222\n  },\n  onSubmit: ({formState}) => {\n    console.log(formState)\n  },\n  onFieldChange:({formState})=>{\n    console.log(formState)\n  }\n})\n\nconst aa = form.registerField('aa', {\n  onChange(fieldState) {\n    console.log(fieldState)\n  }\n})\n\nsetTimeout(() => {\n  aa.changeValue(456)\n  setTimeout(() => {\n    form.submit()\n  }, 1000)\n}, 500)\n",justCode:!0,lang:"javascript"}))});c.meta={username:"zhili.wzl",email:"wangzhili56@126.com"},e.exports=c}}]);
//# sourceMappingURL=bundle.21.b03f1a56bdb2fb0127fd.js.map