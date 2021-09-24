const firstSlider = document.querySelector('.first-slider'),
  teamSlider = document.querySelector('.team-slider');

const First = new Swiper(firstSlider, {
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

const Team = new Swiper(teamSlider, {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 35,
  centerSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    }
  },
  autoHeight: true,
  grabCursor: true,
  navigation: {
    nextEl: '.team-slider-next',
    prevEl: '.team-slider-prev',
  },
});
