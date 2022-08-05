function initCarousel() {
  let rightArrow = document.querySelector('.carousel__arrow_right');
  let leftArrow = document.querySelector('.carousel__arrow_left');
  let slide = document.querySelector('.carousel__inner');
  let step = 0;
  let slideWdth = slide.offsetWidth;
  let carouselRightArrow = document.querySelector('.carousel__arrow_right');
  let carouselLeftArrow = document.querySelector('.carousel__arrow_left');

  carouselLeftArrow.style.display = 'none';
  leftArrow.addEventListener('click', () => Sliderunner(1));
  rightArrow.addEventListener('click', () => Sliderunner(-1));

  function Sliderunner (direction) {    
    step += slideWdth * direction;
    slide.style.transform = `translateX(${step}px)`;
    (step == -3 * slideWdth) ? carouselRightArrow.style.display = 'none' : carouselRightArrow.style.display = '';
    (step == 0) ? carouselLeftArrow.style.display = 'none' : carouselLeftArrow.style.display = '';
  }
}