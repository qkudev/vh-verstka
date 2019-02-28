import 'popper.js/dist/popper.min'
import 'popper.js/dist/popper-utils.min'
import 'bootstrap/dist/js/bootstrap.min'

import '../scss'
import './slicks'
import './video'

window._v = '0.1.0'

window.toggleMenu = function () {
  const iconClose = 'icon-cancel'
  const iconMenu = 'icon-menu'

  const toggler = document.getElementById('menu-toggler')
  const sideBar = document.getElementById('side-bar')

  if (!(toggler && sideBar)) {
    throw new Error('Could not find toggler or side bar')
  }

  if (toggler.classList.contains(iconMenu)) {
    toggler.classList.remove(iconMenu)
    toggler.classList.add(iconClose)
  } else {
    toggler.classList.remove(iconClose)
    toggler.classList.add(iconMenu)
  }
}

function toggleMenu () {
  let menu = document.getElementById('layout-menu')
  if (menu) {
    menu.style.display = 'block'
  }
}

window.showNavLang = function showNavLang () {
  console.log('LEL')
};

(function f() {
  let d = document.getElementById('nav-language-button')
  let dropdown = document.getElementById('nav-language')

  if (d && dropdown) {
    const showLang = () => dropdown.classList.add('show')
    const hideLang = () => dropdown.classList.remove('show')

    d.addEventListener('mouseover', showLang)
    d.addEventListener('mouseleave', hideLang)

    dropdown.addEventListener('mouseover', () => {
      d.removeEventListener('mouseleave', hideLang)
    })

    dropdown.addEventListener('mouseleave', hideLang)
    // dropdown.addEventListener('mouseleave', () => {
    //   d.addEventListener('mouseleave', hideLang)
    // })
  }
}())
