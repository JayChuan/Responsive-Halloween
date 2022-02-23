const navMenu = document.getElementById('nav-menu'),
      navClose = document.getElementById('nav-close'),
      navOpen = document.getElementById('nav-open')

navClose && navClose.addEventListener('click', () => {
  navMenu && navMenu.classList.remove('menu__active')
})
navOpen && navOpen.addEventListener('click', () => {
  navMenu && navMenu.classList.add('menu__active')
})