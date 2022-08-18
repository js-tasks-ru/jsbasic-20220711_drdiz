import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  #container = '';

  constructor() {
    this.#container = this.render();
  }

  #html() {
    return `
  <!--Корневой элемент Modal-->
  <div class="modal">
    <!--Прозрачная подложка перекрывающая интерфейс-->
    <div class="modal__overlay"></div>
    <div class="modal__inner">
      <div class="modal__header">
        <!--Кнопка закрытия модального окна-->
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>
        <h3 class="modal__title"></h3>
      </div>
      <div class="modal__body"></div>
    </div>
  </div>  
  `
  }

  render() {
    let modal = createElement(this.#html());

    // Событие зарытия на кнопку
    const removeModalButton = modal.querySelector('.modal__close');
    removeModalButton.addEventListener('click', this.#closeModal);

    // Событие зарытия на клавишу ESC
    document.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
        this.close();
      }
    }, { once: true });

    return modal;
  }

  // титульник в тело модалки
  setTitle(title) {
    let modalTitle = this.#container.querySelector('.modal__title');
    modalTitle.append(title);
    return modalTitle;
  }

  // помещения тела в модалку с удалением старого тела
  setBody(body) {
    let modalBody = this.#container.querySelector('.modal__body');
    if (!!modalBody.firstChild) {
      modalBody.removeChild(modalBody.childNodes[0]);
      modalBody.append(body);
      return modalBody;
    }
    modalBody.append(body);
    return modalBody;
  }

  // открытие окна
  open() {
    let body = document.querySelector('body');
    body.classList.add('is-modal-open');
    document.body.append(this.#container);
  }

  close() {
    const body = document.querySelector('body');
    body.classList.remove('is-modal-open');
    body.removeChild(body.lastChild);
  }

  #closeModal = () => {
    this.close();
    once: true;
  }
}