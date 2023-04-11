//TODO:
- npm声明文件可能的位置
node_modules/jquery/package.json
"types":"types/xxx.d.ts"
node_modules/jquery/index.d.ts
node_modules/@types/jquery/index.d.ts
typings\jquery\index.d.ts
- 查找声明文件
如果是手动写的声明文件，那么需要满足以下条件之一，才能被正确的识别
给 package.json 中的 types 或 typings 字段指定一个类型声明文件地址
在项目根目录下，编写一个 index.d.ts 文件
针对入口文件（package.json 中的 main 字段指定的入口文件），编写一个同名不同后缀的 .d.ts 文件
{
    "name": "myLib",
    "version": "1.0.0",
    "main": "lib/index.js",
    "types": "myLib.d.ts",
}
`
先找myLib.d.ts
没有就再找index.d.ts
还没有再找lib/index.d.js
还找不到就认为没有类型声明了