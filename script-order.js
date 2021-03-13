let btn = document.getElementById("btn-submit-img");
let btn2 = document.getElementById("btn-submit-img2");
let btn3 = document.getElementById("btn-submit-img3");
let btn4 = document.getElementById("btn-submit-img4");
let btn5 = document.getElementById("btn-submit-img5");
let btn6 = document.getElementById("btn-submit-img6");
let btn7 = document.getElementById("btn-submit-img7");
let btn8 = document.getElementById("btn-submit-img8");
let btn9 = document.getElementById("btn-submit-img9");
let btn10 = document.getElementById("btn-submit-img10");
let btn11 = document.getElementById("btn-submit-img11");
let btn12 = document.getElementById("btn-submit-img12");
let btn13 = document.getElementById("btn-submit-img13");
let btn14 = document.getElementById("btn-submit-img14");
let btn15 = document.getElementById("btn-submit-img15");
let btn16 = document.getElementById("btn-submit-img16");
let btn17 = document.getElementById("btn-submit-img17");
let btn18 = document.getElementById("btn-submit-img18");
let btn19 = document.getElementById("btn-submit-img19");
let btn20 = document.getElementById("btn-submit-img20");
let btn21 = document.getElementById("btn-submit-img21");
let btn22 = document.getElementById("btn-submit-img22");
let btn23 = document.getElementById("btn-submit-img23");
let btn24 = document.getElementById("btn-submit-img24");
let btn25 = document.getElementById("btn-submit-img25");
let btn26 = document.getElementById("btn-submit-img26");
let btn27 = document.getElementById("btn-submit-img27");
let btn28 = document.getElementById("btn-submit-img28");

let body = document.getElementById("body");
let closeMfp = document.querySelector(".mfp-close");
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");

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

closeMfp.onclick = function () {
  first.classList.add('display-none');
  second.classList.add('display-none');
  third.classList.add('display-none');
  body.classList.remove('no-scroll');
};

let first2 = document.getElementById("first2");
let second2 = document.getElementById("second2");
let third2 = document.getElementById("third2");
let closeMfp2 = document.getElementById('close2');

btn2.onclick = function () {
  first2.classList.remove('display-none');
  second2.classList.remove('display-none');
  third2.classList.remove('display-none');
  body.classList.add('no-scroll');
};

second2.addEventListener('click', event => {
  let window = document.getElementById('sec2');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first2.classList.add('display-none');
  second2.classList.add('display-none');
  third2.classList.add('display-none');
  body.classList.remove('no-scroll');
});

closeMfp2.onclick = function () {
  first2.classList.add('display-none');
  second2.classList.add('display-none');
  third2.classList.add('display-none');
  body.classList.remove('no-scroll');
};

let first3 = document.getElementById("first3");
let second3 = document.getElementById("second3");
let third3 = document.getElementById("third3");
let closeMfp3 = document.getElementById('close3');

btn3.onclick = function () {
  first3.classList.remove('display-none');
  second3.classList.remove('display-none');
  third3.classList.remove('display-none');
  body.classList.add('no-scroll');
};

second3.addEventListener('click', event => {
  let window = document.getElementById('sec3');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first3.classList.add('display-none');
  second3.classList.add('display-none');
  third3.classList.add('display-none');
  body.classList.remove('no-scroll');
});

closeMfp3.onclick = function () {
  first3.classList.add('display-none');
  second3.classList.add('display-none');
  third3.classList.add('display-none');
  body.classList.remove('no-scroll');
};

let first4 = document.getElementById("first4");
let second4 = document.getElementById("second4");
let third4 = document.getElementById("third4");
let closeMfp4 = document.getElementById('close4');

second4.addEventListener('click', event => {
  let window = document.getElementById('sec4');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first4.classList.add('display-none');
  second4.classList.add('display-none');
  third4.classList.add('display-none');
  body.classList.remove('no-scroll');
});

btn4.onclick = function () {
  first4.classList.remove('display-none');
  second4.classList.remove('display-none');
  third4.classList.remove('display-none');
  body.classList.add('no-scroll');
};

closeMfp4.onclick = function () {
  first4.classList.add('display-none');
  second4.classList.add('display-none');
  third4.classList.add('display-none');
  body.classList.remove('no-scroll');
};

let first5 = document.getElementById("first5");
let second5 = document.getElementById("second5");
let third5 = document.getElementById("third5");
let closeMfp5 = document.getElementById('close5');

second5.addEventListener('click', event => {
  let window = document.getElementById('sec5');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first5.classList.add('display-none');
  second5.classList.add('display-none');
  third5.classList.add('display-none');
  body.classList.remove('no-scroll');
});

