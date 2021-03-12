let button = document.getElementById("burger");

button.onclick = function () {
  let body = document.getElementById("body");
  let menu = document.getElementById("m-menu-main");
  body.classList.toggle('mm-wrapper_opened'),
    body.classList.toggle('mm-wrapper-wrapper_blocking'),
    body.classList.toggle('mm-wrapper_background'),
    body.classList.toggle('mm-wrapper_opening');
  menu.classList.toggle('mm-menu_opened');
};