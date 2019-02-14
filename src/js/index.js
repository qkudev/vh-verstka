import $ from 'jquery'
import popper from 'popper.js'
import bootstrap from 'bootstrap'
import '../scss'
import slick from 'slick-carousel';

$(document).ready(function(){
  $('.slick-videos').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  })
});

window.$ = $
window.popper = popper