btn5.onclick = function () {
  first5.classList.remove('display-none');
  second5.classList.remove('display-none');
  third5.classList.remove('display-none');
  body.classList.add('no-scroll');
};

closeMfp5.onclick = function () {
  first5.classList.add('display-none');
  second5.classList.add('display-none');
  third5.classList.add('display-none');
  body.classList.remove('no-scroll');
};

let first6 = document.getElementById("first6");
let second6 = document.getElementById("second6");
let third6 = document.getElementById("third6");
let closeMfp6 = document.getElementById('close6');

second6.addEventListener('click', event => {
  let window = document.getElementById('sec6');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first6.classList.add('display-none');
  second6.classList.add('display-none');
  third6.classList.add('display-none');
  body.classList.remove('no-scroll');
});

btn6.onclick = function () {
  first6.classList.remove('display-none');
  second6.classList.remove('display-none');
  third6.classList.remove('display-none');
  body.classList.add('no-scroll');
};

closeMfp6.onclick = function () {
  first6.classList.add('display-none');
  second6.classList.add('display-none');
  third6.classList.add('display-none');
  body.classList.remove('no-scroll');
};



let first7 = document.getElementById("first7");
let second7 = document.getElementById("second7");
let third7 = document.getElementById("third7");
let closeMfp7 = document.getElementById('close7');

second7.addEventListener('click', event => {
  let window = document.getElementById('sec7');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first7.classList.add('display-none');
  second7.classList.add('display-none');
  third7.classList.add('display-none');
  body.classList.remove('no-scroll');
});

btn7.onclick = function () {
  first7.classList.remove('display-none');
  second7.classList.remove('display-none');
  third7.classList.remove('display-none');
  body.classList.add('no-scroll');
};

closeMfp7.onclick = function () {
  first7.classList.add('display-none');
  second7.classList.add('display-none');
  third7.classList.add('display-none');
  body.classList.remove('no-scroll');
};



let first8 = document.getElementById("first8");
let second8 = document.getElementById("second8");
let third8 = document.getElementById("third8");
let closeMfp8 = document.getElementById('close8');

second8.addEventListener('click', event => {
  let window = document.getElementById('sec8');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first8.classList.add('display-none');
  second8.classList.add('display-none');
  third8.classList.add('display-none');
  body.classList.remove('no-scroll');
});

btn8.onclick = function () {
  first8.classList.remove('display-none');
  second8.classList.remove('display-none');
  third8.classList.remove('display-none');
  body.classList.add('no-scroll');
};

closeMfp8.onclick = function () {
  first8.classList.add('display-none');
  second8.classList.add('display-none');
  third8.classList.add('display-none');
  body.classList.remove('no-scroll');
};



let first9 = document.getElementById("first9");
let second9 = document.getElementById("second9");
let third9 = document.getElementById("third9");
let closeMfp9 = document.getElementById('close9');

second9.addEventListener('click', event => {
  let window = document.getElementById('sec9');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first9.classList.add('display-none');
  second9.classList.add('display-none');
  third9.classList.add('display-none');
  body.classList.remove('no-scroll');
});

btn9.onclick = function () {
  first9.classList.remove('display-none');
  second9.classList.remove('display-none');
  third9.classList.remove('display-none');
  body.classList.add('no-scroll');
};

closeMfp9.onclick = function () {
  first9.classList.add('display-none');
  second9.classList.add('display-none');
  third9.classList.add('display-none');
  body.classList.remove('no-scroll');
};

let first10 = document.getElementById("first10");
let second10 = document.getElementById("second10");
let third10 = document.getElementById("third10");
let closeMfp10 = document.getElementById('close10');

second10.addEventListener('click', event => {
  let window = document.getElementById('sec10');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first10.classList.add('display-none');
  second10.classList.add('display-none');
  third10.classList.add('display-none');
  body.classList.remove('no-scroll');
});

btn10.onclick = function () {
  first10.classList.remove('display-none');
  second10.classList.remove('display-none');
  third10.classList.remove('display-none');
  body.classList.add('no-scroll');
};

closeMfp10.onclick = function () {
  first10.classList.add('display-none');
  second10.classList.add('display-none');
  third10.classList.add('display-none');
  body.classList.remove('no-scroll');
};

let first11 = document.getElementById("first11");
let second11 = document.getElementById("second11");
let third11 = document.getElementById("third11");
let closeMfp11 = document.getElementById('close11');

