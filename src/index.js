import './style.css';



taskList.forEach((task) => {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  const label = document.createElement('label');
  const br = document.createElement('br');

  checkbox.type = 'checkbox';
  checkbox.id = task.id;
  checkbox.name = task.id;
  label.htmlFor = task.id;
  label.innerHTML = task.description;

  li.classList.add('list-item');
  list.appendChild(li);
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(br);
});