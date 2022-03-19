const navMenu = document.getElementById('nav-menu'),
      navClose = document.getElementById('nav-close'),
      navOpen = document.getElementById('nav-open')
navClose && navClose.addEventListener('click', () => {
  navMenu && navMenu.classList.remove('menu__active')
})
navOpen && navOpen.addEventListener('click', () => {
  navMenu && navMenu.classList.add('menu__active')
})
const str = 'We are learning FE! Go!999'
// 小练习 获取str的最后一位
str[str.length - 1]
str.slice(-1)
// 小练习2 截取str的后三位
str.slice(-3)
// 小练习3 查询Go!的索引
str.indexOf('Go!')
// 发现：str上 Boss Ding的索引
str.indexOf('Boss Ding') // -1