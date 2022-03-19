const navMenu = document.getElementById('nav-menu'),
      navClose = document.getElementById('nav-close'),
      navOpen = document.getElementById('nav-open')
navClose && navClose.addEventListener('click', () => {
  navMenu && navMenu.classList.remove('menu__active')
})
navOpen && navOpen.addEventListener('click', () => {
  navMenu && navMenu.classList.add('menu__active')
})

const arr = [1, 2, 3]
console.log(arr instanceof Array)

const s = 'str'
const num = 1
const obj = {a: 2}
const fu = function () {

}
const n = null
const b = true
let u
console.log(Object.prototype.toString.call(s)) // [object String]
console.log(Object.prototype.toString.call(num)) // [object Number]
console.log(Object.prototype.toString.call(arr)) // [object Array]
console.log(Object.prototype.toString.call(obj)) // [object Object]
console.log(Object.prototype.toString.call(fu)) // [object Function]
console.log(Object.prototype.toString.call(u)) // [object Undefined]
console.log(Object.prototype.toString.call(b)) // [object Boolean]

console.log(num === Number(obj))
console.log(Number(obj)) // NaN - not a number
// 匿名函数
// (function () {
//   console.log('I am func')
// })()
// let timer = null
// let counts = 0
// timer = window.setTimeout(function () {
//   console.log('我穿越了')
//   clearTimeout(timer)
// }, 2000)

// timer = setInterval(() => {
//   console.log(counts)
//   counts++
//   if (counts > 10) {
//     clearInterval(timer)
//   }
// }, 1000)

// function Anime (name, timeline) {
//   this.name = name
//   this.timeline = timeline
// }
// const anime = new Anime('hahah', 'ease')
// const anime = new Anime('hahah', 'ease')
// console.log(anime)
// 构造函数
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

const fuobj = new fu()
console.log(fuobj)