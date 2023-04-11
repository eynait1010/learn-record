# start
开发服务器主要做以下几件事
1. 基于Koa实现静态资源服务器
> 当浏览器访问index.html后，会去读取script脚本中的src资源
2. 重写路径 
> `.js`资源会去`import x from xxx`，这个时候需要重写xxx路径，如 `vue` -> `@vue/runtime-dom/dist/runtime-dom.esm-bundler.js`
3. 编译vue文件（解析语法树，模版字符串方式生成js文件）
4. 注入环境变量，如`process.env.NODE_ENV`(vue源码中会用到)
5. 支持样式
6. 第三方依赖分析+预编译//TODO:
7. HMR(Vite 同时利用 HTTP 头来加速整个页面的重新加载)//TODO:
- dev
  rollup//TODO:
## to-dos
shims-vue.d.ts
