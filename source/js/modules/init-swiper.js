const Swiper = window.Swiper;



let tabOff = () => {
  let slides = document.querySelectorAll('.swiper-slide')
  for (let i = 0; i < slides.length; i++) {
    if (!slides[i].classList.contains('swiper-slide-duplicate')) {
      slides[i].tabIndex = 0;
    } else {
      slides[i].tabIndex = -1;
    }
  }
}

(() =>{
  new Swiper('.swiper--coaches', {
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
  })
  
  tabOff();
  }
)();

(() =>
  new Swiper('.swiper--feedback', {// eslint-disable-line
    direction: 'horizontal',

    navigation: {
      nextEl: '.feedback__button--next',
      prevEl: '.feedback__button--prev',
    },

    slidesPerView: 1,
  })
)();
