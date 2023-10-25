// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

//scroll navbar
let lastScroll = 0;
const defaultOffset = 0;
const header = document.querySelector('.nav');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
  if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    //scroll down
    header.classList.add('hide');
  }
  else if (scrollPosition() < lastScroll && containHide()) {
    //scroll up
    header.classList.remove('hide');
  }

  lastScroll = scrollPosition();
})