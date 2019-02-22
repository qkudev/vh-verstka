import slick from 'slick-carousel'
import $ from 'jquery'

window.$ = $

$(document).ready(function () {
  $('.slick-videos').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    variableWidth: true,
    prevArrow: '<button class="slick-prev slick-arrow slick-arrow-popular" aria-label="Previous" type="button"></button>',
    nextArrow: '<button class="slick-next slick-arrow slick-arrow-popular" aria-label="Next" type="button"></button>',
  })
})

$(document).ready(function () {
  $('.slick-channels').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    variableWidth: true
  })
})

$(document).ready(function () {
  $('.slick-categories')
    .slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
      prevArrow: '<button class="slick-prev slick-arrow slick-arrow-category" aria-label="Previous" type="button"></button>',
      nextArrow: '<button class="slick-next slick-arrow slick-arrow-category" aria-label="Next" type="button"></button>',
    })
})

$(document).ready(function () {
  $('.slick-categories-mobile')
    .slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
      prevArrow: '<button class="slick-prev slick-arrow slick-arrow-category" aria-label="Previous" type="button"></button>',
      nextArrow: '<button class="slick-next slick-arrow slick-arrow-category" aria-label="Next" type="button"></button>',
    })
})

$(document).ready(function () {
  $('.slick-popular')
    .slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
    })
})

$(document).ready(function () {
  $('.slicky-channels-gray')
    .slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      prevArrow: '<button class="slick-prev slick-arrow slick-arrow-channels-gray" aria-label="Previous" type="button"></button>',
      nextArrow: '<button class="slick-next slick-arrow slick-arrow-channels-gray" aria-label="Next" type="button"></button>',
    })
})

$(document).ready(function () {
  $('.slick-channel-playlists')
    .slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
      prevArrow: '<button class="slick-prev slick-arrow slick-arrow-playlists" aria-label="Previous" type="button"></button>',
      nextArrow: '<button class="slick-next slick-arrow slick-arrow-playlists" aria-label="Next" type="button"></button>',
    })
})

$(document).ready(function () {
  $('.slick-category-preview')
    .slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
    })
})
