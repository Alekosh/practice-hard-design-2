const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true, // true - круговой слайдер, false - слайдер с конечными положениями
  // speed: 500,
  // effect: 'slider', // cards, coverflow, flip, fade, cube
  // initialSlide: 1, // Начинаем со 2 слайдера
  // freeMode: true, // Можно перетаскивать как ленту
  slidesPerView: 1.5, // кол-во активных слайдов 1 || 2 || 3 || 1.5
  // centeredSlider: true, // центрирование слайдер
  spaceBetween: 30, // расстояние между слайдами
  // slidesPerGroup: 3, // кол-во пролистываемых слайдов

  // пагинация в виде точек
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true, // true - пагинация становится кликабельной
  // },

  // кнопки вперед и назад
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

  // Автовоспроизведение
  // autoplay: {
  //   delay: 1000,
  // },

  // адаптив
  // breakpoints: {
  //   1251: { //проблемы с кнопкой next
  //     spaceBetween: 20,
  //     slidesPerView: 3,
  //   },

  //   951: {
  //     spaceBetween: 20,
  //     slidesPerView: 2,
  //   },

  //   0: {
  //     spaceBetween: 0,
  //     slidesPerView: 1,
  //   },
  //   //============ нужно прописывать в медиа в css //============//
  //   // @media (max-width: 1250px) {
  //   //   .swiper, swiper-wrapper {
  //   //     max-width: 780px;
  //   //   }
  //   // }

  //   // @media (max-width: 950px) {
  //   //   .swiper, swiper-wrapper {
  //   //     max-width: 320px;
  //   //   }
  //   // }
  // },
});

const swiperPrev = document.querySelector('.swiperPrev');
const swiperNext = document.querySelector('.swiperNext');

swiperPrev.addEventListener('click', () => {
  swiper.slidePrev();
})
swiperNext.addEventListener('click', () => {
  swiper.slideNext();
})

// ================ filter catalog ================ //
const filterBox = document.querySelectorAll('.work__catalog--item');
const filterItems = document.querySelectorAll('.filter__item');

document.querySelector('.work__inner--filter').addEventListener('click', event => {
  if (event.target.tagName !== 'LI') return false;

  let filterClass = event.target.dataset['filter'];

  filterBox.forEach(elem => {
    elem.classList.remove('hide');
    if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
      elem.classList.add('hide');
    }
  });

  filterItems.forEach(item => {
    item.classList.remove('filter__item--active');
    if (!event.target.classList.contains(filterClass)) {
      event.target.classList.add('filter__item--active');
    }
  })
});

// =============

const swiperAuthor = new Swiper('.swiperAuthor', {
  // Optional parameters
  direction: 'horizontal',
  loop: true, // true - круговой слайдер, false - слайдер с конечными положениями
  // speed: 500,
  // effect: 'slider', // cards, coverflow, flip, fade, cube
  // initialSlide: 1, // Начинаем со 2 слайдера
  // freeMode: true, // Можно перетаскивать как ленту
  slidesPerView: 1, // кол-во активных слайдов 1 || 2 || 3 || 1.5
  // centeredSlider: true, // центрирование слайдер
  spaceBetween: 50, // расстояние между слайдами
  // slidesPerGroup: 3, // кол-во пролистываемых слайдов
  clickable: true,

  // пагинация в виде точек
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true, // true - пагинация становится кликабельной
  // },

  // кнопки вперед и назад
  navigation: {
    prevEl: document.querySelector('.swiperPrevAuthor'),
    nextEl: document.querySelector('.swiperNextAuthor'),
  },
});





