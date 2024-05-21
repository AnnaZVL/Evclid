/*Бургер*/
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');

burger.addEventListener('click',
function() {
  burger.classList.toggle('header__burger--active');
  menu.classList.toggle('header__menu--active');
})

/*Поиск*/
let lyp = document.querySelector('.header__nav-list-item-search');
let pole = document.querySelector('.header__search-icon');
let exit = document.querySelector('.exit');

lyp.addEventListener('click', function(){
  pole.classList.toggle('header__search-icon-active');
});

exit.addEventListener('click', function(){
  pole.classList.toggle('header__search-icon-active');
});

/*Свайпер*/
const swiper = new Swiper('.swiper-container', {
  // Цикличность

  loop: true,

  // pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/*Tab*/

document.querySelectorAll('.working__link').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.working__link').forEach(function(btn){
      btn.classList.remove('working__link--active')})
  e.currentTarget.classList.add('working__link--active');

  document.querySelectorAll('.workin__tab').forEach(function(tabsBtn){
    tabsBtn.classList.remove('workin__tab--active')});

  document.querySelector(`[data-target="${path}"]`).classList.add('workin__tab--active');

  });

});

/*Аккордион*/
new Accordion('.accordion-container');

