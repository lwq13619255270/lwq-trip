# lwq-trip

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## 全家桶-创建项目
- 方法一 Vue CLi
    -  基于webpack
    -  命令 vue create
- 方法二： create-vue (本项目创建采用的方法)
    - 基于vite工具
    - 命令：npm init vue@latest

- 项目配置:
    - 配置项目的icon
    - 配置项目的标题
    - 配置jsconfig.json (在vscode编写代码可以友好的代码提示)

## 全家桶-目录结构的划分
```
|- src
|-- assets(img/css/font/video等)
|-- components 公共组件
|-- hooks(多个组件用到的公共代码逻辑)
|-- mock(模拟的数据)
|-- router(路由)
|-- service(网络请求)
|-- store(状态管理)
|-- utils(工具函数)
|-- views(路由页面)
```
## 全家桶-样式的重置
- 对默认css样式进行重置
    - normalize.css
        - 安装命令： npm install --save normalize.css 
        - 引入：main.js import 'normalize.css'
    - reset.css

## 全家桶-路由配置
- 安装路由
    - 命令： npm install vue-router
    - 在router文件进行配置
    - 在main.js进行导入

## 全家桶-状态管理
- 状态管理的选择
    - vuex: 目前依然使用较多的状态管理库；
    - pinia: 强烈推荐，未来趋势状态管理库 （本项目使用的）
        - 安装pinia
        - 命令： npm install pinia
        - 在stores中创建
        - 在main.js进行导入

## 安装ui组件 - vant
- 命令：npm i vant
- 按需引入组件样式
    - 命令：npm i unplugin-vue-components -D