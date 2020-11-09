import "../pages/index.css";

const arraySlides = [
  {title:'Взыскание дебиторской задолженности',
  subtitle:'Индивидуальный подход и нацеленность на достижение результата',
  link:'https://goo.su/2VhS'},

  {title:'Регистрация ООО',
  subtitle:'Гарантируем минимальные сроки регистрации под ключ',
  link:'https://clck.ru/Rq5P9'},

  {title:'Ликвидация предприятия',
  subtitle:'Эффективное решение сложных задач',
  link:'https://goo.su/2vHU'},
  
  {title:'Юридическая консультация',
  subtitle:'Детальные разъяснения вопросов по ведению бизнеса от профессионалов',
  link:'https://goo.su/2vHv'},
  
  {title:'Юридический аутсорсинг',
  subtitle:'Гарантия своевременности и качества услуг',
  link:'https://goo.su/2vhW'},
]

const buttoтLeft = document.getElementById('slider-left');
const buttoтRight = document.getElementById('slider-right');
let slide = 0;

buttoтRight.addEventListener('click', function(){
  if (slide >= (arraySlides.length-1)) {
    slide = 0;
  }
  else {slide += 1}

  document.querySelector('.slider__title').textContent = arraySlides[slide].title;
  document.querySelector('.slider__subtitle').textContent = arraySlides[slide].subtitle;
  document.querySelector('.root__slider').style.backgroundImage = `url('${arraySlides[slide].link}')`;
});

buttoтLeft.addEventListener('click', function(){
  if (slide == 0) {
    slide = arraySlides.length-1;
  }
  else {slide -= 1}

  document.querySelector('.slider__title').textContent = arraySlides[slide].title;
  document.querySelector('.slider__subtitle').textContent = arraySlides[slide].subtitle;
  document.querySelector('.root__slider').style.backgroundImage = `url('${arraySlides[slide].link}')`;
});