second11.addEventListener('click', event => {
  let window = document.getElementById('sec11');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first11.classList.add('display-none');
  second11.classList.add('display-none');
  third11.classList.add('display-none');
  body.classList.remove('no-scroll');
});

btn11.onclick = function () {
  first11.classList.remove('display-none');
  second11.classList.remove('display-none');
  third11.classList.remove('display-none');
  body.classList.add('no-scroll');
};

closeMfp11.onclick = function () {
  first11.classList.add('display-none');
  second11.classList.add('display-none');
  third11.classList.add('display-none');
  body.classList.remove('no-scroll');
};

let first12 = document.getElementById("first12");
let second12 = document.getElementById("second12");
let third12 = document.getElementById("third12");
let closeMfp12 = document.getElementById('close12');

second12.addEventListener('click', event => {
  let window = document.getElementById('sec12');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first12.classList.add('display-none');
  second12.classList.add('display-none');
  third12.classList.add('display-none');
  body.classList.remove('no-scroll');
});

btn12.onclick = function () {
  first12.classList.remove('display-none');
  second12.classList.remove('display-none');
  third12.classList.remove('display-none');
  body.classList.add('no-scroll');
};

closeMfp12.onclick = function () {
  first12.classList.add('display-none');
  second12.classList.add('display-none');
  third12.classList.add('display-none');
  body.classList.remove('no-scroll');
};

let first13 = document.getElementById("first13");
let second13 = document.getElementById("second13");
let third13 = document.getElementById("third13");
let closeMfp13 = document.getElementById('close13');

second13.addEventListener('click', event => {
  let window = document.getElementById('sec13');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first13.classList.add('display-none');
  second13.classList.add('display-none');
  third13.classList.add('display-none');
  body.classList.remove('no-scroll');
});

btn13.onclick = function () {
  first13.classList.remove('display-none');
  second13.classList.remove('display-none');
  third13.classList.remove('display-none');
  body.classList.add('no-scroll');
};

closeMfp13.onclick = function () {
  first13.classList.add('display-none');
  second13.classList.add('display-none');
  third13.classList.add('display-none');
  body.classList.remove('no-scroll');
};

let first14 = document.getElementById("first14");
let second14 = document.getElementById("second14");
let third14 = document.getElementById("third14");
let closeMfp14 = document.getElementById('close14');

second14.addEventListener('click', event => {
  let window = document.getElementById('sec14');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first14.classList.add('display-none');
  second14.classList.add('display-none');
  third14.classList.add('display-none');
  body.classList.remove('no-scroll');
});

btn14.onclick = function () {
  first14.classList.remove('display-none');
  second14.classList.remove('display-none');
  third14.classList.remove('display-none');
  body.classList.add('no-scroll');
};

closeMfp14.onclick = function () {
  first14.classList.add('display-none');
  second14.classList.add('display-none');
  third14.classList.add('display-none');
  body.classList.remove('no-scroll');
};

let first15 = document.getElementById("first15");
let second15 = document.getElementById("second15");
let third15 = document.getElementById("third15");
let closeMfp15 = document.getElementById('close15');

second15.addEventListener('click', event => {
  let window = document.getElementById('sec15');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first15.classList.add('display-none');
  second15.classList.add('display-none');
  third15.classList.add('display-none');
  body.classList.remove('no-scroll');
});

btn15.onclick = function () {
  first15.classList.remove('display-none');
  second15.classList.remove('display-none');
  third15.classList.remove('display-none');
  body.classList.add('no-scroll');
};

closeMfp15.onclick = function () {
  first15.classList.add('display-none');
  second15.classList.add('display-none');
  third15.classList.add('display-none');
  body.classList.remove('no-scroll');
};

let first16 = document.getElementById("first16");
let second16 = document.getElementById("second16");
let third16 = document.getElementById("third16");
let closeMfp16 = document.getElementById('close16');

second16.addEventListener('click', event => {
  let window = document.getElementById('sec16');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first16.classList.add('display-none');
  second16.classList.add('display-none');
  third16.classList.add('display-none');
  body.classList.remove('no-scroll');
});

btn16.onclick = function () {
  first16.classList.remove('display-none');
  second16.classList.remove('display-none');
  third16.classList.remove('display-none');
  body.classList.add('no-scroll');
};

closeMfp16.onclick = function () {
  first16.classList.add('display-none');
  second16.classList.add('display-none');
  third16.classList.add('display-none');
  body.classList.remove('no-scroll');
};

let first17 = document.getElementById("first17");
let second17 = document.getElementById("second17");
let third17 = document.getElementById("third17");
let closeMfp17 = document.getElementById('close17');

