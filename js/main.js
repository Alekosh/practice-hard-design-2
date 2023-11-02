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
// =============================
// const fullHeight = document.body.scrollHeight;
// const innerHeight = window.innerHeight;
// const dashed = document.querySelector('.dashed');
// const scrollBar = document.querySelector('.releases__scroll');

// window.addEventListener('scroll', () => {
//   console.log(fullHeight);
//   console.log(innerHeight);

//   fillScrollBar()
// })

// function fillScrollBar() {
//   // if (fullHeight >= 6122) { //5666
//   dashed.style.height = (scrollY * 100 / (fullHeight - innerHeight)) + '%';
//   // dashed.style.height = (scrollY * 100 / (fullHeight / 50)) + '%';
//   // dashed.style.height = (scrollY * 100 / (fullHeight / 100) / innerHeight + '%');
//   // dashed.style.height = (scrollY * 100 / (fullHeight / 100)) + '%';
//   // dashed.style.height = (scrollY * 100 / (fullHeight + '%'));
//   // }
//   // dashed.style.height = (window.scrollY / 100 / (scrollBar * 1) + '%')
// }
// =====================
// const all = document.documentElement;

// let scrollHeight = Math.max(
//   document.body.scrollHeight, document.documentElement.scrollHeight,
//   document.body.offsetHeight, document.documentElement.offsetHeight,
//   document.body.clientHeight, document.documentElement.clientHeight
// );

// console.log(scrollHeight);

// const fullHeight = document.body.scrollHeight; // 6246 / 100 = 62,46
// const scrollBar = document.querySelector('.releases__scroll');
// const dashed = document.querySelector('.dashed');
// console.log(scrollBar.scrollHeight); // 580 / 100 = 5,8
// // const innerHeight = window.innerHeight;
// // const dashed = document.querySelector('.dashed');
// //5086
// window.addEventListener('scroll', () => {
//   fillScrollBar()
// })

// function fillScrollBar() {
//   dashed.style.height = ((fullHeight / 100) * (scrollBar / 100) + '%');
//   // dashed.style.height = (scrollY * 100 / (fullHeight - innerHeight)) + '%';
// }
// =====

const accordionBtns = document.querySelectorAll(".faq__head");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("active");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});