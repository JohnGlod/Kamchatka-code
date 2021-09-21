'use strict';

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

const firstSlider = document.querySelector('.first-slider');

if (iconMenu) {
  iconMenu.addEventListener('click', (e) => {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

let Main = new Swiper ( firstSlider, {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 35,
  centerSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    767: {
      slidesPerView: 3,
    },
  },
  autoHeight: true,
  grabCursor: true,
  navigation: {
    nextEl: '.first-slider-next',
    prevEl: '.first-slider-prev',
  },
});
