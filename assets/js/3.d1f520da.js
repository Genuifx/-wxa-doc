(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{71:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"wxa-core"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wxa-core","aria-hidden":"true"}},[t._v("#")]),t._v(" wxa-core")]),s("p",[s("a",{attrs:{href:"https://travis-ci.org/Genuifx/wxa",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://travis-ci.org/Genuifx/wxa.svg?branch=master",alt:"Build Status"}})]),s("a",{attrs:{href:"https://www.npmjs.com/package/@wxa/core",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/v/@wxa/core.svg",alt:"NPM version"}})]),s("a",{attrs:{href:"https://codecov.io/gh/Genuifx/wxa",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://codecov.io/gh/Genuifx/wxa/branch/master/graph/badge.svg",alt:"codecov"}})])]),s("p",[t._v("A tiny library for improving  Wechat Mini programs development.😆")]),s("p",[t._v("use "),s("a",{attrs:{href:"https://github.com/Genuifx/wxa-cli",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("@wxa/cli")])]),t._v(" for better experiment.😏")]),s("h2",{attrs:{id:"feature"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#feature","aria-hidden":"true"}},[t._v("#")]),t._v(" Feature")]),s("ul",[s("li",[t._v("Mixins")]),s("li",[t._v("Promisify")]),s("li",[t._v("Decorator")]),s("li",[t._v("Router")]),s("li",[t._v("Eventbus")]),s("li",[t._v("Redux")])]),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Usage")]),s("h3",{attrs:{id:"app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app","aria-hidden":"true"}},[t._v("#")]),t._v(" App")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("    import {wxa, App} from '@wxa/core';\n\n    @App\n    class Main{\n        //your logic here\n    }\n    // start up app\n    wxa.launchApp(Main);\n")])]),s("h3",{attrs:{id:"page"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#page","aria-hidden":"true"}},[t._v("#")]),t._v(" Page")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("    import {wxa, Page} from '@wxa/core';\n\n    @Page\n    class Index{\n        //your logic here\n    }\n    // start up app\n    wxa.launchPage(Index);\n")])]),s("h3",{attrs:{id:"mixins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mixins","aria-hidden":"true"}},[t._v("#")]),t._v(" mixins")]),s("p",[t._v("support mixin object;")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("    "),s("span",{attrs:{class:"token comment"}},[t._v("// common.js")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        data"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            email"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'genuifx@gmail.com'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("onLoad")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'common mixin onLoad'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        methods"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token function"}},[t._v("bindViewTap")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("router"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("push")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'../logs/logs'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("    "),s("span",{attrs:{class:"token comment"}},[t._v("// page instance")]),t._v("\n\n    @Page\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Index")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        mixins "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("common"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("//your logic here")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("#")]),t._v(" Api")]),s("h3",{attrs:{id:"storage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#storage","aria-hidden":"true"}},[t._v("#")]),t._v(" Storage")]),s("p",[t._v("useful, convenient methods for interact with wx.storage*")]),s("ul",[s("li",[s("strong",[t._v("set")]),t._v(": preserve data with wx.setStorageSync;\n"),s("code",[t._v("this.storage.set(key, data)")])]),s("li",[s("strong",[t._v("get")]),t._v(": get data from storage;\n"),s("code",[t._v("let data = this.storage.get(key)")])]),s("li",[s("strong",[t._v("clear")]),t._v(": clean up storage, delete all data;\n"),s("code",[t._v("this.storage.clear()")])]),s("li",[s("strong",[t._v("remove")]),t._v(": remove target the data;\n"),s("code",[t._v("this.storage.remove(key)")])])]),s("h3",{attrs:{id:"wxapi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wxapi","aria-hidden":"true"}},[t._v("#")]),t._v(" Wxapi")]),s("p",[t._v("wrap Mini program's async function with promise, and do nothing with the sync function\nexample:")]),s("ol",[s("li",[t._v("navigateToMiniProgram")])]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wxapi"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("navigateToMiniProgram")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("params"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("then")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("succ"),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("catch")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fail"),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("setStorageSync")])]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" value "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wxapi"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getStorageSync")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("h3",{attrs:{id:"utils"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#utils","aria-hidden":"true"}},[t._v("#")]),t._v(" Utils")]),s("p",[t._v("helper function")]),s("h3",{attrs:{id:"router"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#router","aria-hidden":"true"}},[t._v("#")]),t._v(" Router")]),s("p",[t._v("similar API pattern to vue-router, just wrap the mini programs navigate methods;")]),s("h3",{attrs:{id:"eventbus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eventbus","aria-hidden":"true"}},[t._v("#")]),t._v(" Eventbus")]),s("p",[t._v("eventbus")]),s("h3",{attrs:{id:"logger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logger","aria-hidden":"true"}},[t._v("#")]),t._v(" Logger")]),s("p",[t._v("logger to report err or user behavior to your remote server.")]),s("h2",{attrs:{id:"redux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redux","aria-hidden":"true"}},[t._v("#")]),t._v(" Redux")]),s("p",[t._v("use redux to manage your application's page state\nurl: https://github.com/Genuifx/wxa-redux.git")])])}],!1,null,null,null);a.default=e.exports}}]);