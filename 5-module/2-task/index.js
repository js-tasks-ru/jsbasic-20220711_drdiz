function toggleText() {
  let btn = document.querySelector('.toggle-text-button'), textDiv = document.querySelector('#text');
  btn.addEventListener('click', () => {(textDiv.getAttribute('hidden') == null) ? textDiv.setAttribute('hidden', '') : textDiv.removeAttribute('hidden', '')})
}
