window.onscroll = function showHeader() {
  let header = document.querySelector('.header');
  let height = document.querySelector('.banner__background');
  
  if (window.scrollY > (height.scrollHeight)) {
    header.classList.add('header_fixed');
  } else {
    header.classList.remove('header_fixed');
  }
}

// тут мы вешаем на кнопку МЕНЮ событие которое при клике на кнопку
// добавляет menu_mobile некий класс, в данном случае это active

// document.querySelector('.btnmenu').addEventListener('click', () => {
//   document.querySelector('.menu_mobile').classList.add('active');
//   document.querySelector('.close-menu').classList.add('close-menu-active');
// });
// // а тут мы вешаем на кнопку close-menu событие которое пр кликена кнопку
// // удаляет menu_mobile  класс  active

// document.querySelector('.close-menu').addEventListener('click', () => {
//   document.querySelector('.menu_mobile').classList.remove('active');
//   document.querySelector('.close-menu').classList.remove('close-menu-active')
// });