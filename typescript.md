# never
```ts
// type 1
function error(message: string): never {
    throw new Error(message);
}
// type 2
function infiniteLoop(): never {
    while (true) {}
}
// type 3
function fn(x: number | string) {
  if (typeof x === 'number') {} 
  else if (typeof x === 'string') {} 
  else {
    // x: never 类型
  }
}
```
# 函数
## 默认参数
```ts
// 有默认参数则可以不传
function ajax(url:string,method:string='GET') {
    console.log(url,method);
}
ajax('/users');
```
## 函数重载
```ts
function func(val: string): void;
function func(val: number): void;
function func(val:any):void {
    if (typeof val === 'string') {
      // ...
    } else {
      // ...
    }
}
func('string');
func(1);
func(true); // ERROR
```
# 类
 当我们写一个类的时候,会得到2个类型 // TODO:
 1. 构造函数类型的函数类型
 2. 类的实例类型
## 存取器
```ts
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  get name() {
    return this.name;
  }
  set name(value) {
    this.name = value;
  }
}
let user = new User('javascript');
user.name = 'typescript';
console.log(user.name); 
```
## 装饰器
// TODO:
装饰器怎么配置？
控制反转
# 接口
任意属性
```ts
interface IDefine {
  [key: string]: any;
}
```
## 函数类型接口-普通函数
```ts
interface discount{
  (price:number):number
}
let cost:discount = function(price:number):number{
   return price * .8;
}

interface WithNameClass{
  new(name:string):Animal
}
```
## 函数类型接口-构造函数
```ts
class Animal{
  constructor(public name:string){
  }
}
interface WithNameClass{
  new(name:string):Animal
}
function createAnimal(class:WithNameClass,name:string){
   return new class(name);
}
let animal = createAnimal(Animal,'dog');
```
## interface vs abstract class
- interface
不同类之间公有的属性或方法，可以抽象成一个接口（Interfaces）
接口仅能够用于描述,既不提供方法的实现，也不为属性进行初始化
- abstract class
抽象类是供其他类继承的基类，抽象类不允许被实例化
能够实现方法和初始化属性
抽象类中的抽象方法必须在子类中被实现
- connection
一个类可以继承一个类或抽象类，但可以实现（implements）多个接口
抽象类也可以实现接口
# 泛型
```ts
function logger<T>(val: T) {
    console.log(val.length); //直接访问会报错
}
//可以让泛型继承一个接口
interface LengthWise {
    length: number
}
//可以让泛型继承一个接口
function logger2<T extends LengthWise>(val: T) {
    console.log(val.length)
}
logger2('zhufeng');
logger2(1);// 装箱后没有length属性，所以会报错
```
## 泛型 + 重载（overload）
https://github.com/reduxjs/redux/blob/c21ac204e8ef1d6d428ee3b906b3646c73aa9441/src/compose.ts

# 类型系统
Duck-Check（只要目标类型中声明的属性变量在源类型中都存在就是兼容的），如下
## 接口的兼容性
```ts
interface Animal {
    name: string;
    age: number;
}

interface Person {
    name: string;
    age: number;
    gender: number
}
// 要判断目标类型`Person`是否能够兼容输入的源类型`Animal`
function getName(animal: Animal): string {
    return animal.name;
}

let p = {
    name: 'zhufeng',
    age2: 10,
    gender: 0
}

getName(p);
```
## 类的兼容性
```ts
class Animal{}
// 如果父类和子类结构一样，也可以的
// 但是如果子类有新的属性就不可以
class Bird extends Animal{}
class Fish extends Animal{
  swim:string
}

let a:Animal;
a = new Bird();

let b:Bird;
b = new Animal();

let f:Fish;
f = new Animal(); // 报错
```
## 函数的兼容性
