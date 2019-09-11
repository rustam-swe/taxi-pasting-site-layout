// Меню бургер
const menuBtn = document.querySelector('.menu-btn'); // Кнопка меню
const headerNav = document.querySelector('.nav'); // Блок с меню
const headerMenu = document.querySelector('.nav__menu'); // Меню
// const menuItems = document.querySelectorAll('.nav__item'); // Пункты меню
const lightBox = document.querySelector('.light-box'); // Лайтбокс (темный фон)

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
lightBox.addEventListener('click', closeMenu);

function toggleMenu() {
  if (!showMenu) {
    openMenu();
  } else {
    closeMenu();
  }
}

function openMenu() {
  menuBtn.classList.add('close');
  headerNav.classList.add('show');
  headerMenu.classList.add('show');
  lightBox.classList.add('show');
  // menuItems.forEach(item => item.classList.add('show'));
  window.addEventListener('scroll', noScroll);
  showMenu = true;
}

function closeMenu() {
  menuBtn.classList.remove('close');
  headerNav.classList.remove('show');
  headerMenu.classList.remove('show');
  lightBox.classList.remove('show');
  // menuItems.forEach(item => item.classList.remove('show'));
  window.removeEventListener('scroll', noScroll);
  showMenu = false;
}

// Остановить скролл когда открыт меню
function noScroll() {
  window.scroll(0, 0);
}

// Плавная прокрутка к контактной форме
const contactForm = document.querySelector('#contact-form');

document.querySelectorAll('.callback-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    contactForm.scrollIntoView({
      behavior: 'smooth'
    })
  })
});