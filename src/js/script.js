import "../pages/index.css";

const arraySlides = [
  {
    title: 'Взыскание дебиторской задолженности',
    subtitle: 'Индивидуальный подход и нацеленность на достижение результата',
    link: 'https://goo.su/2VhS'
  },

  {
    title: 'Регистрация ООО',
    subtitle: 'Гарантируем минимальные сроки регистрации под ключ',
    link: 'https://clck.ru/Rq5P9'
  },

  {
    title: 'Ликвидация предприятия',
    subtitle: 'Эффективное решение сложных задач',
    link: 'https://goo.su/2vHU'
  },

  {
    title: 'Юридическая консультация',
    subtitle: 'Детальные разъяснения вопросов по ведению бизнеса от профессионалов',
    link: 'https://goo.su/2vHv'
  },

  {
    title: 'Юридический аутсорсинг',
    subtitle: 'Гарантия своевременности и качества услуг',
    link: 'https://goo.su/2vhW'
  },
];

const arraySlideActivity = ['https://goo.su/2vUn', 'https://goo.su/2VUP', 'https://goo.su/2Vur', 'https://goo.su/2Vus', 'https://goo.su/2vuu'];

const buttonLeft = document.getElementById('slider-left');
const buttonRight = document.getElementById('slider-right');

const buttonLeftActivity = document.getElementById('activity__arrow-left');
const buttonRightActivity = document.getElementById('activity__arrow-right');

let slide = 0;
let slideActivity = 0;

function changeText(elemOne, elemTwo) {
  elemOne.textContent = elemTwo;
}

function renderSlide(elemOne, elemTwo) {
  elemOne.style.backgroundImage = elemTwo;
}

buttonRight.addEventListener('click', function () {
  if (slide >= (arraySlides.length - 1)) {
    slide = 0;
  }
  else { slide += 1 }

  changeText(document.querySelector('.slider__title'), arraySlides[slide].title);
  changeText(document.querySelector('.slider__subtitle'), arraySlides[slide].subtitle);
  renderSlide(document.querySelector('.root__slider'), `url('${arraySlides[slide].link}')`);
});

buttonLeft.addEventListener('click', function () {
  if (slide == 0) {
    slide = arraySlides.length - 1;
  }
  else { slide -= 1 }

  changeText(document.querySelector('.slider__title'), arraySlides[slide].title);
  changeText(document.querySelector('.slider__subtitle'), arraySlides[slide].subtitle);
  renderSlide(document.querySelector('.root__slider'), `url('${arraySlides[slide].link}')`);
});


/* SlideActivity */
buttonRightActivity.addEventListener('click', function () {
  if (slideActivity >= (arraySlideActivity.length - 1)) {
    slideActivity = 0;
  }
  else { slideActivity += 1 }

  renderSlide(document.querySelector('.activity__slider'), `url('${arraySlideActivity[slideActivity]}')`);
});

buttonLeftActivity.addEventListener('click', function () {
  if (slideActivity == 0) {
    slideActivity = arraySlides.length - 1;
  }
  else { slideActivity -= 1 }

  renderSlide(document.querySelector('.activity__slider'), `url('${arraySlideActivity[slideActivity]}')`);
});