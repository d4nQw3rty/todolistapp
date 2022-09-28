import './style.css';
import Methods from './modules/storageMethods.js';
import { reset } from 'axe-core';

Methods.render();

const form = document.querySelector('#form');
const input = document.querySelector('#input');
const list = document.querySelector('#list');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let description = input.value;
  Methods.add(description); 
  form.reset(); 
});
