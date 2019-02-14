import $ from 'jquery'
import popper from 'popper.js'
import '../scss'
import slick from 'slick-carousel'

$(document).ready(function () {
  $('.slick-videos').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true
  })
})

$(document).ready(function () {
  $('.slick-channels').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true
  })
})

$(document).ready(function () {
  $('.slick-categories')
    .slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
    })
})

$(document).ready(function () {
  $('.slick-popular')
    .slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: true,
    })
})

window.$ = $
window.popper = popper