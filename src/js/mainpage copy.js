import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

// init Swiper:
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
  breakpoints: {
    768: {
      loop: false,
      slidesPerView: 2,
      grid: {
        rows: 3,
        fill: 'row',
      },
    },
    1024: {
      slidesPerView: 3,
      loop: false,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
  },
});

let swiper2;

function initSwiper() {
  const screenWidth = window.innerWidth;

  if (screenWidth > 768) {
    swiper2 = new Swiper('.swiper2', {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 40,
      grid: {
        rows: 1,
        fill: 'row',
      },
      navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
          grid: {
            rows: 1,
            fill: 'row',
          },
        },
      },
    });
  } else {
    if (swiper2) {
      swiper2.destroy();
      swiper2 = null;
    }
  }
}

initSwiper();
window.addEventListener('resize', initSwiper);

let sliderBtn = document.querySelector('.js_slider_btn');
let sliderItems = document.querySelectorAll('.js_slider_item');

sliderBtn.addEventListener('click', () => {
  sliderItems.forEach((item) => {
    item.classList.remove('!hidden');
    item.classList.add('!flex');
    sliderBtn.classList.add('hidden');
    sliderBtn.classList.remove('flex');
  });
});

let scrollText = document.querySelectorAll('.js_scroll_text');
let scrollImage = document.querySelectorAll('.js_scroll_image');

window.addEventListener('scroll', () => {
  for (let i = 0; i < scrollImage.length; i++) {
    const imageTop = scrollImage[i].getBoundingClientRect().top;
    if (imageTop < 200) {
      scrollText[i].classList.add('lg:grid');
      scrollText[i].classList.remove('lg:hidden');
    } else {
      if (i !== 0) {
        scrollText[i].classList.remove('lg:grid');
        scrollText[i].classList.add('lg:hidden');
      }
    }
  }
});

const swiper3 = new Swiper('.swiper3', {
  loop: true,
  slidesPerView: 1.15,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 30,
      grid: {
        rows: 1,
        fill: 'row',
      },
    },
  },
});
