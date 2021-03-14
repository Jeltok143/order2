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