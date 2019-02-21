import $ from 'jquery'
import popper from 'popper.js'
import '../scss'
import './slicks'
import * as utils from './utils'

window.shout = utils.shout

window.$ = $
window.popper = popper

function toggleMenu () {
  let menu = document.getElementById('layout-menu')
  if (menu) {
    menu.style.display = 'block'
  }
}
