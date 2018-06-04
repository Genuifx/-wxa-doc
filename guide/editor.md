# 语法高亮和检查

## vs code配置
::: tip 提示
推荐使用[vsCode](https://github.com/Microsoft/vscode)开发小程序，提高开发体验和效率:100:
::: 

打开项目的`.vsode/settings.json`，添加以下配置：
```json
{
    "javascript.implicitProjectConfig.experimentalDecorators": true,
    "vetur.grammar.customBlocks": {
        "docs": "md",
        "i18n": "json",
        "config": "json"
    },
    "vetur.validation.template": false,
    "eslint.enable": true
}
```

::: tip 提示
推荐使用 [vetur](https://github.com/vuejs/vetur) 高亮`.wxa` 文件.

运行vscode指令："Vetur: Generate grammar from vetur.grammar.customBlocks"

重启生效配置
:::

## Eslint代码校验
使用eslint校验代码，在开发阶段就解决弱*问题
```json
{
    "extends": [
        "./node_modules/eslint-config-google/index.js"
    ],
    "root": true,
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true
        },
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "rules": {
        "vue/valid-template-root": "off",
        "no-const-assign": "warn",
        "valid-template-root": "off",
        "no-this-before-super": "warn",
        "no-undef": "warn",
        "no-unreachable": "warn",
        "no-unused-vars": "warn",
        "constructor-super": "warn",
        "valid-typeof": "warn",
        "one-var": "warn",
        "max-len": "off",
        "no-trailing-spaces": "off",
        "require-jsdoc": "warn",
        "camelcase": "warn",
        "no-invalid-this": "warn",
        "new-cap": "warn",
        "guard-for-in": "warn"
    }
}
```
::: warning 注意
"parser"指定为"vue-eslint-parser"，能够解析到`.wxa`文件的结构，否则会出现奇奇怪怪的报错。
:::