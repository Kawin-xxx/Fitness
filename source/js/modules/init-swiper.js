(() => {
  new Swiper('.swiper--coaches', { // eslint-disable-line
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.coaches__button--next',
      prevEl: '.coaches__button--prev',
    },
    maxBackfaceHiddenSlides: 0,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
      // when window width is >= 1200px
      1280: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  });
})();

(() => {
  new Swiper('.swiper--feedback', { // eslint-disable-line
    direction: 'horizontal',

    navigation: {
      nextEl: '.feedback__button--next',
      prevEl: '.feedback__button--prev',
    },

    slidesPerView: 1,
  });
})();
