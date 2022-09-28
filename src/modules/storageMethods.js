import Task from './taskConstructor.js';

export default class Methods {



  static add(description) {

    if (!description) return -1;
    const storage = localStorage.getItem('tasks');
    const tasks = storage ? JSON.parse(storage) : [];
    const task = new Task(description, tasks.length);
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    const list = document.querySelector('#list');
    list.innerHTML
      += `
            <li id="Task${tasks.length}" class="list-item">
              <input id="checkBox${tasks.length}" type="checkbox" name="completed" class="check">
              <label for="check${tasks.length}">${tasks.length}</label>
              <input value="${description}" type="text" name="description" class="description" disabled>
              <div class="edit-menu">
              &#8942
              </div class="vertical-menu">
            </li>
          `;
    return tasks;
  }

  static render() {
    const storage = localStorage.getItem('tasks');
    const tasks = storage ? JSON.parse(storage) : [];
    const list = document.querySelector('#list');
    list.innerHTML = '';
    if (tasks !== []) {
      tasks.forEach((element) => {
        const checked = element.completed ? 'checked' : '';
        const editableActive = element.editable ? 'active' : '';
        const editableDisable = element.editable ? '' : 'disabled';
        list.innerHTML
        += `
          <li id="e${element.id+1}" class="list-item" draggable="${element.editable}">
            <input id="check${element.id+1}" type="checkbox" name="completed" class="check" ${checked}>
            <label for="check${element.id+1}">${element.id+1}</label>
            <input value="${element.description}" type="text" name="description" class="description" ${editableDisable}>
            <div class="vertical-menu">
            &#8942;
            </div>
          </li>
        `;
      });
    }
  }
}