let button = document.getElementById("burger");
let closeBtn = document.querySelector('.homepage-top');
let closeBtn2 = document.querySelector('.home__sales__section');
let closeBtn3 = document.querySelector('.catalog-page');

button.onclick = function () {
  let body = document.getElementById("body");
  let menu = document.getElementById("m-menu-main");
  body.classList.toggle('mm-wrapper_opened'),
    body.classList.toggle('mm-wrapper-wrapper_blocking'),
    body.classList.toggle('mm-wrapper_background'),
    body.classList.toggle('mm-wrapper_opening');
  menu.classList.toggle('mm-menu_opened');
};

closeBtn.onclick = function () {
  let body = document.getElementById("body");
  let menu = document.getElementById("m-menu-main");
  body.classList.remove('mm-wrapper_opened'),
    body.classList.remove('mm-wrapper-wrapper_blocking'),
    body.classList.remove('mm-wrapper_background'),
    body.classList.remove('mm-wrapper_opening');
  menu.classList.remove('mm-menu_opened');
};

closeBtn2.onclick = function () {
  let body = document.getElementById("body");
  let menu = document.getElementById("m-menu-main");
  body.classList.remove('mm-wrapper_opened'),
    body.classList.remove('mm-wrapper-wrapper_blocking'),
    body.classList.remove('mm-wrapper_background'),
    body.classList.remove('mm-wrapper_opening');
  menu.classList.remove('mm-menu_opened');
};

closeBtn3.onclick = function () {
  let body = document.getElementById("body");
  let menu = document.getElementById("m-menu-main");
  body.classList.remove('mm-wrapper_opened'),
    body.classList.remove('mm-wrapper-wrapper_blocking'),
    body.classList.remove('mm-wrapper_background'),
    body.classList.remove('mm-wrapper_opening');
  menu.classList.remove('mm-menu_opened');
};