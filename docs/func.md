# 函数
## 声明函数
``` javascript
const func = function () {
  fb()
  console.log('1')
}
function fb () {
  console.log(this)
}
// 调用
func() // 1
```
## 匿名函数 -- 自执行函数
``` javascript
(function () {
  console.log("I am func")
})()
```
## 箭头函数
``` javascript
const f = () => {}
const h = a => { console.log(a) }
```
1. 简洁
2. 没有this的绑定
## 函数参数
``` javascript
const func1 = function (pms) {
  fb2()
  console.log(pms)
}
function fb2 () {
}
// 调用
func1() // 1
```
## 函数返回值
return
``` js
const func_a = (a) => {
  return a
}
// const func_a = (a) => a
// 闭包概念
```
## 时间延迟函数
```js
// 定时器
setTimeOut(() => {
  // ...
}, 1000)
// 计时器
wwindow.setInterval(() => {
  console.log('hahah')
}, 1000)
//清除
clearTimeOut()
```
## 构造函数
``` js
function Human (name, sex, age, country) {
  this.name = name
  this.sex = sex
  this.age = age
  this.country = country
}
const male = new Human('Joy', 'male', 19, 'China')
const female = new Human('Kely', 'female', 19, 'Japan')

console.log("male:", male)
console.log("female:", female)
```
