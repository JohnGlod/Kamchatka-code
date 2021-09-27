const firstSlider = document.querySelector('.first-slider'),
  arrivalSlider = document.querySelector('.arrival-slider'),
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
      slidesPerView: 1.3,
    },
    450: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    }
  },
  autoHeight: true,
  grabCursor: true,
  navigation: {
    nextEl: '.first-slider-next',
    prevEl: '.first-slider-prev',
  },
});

const Arrival = new Swiper( arrivalSlider, {
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
    nextEl: '.arrival-slider-next',
    prevEl: '.arrival-slider-prev',
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
