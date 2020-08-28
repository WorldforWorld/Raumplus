/* Открытие всплывающего меню по конпке */
$('.hero-hamburger').on('click', function () {
  $(this).toggleClass('hero-hamburger_active')
  $('.hero-menu').toggleClass('hero-menu_active')
});

/* Вертикальный слайдер в шапке */
var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/* Стилизация inputfile */
var inputs = $('.cost-inputfile, .economy-inputfile');
Array.prototype.forEach.call(inputs, function (input) {

  var label = input.nextElementSibling;
  var labelVal = label.innerHTML;

  input.addEventListener('change', function (e) {

    var fileName = '';

    if (this.files && this.files.length > 1)
      fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
    else
      fileName = e.target.value.split('\\').pop();

    if (fileName)
      label.querySelector('span').innerHTML = fileName;
    else
      label.innerHTML = labelVal;

  });
});

/* Слайдер наши проекты */

$('.project-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: '30px',
  responsive: [{
    breakpoint: 1281,
    settings: {
      arrows: false,
      slidesToShow: 2
    }
  },
  {
    breakpoint: 890,
    settings: {
      arrows: false,
      slidesToShow: 1
    }
  }
  ]
});

/* Добавление тени центральной картинке в секции project */
var slick = $('.slick-active');
slick.eq(1).toggleClass('center');
$('.center img.project-image').toggleClass('shadow');

$('.slick-prev, .slick-next').on('click', function () {
  $('.project-card').removeClass('center');
  $('.project-image').removeClass('shadow');
  window.setTimeout(timer, 400);
});

function timer() {
  $('.slick-track .slick-active').eq(1).toggleClass('center');
  $('.center img.project-image').toggleClass('shadow');
}

/* Модальное окно */
var modal = $('.modal'),
  message = $('.message'),
  modalBtn = $('.popup'),
  closelBtn = $('.modal-close'),
  closelMessageBtn = $('.message-close'),
  modalHidden = $('.modal-dialog');
modalHiddenMessage = $('.message-dialog');

modalBtn.on('click', function () {
  modal.toggleClass('modal--visible');
});
closelBtn.on('click', function () {
  modal.toggleClass('modal--visible');
});
closelMessageBtn.on('click', function () {
  message.toggleClass('message--visible');
});

jQuery(function ($) {
  modal.mouseup(function (e) { // событие клика по веб-документу
    if (!modalHidden.is(e.target) && modalHidden.has(e.target).length === 0) { //если клик был не по нашему блоку и не по его дочерним элементам
      modal.toggleClass('modal--visible');// скрываем его
    }
  });
  message.mouseup(function (e) { // событие клика по веб-документу
    if (!modalHiddenMessage.is(e.target) && modalHiddenMessage.has(e.target).length === 0) { //если клик был не по нашему блоку и не по его дочерним элементам
      message.toggleClass('message--visible');// скрываем его
    }
  });
});
/* *************************************************** */
// Валидация формы
$('.modal-form').validate({
  errorClass: "invalid",
  rules: {
    // строчное правило
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhone: "required",
    // правило-объект (блок)
    userEmail: {
      required: true,
      email: true
    },
    policyCheckboxs: {
      required: true
    }
  }, // сообщения
  errorElement: "div",
  messages: {
    userName: {
      required: "Заполните поле",
      minlength: "Имя не короче двух букв",
      maxlength: "Слишком длинное имя"
    },
    userPhone: "Заполните поле",
    userEmail: {
      required: "Заполните поле",
      email: "Введите корректный email"
    },
    policyCheckboxs: {
      required: "Подтвердите соглашение"
    }
  },

  errorPlacement: function (error, element) {
    if (element.attr("type") == "checkbox") {
      return element.next('label').append(error);
    }

    error.insertAfter($(element));
  },
  submitHandler: function (form) {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function (response) {
        message.toggleClass('message--visible');
        $(form)[0].reset();
        modal.removeClass('modal--visible');
      },
      error: function (response) {
        console.error('Ошибка запроса ' + response);
      }
    });
  }
});
/* ************************************************ */
$('.cost-form').validate({
  errorClass: "invalid",
  rules: {
    // строчное правило
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhone: "required",
    // правило-объект (блок)
    userEmail: {
      required: true,
      email: true
    },
    policyCheckboxs: {
      required: true
    }
  }, // сообщения
  errorElement: "div",
  messages: {
    userName: {
      required: "Заполните поле",
      minlength: "Имя не короче двух букв",
      maxlength: "Слишком длинное имя"
    },
    userPhone: "Заполните поле",
    userEmail: {
      required: "Заполните поле",
      email: "Введите корректный email"
    },
    policyCheckboxs: {
      required: "Подтвердите соглашение"
    }
  },

  errorPlacement: function (error, element) {
    if (element.attr("type") == "checkbox") {
      return element.next('label').append(error);
    }

    error.insertAfter($(element));
  },
  submitHandler: function (form) {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function (response) {
        message.toggleClass('message--visible');
        $(form)[0].reset();
      },
      error: function (response) {
        console.error('Ошибка запроса ' + response);
      }
    });
  }
});
/* ************************************************ */
$('.economy-form').validate({
  errorClass: "invalid",
  rules: {
    // строчное правило
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhone: "required",
    // правило-объект (блок)
    userEmail: {
      required: true,
      email: true
    },
    policyCheckboxs: {
      required: true
    }
  }, // сообщения
  errorElement: "div",
  messages: {
    userName: {
      required: "Заполните поле",
      minlength: "Имя не короче двух букв",
      maxlength: "Слишком длинное имя"
    },
    userPhone: "Заполните поле",
    userEmail: {
      required: "Заполните поле",
      email: "Введите корректный email"
    },
    policyCheckboxs: {
      required: "Подтвердите соглашение"
    }
  },

  errorPlacement: function (error, element) {
    if (element.attr("type") == "checkbox") {
      return element.next('label').append(error);
    }

    error.insertAfter($(element));
  },
  submitHandler: function (form) {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function (response) {
        message.toggleClass('message--visible');
        $(form)[0].reset();
      },
      error: function (response) {
        console.error('Ошибка запроса ' + response);
      }
    });
  }
});

/* Плавный скролл  */
var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
  V = 0.2;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
    e.preventDefault(); //отменяем стандартное поведение
    var w = window.pageYOffset,  // производим прокрутка прокрутка
      hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
    t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
      start = null;
    requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
        r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
      window.scrollTo(0, r);
      if (r != w + t) {
        requestAnimationFrame(step)
      } else {
        location.hash = hash  // URL с хэшем
      }
    }
  }, false);
}