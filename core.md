# wxa-core

[![Build Status](https://travis-ci.org/Genuifx/wxa.svg?branch=master)](https://travis-ci.org/Genuifx/wxa)
[![NPM version](https://img.shields.io/npm/v/@wxa/core.svg)](https://www.npmjs.com/package/@wxa/core)
[![codecov](https://codecov.io/gh/Genuifx/wxa/branch/master/graph/badge.svg)](https://codecov.io/gh/Genuifx/wxa)

`@wxa/core`是一个非常小巧的包，用于增强小程序原生的能力。可以单独使用，但是一般推荐配合[`@wxa/cli`](https://github.com/Genuifx/wxa-cli)一起使用，体验更佳：）

## 特性
- [x] Mixins
- [x] Plugins 支持插件机制
- [x] Promise 化小程序api
- [x] Eventbus 自定义事件
- [x] Redux 全局状态管理方案
- [x] 定义常用的Router方法，api类似`vue-router`
- [x] 使用ES7新特性Decorator，切面编程，无缝增强

## 用例
支持在原生的app.js使用，也允许在`.wxa`文件中引入
#### App
```javascript
    import {wxa, App} from '@wxa/core';

    @App
    class Main{
        //your logic here
    }
    // start up app
    wxa.launchApp(Main);
```
#### Page
```javascript
    import {wxa, Page} from '@wxa/core';

    @Page
    class Index{
        //your logic here
    }
    // start up app
    wxa.launchPage(Index);
```
#### Mixins
支持混合，合并规则为：方法`methods`和数据`data`按引入顺序依次覆盖，生命周期函数按引入顺序依次执行。
```javascript
    // common.js
    export default {
        data: {
            email: 'genuifx@gmail.com',
        },
        onLoad(q) {
            console.log('common mixin onLoad');
            console.log(q);
            console.log(this.data);
        },
        methods: {
            bindViewTap() {
                this.router.push('../logs/logs');
            },
        },
    };
```
```javascript
    // page instance

    @Page
    class Index{
        mixins = [common]
        //your logic here
    }
```
## Api
`@wxa/core`提供了下面几个Decorator，开发者可以选择性的引入，或者直接使用预定好的两个Decorator`@App`和`@Page`

### Storage
storage方法包装了同步的wx.storage方法，提供简单，容易记得api

#### set
同步保存数据到storage
- 调用示例 `this.storage.set(key, data)`

#### get
同步的获取数据
- 调用示例 `let data = this.storage.get(key)`

#### remove
清除指定key的数据
- 调用示例 `this.storage.remove(key)`

#### clear
清除所有的storage数据
- 调用示例 `this.storage.clear()`


### Wxapi
包装了一层小程序的异步方法，使得开发者可以直接使用promise处理异步问题。
对于同步的方法，不做任何包装直接返回，示例如下：
1. navigateToMiniProgram
```javascript
this.wxapi.navigateToMiniProgram({params}).then(succ=>{}).catch(fail=>{})
```
2. getSystemInfoSync
```javascript
let value = this.wxapi.getSystemInfoSync();
```

### Router
同`vue-router`的api设计，只是包装了一层小程序的跳转方法

#### get
获取当前路由信息
- 示例 `this.router.get()`

#### getAll
获取当前路由栈，同调用`getCurrentPages()`
- 示例 `this.router.getAll()`

#### push
跳转到新路由页面
- 示例 `this.router.push(url)`

#### replace
关闭当前页面，打开新的指定页面
- 示例 `this.router.replace(url)`

#### reLaunch
关闭所有调用栈，重新打开指定页面
- 示例 `this.router.reLaunch(url)`

#### switch
切换tabar页面
- 示例 `this.router.switch(url)`

#### go
回退页面, key为欲回退页面数
- 示例 `this.router.go(-1)`

#### goBack
回退上一个页面，同调用`go(-1)`
- 示例 `this.router.goBack()`

#### close
关闭小程序
- 示例 `this.router.close()`

### Eventbus
wxa提供了自己实现的自定义事件管理，允许用户跨页面，跨组件的共享信息。

#### on
监听一个自定义事件，当事件触发的时候执行回调队列。
- 示例 `this.eventbus.on('event', handler)`

#### off
取消监听一个自定义事件
- 示例 `this.eventbus.off('event', handler)`

#### emit
触发一个自定义事件
- 示例 `this.eventbus.emit('event')`

#### clear
清空指定事件回调，或者清空所有事件回调
- 示例 `this.eventbus.clear()`，注意这么写会清空所有事件
- 示例 `this.eventbus.clear('event')`


## 全局状态管理
`@wxa`提供了一个[redux](https://github.com/Genuifx/wxa-redux.git)集成小程序方案，方便开发者管理全局应用状态

### 挂载
要使用`@wxa/redux`首先需要挂载插件到wxa。
```javascript
// app.wxa or app.js
import {wxa} from '@wxa/core'
import {wxaRedux, combineReducers} from '@wxa/redux'
import promiseMiddleware from 'redux-promise';

wxa.use(wxaRedux, {
    reducers: combineReducers(...your reducer),
    middlewares: [promiseMiddleware]
})
```
挂载完毕后，wxa会在所有调用`launchApp`,`launchPage`和`launchComponent`的地方自动connect store到相应示例。

### 映射
`@wxa/redux`并不会把所有reducer都映射到实例，只有在实例中指定了的reducer才能自动从store同步。

#### 映射到Page
```javascript
// page.js
import {Page, wxa} from '@wxa/core'

@Page
class Index {
    mapState = {
        todolist : (state)=>state.todo
    }
    methods = {
        bindtap() {
            // dispatch your commit here
            this.store.dispatch({type: 'Add_todo_list', payload: 'coding today'});
            // and your page data will auto update.
        }
    }
} 

wxa.launchPage(Index)

```

#### 映射到Component
```javascript
// component.js
import {GetApp} from '@wxa/core'

// redux need mount app to com.
@GetApp
class Com {
    mapState = {
        todolist : (state)=>state.todo
    }
    methods = {
        bindtap() {
            // dispatch your commit here
            this.store.dispatch({type: 'Add_todo_list', payload: 'coding today'});
            // and your page data will auto update.
        }
    }
} 

wxa.launchComponent(Com);
```

具体的实现细节可以参考[@wxa/redux](https://github.com/Genuifx/wxa-redux.git)

## 插件
wxa在调用`launchApp`,`launchPage`和`launchComponent`生成实例的时候会自动应用每个注册的插件，插件机制允许开发者为wxa开发新的功能。

### 插件示例
```javascript
// somthing report error message to remote server
import wa from 'wa'

export default (options)=>{
    return (vm, type)=>{
        if(['App', 'Page'].indexOf(type) > -1){
            vm.logger = wa;
        }
    }
}
```
插件将拿到当前实例`vm`, 以及实例的类型`App`，`Page`，`Component`。

