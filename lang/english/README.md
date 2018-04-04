---
nav: english
search: english
---

wxa是一套完善的微信小程序解决方案，通过Decorator增强小程序能力，基于nodejs工程化小程序开发流程，同时支持Vue单文件开发模式和原生小程序开发模式！此外还提供了一套基于wxa开发UI组件。

## 特性
- [x] Vue单文件开发模式
- [x] 贴合原生开发
- [x] Npm
- [x] ES next
- [x] UI组件库
- [x] Redux
- [ ] ...

## 初衷
小程序自诞生开始，大家对改进其开发流程都有自己的见解，例如组件化方面有[zanui](https://github.com/youzan/zanui-weapp)，[weui](https://github.com/Tencent/weui-wxss/), 框架方面有[wepy](https://github.com/Tencent/wepy)。过去一年，一直在观望wepy，文档和源码都有拜读了，不得不说思路的确很惊艳，几次都想在项目中应用，又被大量issue吓退了，等到wepy相当稳定的时候，结果官方又支持了自定义组件了，于是一直都是使用自己开发部署流程在工作，的确发现有很多改进的地方，写了wxa希望能把自己的一些想法加进去，同时改进一下开发的工作流。

## 快速开始
wxa提供了一个方便好用的`cli`工具，使用cli可以快速从github拉取手脚架，快速开始小程序开发

#### 安装依赖
1. 检查node依赖（node6+）    
2. `npm i -g @wxa/cli` 

#### 手脚架项目
1. `wxa create base helloWorld`
2. `cd helloWorld`
3. `npm i`

#### 编译项目
1. `wxa build --watch`

#### 从微信开发者工具打开
在微信开发者工具中填入小程序appid，把目录指向`path/to/helloWorld/dist`。然后就可以开始wxa项目开发了！