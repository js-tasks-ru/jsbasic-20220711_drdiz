import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  #elem = '';

  constructor(categories) {
    this.categories = categories;
    this.#elem = this.render();
  }

  #html() {
    return `<!--Корневой элемент RibbonMenu-->
    <div class="ribbon">
      <!--Кнопка прокрутки влево-->
      <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
        <!--Ссылки на категории-->
      <nav class="ribbon__inner">
   ${this.categories.map((item) =>
      `<a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>`)
        .join('')}
      </nav>
    <!--Кнопка прокрутки вправо-->
    <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
  </div>
</div>`

  }
  render() {
    let menu_carusel = createElement(this.#html());

    // поведение меню-карусели
    let rightArrow = menu_carusel.querySelector('.ribbon__arrow_right');
    let leftArrow = menu_carusel.querySelector('.ribbon__arrow_left');
    let ribbonInner = menu_carusel.querySelector('.ribbon__inner');

    leftArrow.addEventListener('click', () => menuRunner(-350));
    rightArrow.addEventListener('click', () => menuRunner(350));

    let scrollLeft, clientWidth, scrollWidth, scrollRight;

    function menuRunner(valueoffset) {
      ribbonInner.scrollBy(valueoffset, 0);
      scrollLeft = ribbonInner.scrollLeft;
      clientWidth = ribbonInner.clientWidth;
      scrollWidth = ribbonInner.scrollWidth;
      scrollRight = scrollWidth - scrollLeft - clientWidth;
      (scrollLeft === 0) ? leftArrow.classList.remove('ribbon__arrow_visible') : leftArrow.classList.add('ribbon__arrow_visible');
      (scrollRight === 0) ? rightArrow.classList.remove('ribbon__arrow_visible') : rightArrow.classList.add('ribbon__arrow_visible');
    }

    const addCarouselElem = Array.from(menu_carusel.querySelectorAll('.ribbon__item'));
    addCarouselElem.forEach((btn) => { btn.addEventListener('click', this.#onMenuElemClick) });

    return menu_carusel;
  }

  // обработчик события клик
  #onMenuElemClick = (event) => {
    event.preventDefault();
    let target = event.target;

    const addCarouselElemEvent = new CustomEvent('ribbon-select',
      {
        detail: target.getAttribute('data-id'),
        bubbles: true
      });
    this.#elem.dispatchEvent(addCarouselElemEvent);
  };

  get elem() {
    return this.#elem;
  }
}