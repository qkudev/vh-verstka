import $ from 'jquery'
import popper from 'popper.js'
import '../scss'
import './slicks'

window.$ = $
window.popper = popper

function toggleMenu () {
  let menu = document.getElementById('layout-menu')
  if (menu) {
    menu.style.display = 'block'
  }
}
