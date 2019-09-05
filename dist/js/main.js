// Меню бургер
const menuBtn = document.querySelector('.menu-btn'); // Кнопка меню
const headerNav = document.querySelector('.header-nav'); // Блок с меню
const headerMenu = document.querySelector('.header-menu'); // Меню
const menuItems = document.querySelectorAll('.header-menu__item'); // Пункты меню
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
  menuItems.forEach(item => item.classList.add('show'));
  window.addEventListener('scroll', noScroll);
  showMenu = true;
}

function closeMenu() {
  menuBtn.classList.remove('close');
  headerNav.classList.remove('show');
  headerMenu.classList.remove('show');
  lightBox.classList.remove('show');
  menuItems.forEach(item => item.classList.remove('show'));
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


// Табы на странице новости
const tablinks = document.querySelectorAll('.articles-tabs__item'); // Вкладки
const tabcontent = document.querySelectorAll('.articles-content__item'); // Содержимое

function switchTab(e, id) {

  // let evTar = e.target;
  // let curTar = e.currentTarget;
  let clickedTab = e.target.attributes['id'].value;
  let activeTabContent = document.querySelector('.articles-content__item.' + clickedTab);

  // Скрытие всех данных
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Удаление активных классов
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" articles-tabs__item_active", "");
  }

  // console.log(evTar, curTar);

  activeTabContent.style.display = "block";
  e.currentTarget.className += " articles-tabs__item_active";
}

// const tablinks = document.querySelector('.articles-tabs');
for (let i = 0; i < tablinks.length; i++) {
  tablinks[i].addEventListener('click', switchTab);
}

// Слайдеры (Slick.js)
$(document).ready(function () {

  // Слайдер на главной странице
  $('.home-slider').slick({
    infinite: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1199,
      settings: {
        arrows: false
      }
    }]
  });

  // Слайдер на странице участка
  $('.product-slider').slick({
    infinite: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }]
  });

  // Слайдер отзывов
  $('.testimonials__slider').slick({
    dots: true,
    infinite: false,
    // centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [{
        breakpoint: 992,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '135px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          // centerPadding: '100px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
  });
});