# 介绍
wxa是一套完善的微信小程序开发解决方案，通过Decorator增强小程序能力，基于nodejs工程化小程序开发流程，同时支持Vue单文件开发模式和原生小程序开发模式！此外还提供了一套基于wxa开发UI组件。

## 特性
- 核心类库`@wxa/core`
    - Mixins
    - Plugins 支持插件机制
    - Promise 化小程序api
    - Eventbus 自定义事件
    - Redux 全局状态管理方案
    - Router 路由跳转
    - Decorator 切面编程，无缝增强

- 命令行工具`@wxa/cli`
    - Npm支持
    - 原生开发模式
    - Vue单文件开发模式
    - 插件机制
    - 个性化编译器
    - 原生组件支持
    - 第三方原生组件
    - 调用微信开发者工具

## 初衷
小程序自诞生开始，大家对改进其开发流程都有自己的见解，例如组件化方面有[zanui](https://github.com/youzan/zanui-weapp)，[weui](https://github.com/Tencent/weui-wxss/), 框架方面有[wepy](https://github.com/Tencent/wepy)。过去一年，一直在观望wepy，文档和源码都有拜读了，不得不说思路的确很惊艳，几次都想在项目中应用，又被大量issue吓退了，等到wepy相当稳定的时候，结果官方又支持了自定义组件了，于是一直都是使用自己开发部署流程在工作，的确发现有很多改进的地方，写了wxa希望能把自己的一些想法加进去，同时改进一下开发的工作流。