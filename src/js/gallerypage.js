let tabButton = document.querySelectorAll('.js-tab-button');
let tabContent = document.querySelectorAll('.js-tab-content');

for (let i = 0; i < tabButton.length; i++) {
  tabButton[i].addEventListener('click', () => {
    for (let j = 0; j < tabButton.length; j++) {
      tabButton[j].classList.remove('bg-primary', 'text-white');
    }
    for (let j = 0; j < tabContent.length; j++) {
      if (!tabContent[j].classList.contains('hidden')) {
        tabContent[j].classList.add('hidden');
      }
    }
    tabButton[i].classList.add('bg-primary', 'text-white');
    tabContent[i].classList.remove('hidden');
    tabContent[i].classList.add('grid');
  });
}
