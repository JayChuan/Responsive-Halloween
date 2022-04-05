const navMenu = document.getElementById('nav-menu'),
      navClose = document.getElementById('nav-close'),
      navOpen = document.getElementById('nav-open')
navClose && navClose.addEventListener('click', () => {
  navMenu && navMenu.classList.remove('menu__active')
})
navOpen && navOpen.addEventListener('click', () => {
  navMenu && navMenu.classList.add('menu__active')
})
// JS-web-api
// 事件监听
// DOM查询
// 滚动相关的API

// document
// document.documentElement - html tag
// document.body - body tag
// window -  global object

// 发生滚动header添加背景色
// 查询dom元素的JS-web-api
// const headers = document.querySelectorAll('.hw-header') // 所有 返回数组
// console.log(headers)

const header = document.querySelector('.hw-header') // 第一个
const topIcon = document.querySelector('.scroll-top')
// console.log(topIcon)
// console.log(header)
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 56) {
    header && header.classList.add('scroll-header')
  } else {
    header && header.classList.remove('scroll-header')
  }
  // document.documentElement.scrollTop > 56 && header
  //   ? header.classList.add('scroll-header')
  //   : header.classList.remove('scroll-header')
  if (document.documentElement.scrollTop > 188) {
    topIcon && (topIcon.style.visibility = 'visible')
  } else {
    topIcon && (topIcon.style.visibility = 'hidden')
  }
})
// 回到顶部
topIcon && topIcon.addEventListener('click', () => {
  // 触发滚动, 滚动到指定位置
  // document.documentElement.scrollTop = 0
  // window.scrollTo(0, 0)
  // window.scrollTo({
  //   top: 0,
  //   behavior: "smooth"
  // })
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})

// 轮播
const swiper = document.querySelector('.home-swiper')
const swiperList = document.querySelectorAll('.home-swiper-item')
const swiperLength = swiperList.length
const dots = document.querySelectorAll('.dot') // 锚点
let activeIdx = 0
// 计时器
let timer = null

Swiper() // 触发swiper 函数

function triggleSwiper () {
  activeIdx++
  if(activeIdx >= swiperLength) {
    activeIdx = 0
  }
  swiper.style.transform = 'translateX(' + activeIdx * (-100) + '%)'
  dots[activeIdx - 1 < 0 ? swiperLength - 1 : activeIdx - 1].classList.remove('active')
  dots[activeIdx].classList.add('active')
}
function Swiper () {
  timer = setInterval(() => {
    triggleSwiper()
  }, 3000)
  changeAnchor()
}
function changeAnchor () {
  // 锚点
  let lastIdx = 0 // 上一个激活的索引
  for (let i = 0; i<dots.length; i++) {
    dots[i].addEventListener('click', () => {
      if (i !== activeIdx) {
        lastIdx = activeIdx
        swiper.style.transform = 'translateX(' + i * (-100) + '%)'
        clearInterval(timer) // 点击锚点时，清除计时器
        dots[i].classList.add('active')
        dots[lastIdx].classList.remove('active')
        activeIdx = i // 索引改为当前点击的元素
        timer = setInterval(() => {
          triggleSwiper()
        }, 3000)
      }
    })
  }
}

