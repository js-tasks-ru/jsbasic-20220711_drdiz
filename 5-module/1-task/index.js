function hideSelf() {
  let buttonC = document.querySelector('.hide-self-button');
  buttonC.addEventListener('click', () => {buttonC.setAttribute('hidden', '')});
}
