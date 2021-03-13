let button = document.getElementById("burger");
let btn = document.getElementById("btn-submit-img");
let body = document.getElementById("body");
let closeBtn4 = document.querySelector(".mfp-close");
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");

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

btn.onclick = function () {
  first.classList.remove('display-none');
  second.classList.remove('display-none');
  third.classList.remove('display-none');
  body.classList.add('no-scroll');
};

second.addEventListener('click', event => {
  let window = document.querySelector(".consultation");

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first.classList.add('display-none');
  second.classList.add('display-none');
  third.classList.add('display-none');
  body.classList.remove('no-scroll');
});

closeBtn4.onclick = function () {
  first.classList.add('display-none');
  second.classList.add('display-none');
  third.classList.add('display-none');
  body.classList.remove('no-scroll');
};
