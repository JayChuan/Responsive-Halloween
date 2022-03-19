# 类型
## 数据类型及变量声明
基本类型 
  number
  string
  null
  undefined
  boolean
对象类型
  object: array - function ...
## 类型判断
typeof：
1. 只能准确判断除null基本类型以及function
2. `typeof null === 'object' is bug`
3. `typeof [] === 'object'`
instanceof:
1. 根据原型和原型链来查询的
[instanceof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)
Object.prototype.toString
1. 通过调用Object的原型方法toString来判断类型
## 类型转换
#### 隐式类型转换
#### 强制类型转换
#### 拆箱跟装箱

## 作用域
ES6
1. 全局作用域
2. 函数作用域
3. 块级作用域 - let const