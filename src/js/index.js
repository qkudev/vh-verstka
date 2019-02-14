import $ from 'jquery'
import popper from 'popper.js'
import bootstrap from 'bootstrap'
import '../scss'
import slick from 'slick-carousel';

$(document).ready(function(){
  $('.slick-videos').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true
  })
});

window.$ = $
window.popper = popper