second17.addEventListener('click', event => {
  let window = document.getElementById('sec17');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first17.classList.add('display-none');
  second17.classList.add('display-none');
  third17.classList.add('display-none');
  body.classList.remove('no-scroll');
});

btn17.onclick = function () {
  first17.classList.remove('display-none');
  second17.classList.remove('display-none');
  third17.classList.remove('display-none');
  body.classList.add('no-scroll');
};

closeMfp17.onclick = function () {
  first17.classList.add('display-none');
  second17.classList.add('display-none');
  third17.classList.add('display-none');
  body.classList.remove('no-scroll');
};

let first18 = document.getElementById("first18");
let second18 = document.getElementById("second18");
let third18 = document.getElementById("third18");
let closeMfp18 = document.getElementById('close18');

second18.addEventListener('click', event => {
  let window = document.getElementById('sec18');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first18.classList.add('display-none');
  second18.classList.add('display-none');
  third18.classList.add('display-none');
  body.classList.remove('no-scroll');
});

btn18.onclick = function () {
  first18.classList.remove('display-none');
  second18.classList.remove('display-none');
  third18.classList.remove('display-none');
  body.classList.add('no-scroll');
};

closeMfp18.onclick = function () {
  first18.classList.add('display-none');
  second18.classList.add('display-none');
  third18.classList.add('display-none');
  body.classList.remove('no-scroll');
};

let first19 = document.getElementById("first19");
let second19 = document.getElementById("second19");
let third19 = document.getElementById("third19");
let closeMfp19 = document.getElementById('close19');

second19.addEventListener('click', event => {
  let window = document.getElementById('sec19');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first19.classList.add('display-none');
  second19.classList.add('display-none');
  third19.classList.add('display-none');
  body.classList.remove('no-scroll');
});

btn19.onclick = function () {
  first19.classList.remove('display-none');
  second19.classList.remove('display-none');
  third19.classList.remove('display-none');
  body.classList.add('no-scroll');
};

closeMfp19.onclick = function () {
  first19.classList.add('display-none');
  second19.classList.add('display-none');
  third19.classList.add('display-none');
  body.classList.remove('no-scroll');
};

let first20 = document.getElementById("first20");
let second20 = document.getElementById("second20");
let third20 = document.getElementById("third20");
let closeMfp20 = document.getElementById('close20');

second20.addEventListener('click', event => {
  let window = document.getElementById('sec20');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first20.classList.add('display-none');
  second20.classList.add('display-none');
  third20.classList.add('display-none');
  body.classList.remove('no-scroll');
});

btn20.onclick = function () {
  first20.classList.remove('display-none');
  second20.classList.remove('display-none');
  third20.classList.remove('display-none');
  body.classList.add('no-scroll');
};

closeMfp20.onclick = function () {
  first20.classList.add('display-none');
  second20.classList.add('display-none');
  third20.classList.add('display-none');
  body.classList.remove('no-scroll');
};

let first21 = document.getElementById("first21");
let second21 = document.getElementById("second21");
let third21 = document.getElementById("third21");
let closeMfp21 = document.getElementById('close21');

second21.addEventListener('click', event => {
  let window = document.getElementById('sec21');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first21.classList.add('display-none');
  second21.classList.add('display-none');
  third21.classList.add('display-none');
  body.classList.remove('no-scroll');
});

btn21.onclick = function () {
  first21.classList.remove('display-none');
  second21.classList.remove('display-none');
  third21.classList.remove('display-none');
  body.classList.add('no-scroll');
};

closeMfp21.onclick = function () {
  first21.classList.add('display-none');
  second21.classList.add('display-none');
  third21.classList.add('display-none');
  body.classList.remove('no-scroll');
};

let first22 = document.getElementById("first22");
let second22 = document.getElementById("second22");
let third22 = document.getElementById("third22");
let closeMfp22 = document.getElementById('close22');

second22.addEventListener('click', event => {
  let window = document.getElementById('sec22');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first22.classList.add('display-none');
  second22.classList.add('display-none');
  third22.classList.add('display-none');
  body.classList.remove('no-scroll');
});

btn22.onclick = function () {
  first22.classList.remove('display-none');
  second22.classList.remove('display-none');
  third22.classList.remove('display-none');
  body.classList.add('no-scroll');
};

closeMfp22.onclick = function () {
  first22.classList.add('display-none');
  second22.classList.add('display-none');
  third22.classList.add('display-none');
  body.classList.remove('no-scroll');
};

let first23 = document.getElementById("first23");
let second23 = document.getElementById("second23");
let third23 = document.getElementById("third23");
let closeMfp23 = document.getElementById('close23');

