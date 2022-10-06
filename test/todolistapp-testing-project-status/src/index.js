import './style.css';
import Methods from './modules/storageMethods.js';
import Status from './modules/status.js';

Methods.setIndex();
Methods.render();

const form = document.querySelector('#form');
const input = document.querySelector('#input');
const list = document.querySelector('#list');
const clear = document.querySelector('#clear');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = input.value;
  Methods.add(description);
  Methods.render();
  form.reset();
});

list.addEventListener('change', (e) => {
  if (e.target.classList.contains('check')) {
    const id = e.target.parentElement.id - 1;
    Status.Complete(id);
    Methods.render();
  }
});

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('vertical-menu')) {
    e.target.classList.remove('show');
    e.target.classList.add('hide');
    e.target.nextElementSibling.classList.remove('hide');
    e.target.nextElementSibling.classList.add('show');
    e.target.previousElementSibling.removeAttribute('disabled');
    e.target.previousElementSibling.focus();
  }

  if (e.target.textContent === 'Delete') {
    e.target.parentElement.parentElement.remove();
    Methods.remove(e.target.parentElement.parentElement.id - 1);
  }

  if (e.target.textContent === 'Save') {
    e.target.parentElement.classList.add('hide');
    e.target.parentElement.classList.remove('show');
    e.target.parentElement.previousElementSibling.classList.add('show');
    e.target.parentElement.previousElementSibling.classList.remove('hide');
    e.target.parentElement.previousElementSibling.previousElementSibling.setAttribute('disabled', 'disabled');
    Methods.edit(e.target.parentElement.previousElementSibling.previousElementSibling.value,
      e.target.parentElement.parentElement.id - 1);
  }
});

clear.addEventListener('click', () => {
  Status.ClearCompleted();
  Methods.render();
});
