import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
// import Swiper and modules styles

// init Swiper:

const swiper = new Swiper('.swiper', {
   // Optional parameters

   loop: true,
   slidesPerView: 4.5,
   spaceBetween: 50,
   centeredSlides: true,
   loop: true,


   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },


   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   // And if we need scrollbar
   scrollbar: {
      el: '.swiper-scrollbar',
   },
   slideToClickedSlide: true
});


$(document).ready(function () {
   $('.language-header__item').on('click', function () {
      $(this).find('.language-header__list').toggle();
   });
});

