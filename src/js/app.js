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

// TOOGLE LANGUAGE
$(document).ready(function () {
   $('.language-header__item').on('click', function () {
      $(this).toggleClass('is-active');
      //$(this).next().toggle();

      $(this).closest('.language-header').find('.language-header__list').toggle();
   });


   // CLOSE COVID INFO
   $('.header__close').on('click', function () {
      $('.header__infobox').toggle();
   });
});

//// CLOSE COVID INFO
//var block = document.querySelector('.header__infobox');
//var button = document.querySelector('.header__close');
//button.onclick = function () {
//   if (block.style.display === 'none') {
//      block.style.display = 'block';
//   } else {
//      block.style.display = 'none';
//   };
//   return;
//};