second23.addEventListener('click', event => {
  let window = document.getElementById('sec23');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first23.classList.add('display-none');
  second23.classList.add('display-none');
  third23.classList.add('display-none');
  body.classList.remove('no-scroll');
});

btn23.onclick = function () {
  first23.classList.remove('display-none');
  second23.classList.remove('display-none');
  third23.classList.remove('display-none');
  body.classList.add('no-scroll');
};

closeMfp23.onclick = function () {
  first23.classList.add('display-none');
  second23.classList.add('display-none');
  third23.classList.add('display-none');
  body.classList.remove('no-scroll');
};

let first24 = document.getElementById("first24");
let second24 = document.getElementById("second24");
let third24 = document.getElementById("third24");
let closeMfp24 = document.getElementById('close24');

second24.addEventListener('click', event => {
  let window = document.getElementById('sec24');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first24.classList.add('display-none');
  second24.classList.add('display-none');
  third24.classList.add('display-none');
  body.classList.remove('no-scroll');
});

btn24.onclick = function () {
  first24.classList.remove('display-none');
  second24.classList.remove('display-none');
  third24.classList.remove('display-none');
  body.classList.add('no-scroll');
};

closeMfp24.onclick = function () {
  first24.classList.add('display-none');
  second24.classList.add('display-none');
  third24.classList.add('display-none');
  body.classList.remove('no-scroll');
};

let first25 = document.getElementById("first25");
let second25 = document.getElementById("second25");
let third25 = document.getElementById("third25");
let closeMfp25 = document.getElementById('close25');

second25.addEventListener('click', event => {
  let window = document.getElementById('sec25');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first25.classList.add('display-none');
  second25.classList.add('display-none');
  third25.classList.add('display-none');
  body.classList.remove('no-scroll');
});

btn25.onclick = function () {
  first25.classList.remove('display-none');
  second25.classList.remove('display-none');
  third25.classList.remove('display-none');
  body.classList.add('no-scroll');
};

closeMfp25.onclick = function () {
  first25.classList.add('display-none');
  second25.classList.add('display-none');
  third25.classList.add('display-none');
  body.classList.remove('no-scroll');
};

let first26 = document.getElementById("first26");
let second26 = document.getElementById("second26");
let third26 = document.getElementById("third26");
let closeMfp26 = document.getElementById('close26');

second26.addEventListener('click', event => {
  let window = document.getElementById('sec26');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first26.classList.add('display-none');
  second26.classList.add('display-none');
  third26.classList.add('display-none');
  body.classList.remove('no-scroll');
});

btn26.onclick = function () {
  first26.classList.remove('display-none');
  second26.classList.remove('display-none');
  third26.classList.remove('display-none');
  body.classList.add('no-scroll');
};

closeMfp26.onclick = function () {
  first26.classList.add('display-none');
  second26.classList.add('display-none');
  third26.classList.add('display-none');
  body.classList.remove('no-scroll');
};

let first27 = document.getElementById("first27");
let second27 = document.getElementById("second27");
let third27 = document.getElementById("third27");
let closeMfp27 = document.getElementById('close27');

second27.addEventListener('click', event => {
  let window = document.getElementById('sec27');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first27.classList.add('display-none');
  second27.classList.add('display-none');
  third27.classList.add('display-none');
  body.classList.remove('no-scroll');
});

btn27.onclick = function () {
  first27.classList.remove('display-none');
  second27.classList.remove('display-none');
  third27.classList.remove('display-none');
  body.classList.add('no-scroll');
};

closeMfp27.onclick = function () {
  first27.classList.add('display-none');
  second27.classList.add('display-none');
  third27.classList.add('display-none');
  body.classList.remove('no-scroll');
};

let first28 = document.getElementById("first28");
let second28 = document.getElementById("second28");
let third28 = document.getElementById("third28");
let closeMfp28 = document.getElementById('close28');

second28.addEventListener('click', event => {
  let window = document.getElementById('sec28');

  window.addEventListener('click', event => {
    event.stopPropagation();
  })

  first28.classList.add('display-none');
  second28.classList.add('display-none');
  third28.classList.add('display-none');
  body.classList.remove('no-scroll');
});

btn28.onclick = function () {
  first28.classList.remove('display-none');
  second28.classList.remove('display-none');
  third28.classList.remove('display-none');
  body.classList.add('no-scroll');
};

closeMfp28.onclick = function () {
  first28.classList.add('display-none');
  second28.classList.add('display-none');
  third28.classList.add('display-none');
  body.classList.remove('no-scroll');
};