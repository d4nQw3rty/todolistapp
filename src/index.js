import './style.css';

const list = document.getElementById('list');
const taskList = [
  {
    id: 1,
    description: 'Task 1',
    completed: false,
  },
  {
    id: 2,
    description: 'Task 2',
    completed: false,
  },
  {
    id: 3,
    description: 'Task 3',
    completed: false,
  },
];

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