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

let Main = new Swiper( firstSlider, 
  {
  autoplay: {
      delay: 3000,
  },
	centeredSlides: false,
	loop: false, 
	autoHeight: false,
	slidesPerView: 'auto',
	grabCursor: true,
	spaceBetween: 35,
	navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  progressMultipler : 1,
});
