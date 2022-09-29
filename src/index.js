import './style.css';
import Methods from './modules/storageMethods.js';
Methods.setIndex();
Methods.render();

const form = document.querySelector('#form');
const input = document.querySelector('#input');
const list = document.querySelector('#list');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let description = input.value;
  Methods.add(description);
  Methods.render();
  form.reset();
});

list.addEventListener('click', (e) => {

  if (e.target.classList.contains('vertical-menu')) {
    e.target.classList.remove('show');
    e.target.classList.add('hide');
    e.target.nextElementSibling.classList.remove('hide');
    e.target.nextElementSibling.classList.add('show');
    e.target.previousElementSibling.removeAttribute('disabled');    
    e.target.previousElementSibling.focus();
    ;
  }

  if (e.target.textContent === 'Delete') {
    e.target.parentElement.parentElement.remove();
    Methods.remove(e.target.parentElement.parentElement.id-1);
  }

  if (e.target.textContent === 'Save') {
    e.target.parentElement.classList.add('hide');
    e.target.parentElement.classList.remove('show');
    e.target.parentElement.previousElementSibling.classList.add('show');
    e.target.parentElement.previousElementSibling.classList.remove('hide');
    e.target.parentElement.previousElementSibling.previousElementSibling.setAttribute('disabled', 'disabled');
  }
});
