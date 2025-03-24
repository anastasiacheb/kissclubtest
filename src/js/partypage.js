import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

console.log(document.querySelector('.swiper1'));

const slides1 = document.querySelectorAll('.swiper1-slide');
const swiper = new Swiper('.swiper1', {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  effect: 'fade',
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
  pagination: {
    el: '.swiper-pagination1',
    clickable: true,

    renderBullet: function (index, className) {
      // Получаем слайд из slides1 через индекс
      const slide = slides1[index];
      const imgSrc = slide.dataset.src; // Извлекаем data-image для миниатюры

      return (
        '<div class="!border-transparent !flex-1 !opacity-100 !h-fit !rounded-sm !border !bg-transparent !m-0 ' +
        className +
        '">' +
        '<img src="' +
        imgSrc +
        '" alt="avatar" class="w-full rounded-sm aspect-[68/52] lg:aspect-[104/69] object-cover"> </div>'
      );
    },
  },
});

let accordion = document.querySelectorAll('.js_acc');
let accordionContent = document.querySelectorAll('.js_acc_content');
let accordionIcon = document.querySelectorAll('.js_acc_icon');
let accordionText = document.querySelector('.js_acc_text');
let accordionInner = document.querySelectorAll('.js_acc_inner');

for (let i = 0; i < accordion.length; i++) {
  if (i === 0) {
    accordionContent[i].style.maxHeight = accordionContent[i].scrollHeight + 'px';
    accordion[i].classList.remove('bg-secondary');
    accordion[i].classList.add('bg-accent');
    accordionIcon[i].classList.add('opacity-0');
  }
  accordion[i].addEventListener('click', () => {
    const isOpen = accordionContent[i].style.maxHeight;

    for (let j = 0; j < accordion.length; j++) {
      accordionContent[j].style.maxHeight = null;
      accordion[j].classList.add('bg-secondary');
      accordion[j].classList.remove('bg-accent');
      accordionIcon[j].classList.remove('opacity-0');
    }

    if (!isOpen) {
      accordionContent[i].style.maxHeight = accordionContent[i].scrollHeight + 'px';
      accordion[i].classList.remove('bg-secondary');
      accordion[i].classList.add('bg-accent');
      accordionIcon[i].classList.add('opacity-0');
    }

    accordionText.textContent = accordionInner[i].textContent;
  });
}

const swiper2 = new Swiper('.swiper2', {
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
});

let accordion2 = document.querySelectorAll('.js_acc2');
let accordionContent2 = document.querySelectorAll('.js_acc_content2');
let accordionIcon2 = document.querySelectorAll('.js_acc_icon2');

for (let i = 0; i < accordion2.length; i++) {
  accordion2[i].addEventListener('click', () => {
    const isOpen = accordionContent2[i].style.maxHeight;

    for (let j = 0; j < accordion2.length; j++) {
      accordionContent2[j].style.maxHeight = null;
      accordionIcon2[j].classList.remove('rotate-45');
    }

    if (!isOpen) {
      accordionContent2[i].style.maxHeight = accordionContent2[i].scrollHeight + 'px';
      accordionIcon2[i].classList.add('rotate-45');
    }
  });
}
