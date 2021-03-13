let button = document.getElementById("burger");
let closeBtn = document.querySelector('.homepage-top');
let closeBtn2 = document.querySelector('.home__sales__section');
let closeBtn3 = document.querySelector('.catalog-page');
let closeBtn4 = document.querySelector(".mfp-close");

button.onclick = function () {
  let body = document.getElementById("body");
  let menu = document.getElementById("m-menu-main");
  body.classList.toggle('mm-wrapper_opened'),
    body.classList.toggle('mm-wrapper-wrapper_blocking'),
    body.classList.toggle('mm-wrapper_background'),
    body.classList.toggle('mm-wrapper_opening');
  menu.classList.toggle('mm-menu_opened');
  body.createElement
};

closeBtn4.onclick = function () {
  first.classList.add('display-none');
  second.classList.add('display-none');
  third.classList.add('display-none');
  body.classList.remove('no-scroll');
};
