(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{139:function(e,n,a){var t={"./bash":123,"./bash.js":123,"./css":124,"./css.js":124,"./htmlbars":125,"./htmlbars.js":125,"./javascript":126,"./javascript.js":126,"./scss":127,"./scss.js":127,"./typescript":128,"./typescript.js":128};function s(e){var n=r(e);return a(n)}function r(e){if(!a.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}s.keys=function(){return Object.keys(t)},s.resolve=r,e.exports=s,s.id=139},96:function(e,n,a){"use strict";var t=a(135),s=(a(136),a(137)),r=(a(138),function(){return t.createElement(t.Fragment,{},t.createElement("h1",{id:"setvalidationlocale",className:"react-demo-h1"},"setValidationLocale"),t.createElement("h2",{id:"介绍",className:"react-demo-h2"},"介绍"),t.createElement("p",{className:"react-demo-p"},"设置正则校验规则的国际化文案"),t.createElement("h2",{id:"类型描述",className:"react-demo-h2"},"类型描述"),t.createElement(s,{code:"type setValidationLocale({\n   [isoCode : String]:{\n      [patternName : String]:message : String\n   }\n})\n",justCode:!0,lang:"typescript"}),t.createElement("h2",{id:"依赖",className:"react-demo-h2"},"依赖"),t.createElement(s,{code:"import {setValidationLocale} from '@alife/uform'\n",justCode:!0,lang:"javascript"}),t.createElement("h2",{id:"默认配置",className:"react-demo-h2"},"默认配置"),t.createElement(s,{code:'{\n  en:{\n    pattern:\'%s value %s does not match pattern %s\',\n    required: \'%s is required\',\n    number:\'%s is not a number\',\n    integer:\'%s is not an integer number\',\n    url:\'%s is a invalid url\',\n    email:"%s is not a email format",\n    ipv6:"%s is not a ipv6 format",\n    ipv4:"%s is not a ipv4 format",\n    idcard:"%s is not an idcard format",\n    taodomain:"%s is not a taobao domain format",\n    qq:"%s is not a qq number format",\n    phone:"%s is not a phone number format",\n    money:"%s is not a currency format",\n    zh:"%s is not a chinese string",\n    date:"%s is not a valid date format",\n    zip:"%s is not a zip format"\n  },\n  zh:{\n    pattern:\'%s 不是一个合法的字段\',\n    required: \'%s 是必填字段\',\n    number:\'%s 不是合法的数字\',\n    integer:\'%s 不是合法的整型数字\',\n    url:\'%s 不是合法的url\',\n    email:"%s 不是合法的邮箱格式",\n    ipv6:"%s 不是合法的ipv6格式",\n    ipv4:"%s 不是合法的ipv4格式",\n    idcard:"%s 不是合法的身份证格式",\n    taodomain:"%s 不符合淘系域名规则",\n    qq:"%s 不符合QQ号格式",\n    phone:"%s 不是有效的手机号",\n    money:"%s 不是有效货币格式",\n    zh:"%s 不是合法的中文字符串",\n    date:"%s 不是合法的日期格式",\n    zip:"%s 不是合法的邮编格式"\n  }\n}\n',justCode:!0,lang:"json"}))});r.meta={username:"zhili.wzl",email:"wangzhili56@126.com"},e.exports=r}}]);