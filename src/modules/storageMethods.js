import Task from './taskConstructor.js';

export default class Methods {

  static setIndex() {
    const storage = localStorage.getItem('tasks');
    const tasks = storage ? JSON.parse(storage) : [];
    if (tasks !== []) {
      tasks.forEach((element, index) => { element.id = index; });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    return tasks;
  }

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
            <li id="Task ${tasks.length}" class="list-item">
              <input id="checkBox ${tasks.length}" type="checkbox" name="completed" class="check">
              <label for="check${tasks.length}">Task ${tasks.length}</label>
              <input value="${description}" type="text" name="description" class="description" disabled>
              <p class="vertical-menu show">
              &#8942
              </p>
              <div class="delete-btn hide"><button class="delete-btn" type='button'>Delete</button><button type='button' class="delete-btn">Save</button></div>
            </li>
          `;
    return tasks;
  }

  static remove(id) {
    const storage = localStorage.getItem('tasks');
    const tasks = storage ? JSON.parse(storage) : [];
    if (tasks === []) return -1;
    const removed = tasks.splice(id, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    Methods.setIndex();    
    Methods.render();
    return removed;
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
          <li id="${element.id+1}" class="list-item" draggable="${element.editable}">
            <input id="check${element.id+1}" type="checkbox" name="completed" class="check" ${checked}>
            <label for="check${element.id+1}">Task ${element.id+1}</label>
            <input value="${element.description}" type="text" name="description" class="description" ${editableDisable}>
            <p class="vertical-menu show">
            &#8942;
            </p>
            <div class="delete-btn hide"><button class="delete-btn" type='button'>Delete</button><button type='button' class="delete-btn">Save</button></div>           
          </li>
        `;
      });
    }
  }
}