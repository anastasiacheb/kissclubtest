AOS.init();

let navOpenBtn = document.querySelector('.js_nav_open_btn');
let navCloseBtn = document.querySelector('.js_nav_close_btn');
let navMobMenu = document.querySelector('.js_nav_mob_menu');
let navOverlay = document.querySelector('.js_nav_overlay');
let navLinks = document.querySelectorAll('.js_nav_link');

// if (window.innerWidth <= 1024) {
navOpenBtn.addEventListener('click', () => {
  // navMobMenu.style.transform = 'translateX(-100%)';
  navMobMenu.classList.add('translate-x-0');
  navMobMenu.classList.remove('translate-x-full');
  navMobMenu.classList.add('max-w-0');
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
  navOverlay.style.scale = '1';
  navOverlay.style.opacity = '0.5';
});

navCloseBtn.addEventListener('click', () => {
  // navMobMenu.style.transform = 'translateX(0)';
  navMobMenu.classList.remove('translate-x-0');
  navMobMenu.classList.add('translate-x-full');
  navMobMenu.classList.remove('max-w-0');
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
  navOverlay.style.opacity = '0';
  setTimeout(() => {
    navOverlay.style.scale = '0';
  }, 200);
});

navOverlay.addEventListener('click', () => {
  // navMobMenu.style.transform = 'translateX(0)';
  navMobMenu.classList.remove('translate-x-0');
  navMobMenu.classList.add('translate-x-full');
  navMobMenu.classList.remove('max-w-0');
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
  navOverlay.style.opacity = '0';
  setTimeout(() => {
    navOverlay.style.scale = '0';
  }, 200);
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', () => {
    // navMobMenu.style.transform = 'translateX(0)';
    navMobMenu.classList.remove('translate-x-0');
    navMobMenu.classList.add('translate-x-full');
    navMobMenu.classList.remove('max-w-0');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    navOverlay.style.opacity = '0';
    setTimeout(() => {
      navOverlay.style.scale = '0';
    }, 200);
  });
}
// }

let navAcBtn = document.querySelectorAll('.js_navac_button');
let navAcContent = document.querySelectorAll('.js_navac_content');
let navAcIcon = document.querySelectorAll('.js_navac_icon');
let nav = document.querySelector('.js_nav');

let accordionListenersInitialized = false;

function handleNavAccordionClick() {
  if (window.innerWidth <= 1024) {
    if (!accordionListenersInitialized) {
      for (let i = 0; i < navAcBtn.length; i++) {
        navAcBtn[i].addEventListener('click', () => {
          if (navAcContent[i].style.maxHeight) {
            navAcContent[i].style.maxHeight = null;
            navAcIcon[i].style.transform = 'rotate(0deg)';
          } else {
            navAcContent[i].style.maxHeight = navAcContent[i].scrollHeight + 'px';
            navAcIcon[i].style.transform = 'rotate(180deg)';
          }
        });
      }
      accordionListenersInitialized = true;
    }
  } else {
    for (let i = 0; i < navAcContent.length; i++) {
      navAcContent[i].style.maxHeight = null;
      navAcIcon[i].style.transform = 'rotate(0deg)';
    }
  }
}

handleNavAccordionClick();
window.addEventListener('resize', handleNavAccordionClick);

function handleNavAccordionHover() {
  nav.removeEventListener('mouseover', openNavAccordion);
  nav.removeEventListener('mouseleave', closeNavAccordion);

  if (window.innerWidth > 1024) {
    nav.addEventListener('mouseover', openNavAccordion);
    nav.addEventListener('mouseleave', closeNavAccordion);
  } else {
    closeNavAccordion();
  }
}

function openNavAccordion() {
  navAcContent.forEach((content) => {
    content.style.maxHeight = content.scrollHeight + 'px';
  });
}

function closeNavAccordion() {
  navAcContent.forEach((content) => {
    content.style.maxHeight = null;
  });
}

handleNavAccordionHover();

window.addEventListener('resize', handleNavAccordionHover);
