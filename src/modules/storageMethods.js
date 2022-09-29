import Task from './taskConstructor.js';

export default class Methods {
  static setIndex() {
    const storage = localStorage.getItem('tasks');
    const tasks = storage ? JSON.parse(storage) : [];
    if (tasks !== []) {
      tasks.forEach((element, index) => { element.index = index + 1; });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    return tasks;
  }

  static add(description) {
    if (!description) return -1;
    const storage = localStorage.getItem('tasks');
    const tasks = storage ? JSON.parse(storage) : [];
    const task = new Task(description, tasks.length + 1);
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    const list = document.querySelector('#list');
    list.innerHTML
      += `
            <li id="Task ${tasks.length + 1}" class="list-item">
              <input id="checkBox ${tasks.length + 1}" type="checkbox" name="completed" class="check">
              <label for="check${tasks.length + 1}">Task ${tasks.length + 1}</label>
              <input value="${description}" type="text" name="description" class="description" disabled>
              <p class="vertical-menu show">
              &#8942
              </p>
              <div class="delete-btn hide">
              <button class="delete-btn" type='button'>Delete</button>
              <button type='button' class="delete-btn">Save</button>
              </div>
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

  static edit(newVal, id) {
    const storage = localStorage.getItem('tasks');
    const tasks = storage ? JSON.parse(storage) : [];
    if (tasks === []) return -1;
    tasks[id].description = newVal;
    localStorage.setItem('tasks', JSON.stringify(tasks));

    return newVal;
  }

  static render() {
    const storage = localStorage.getItem('tasks');
    const tasks = storage ? JSON.parse(storage) : [];
    const list = document.querySelector('#list');
    list.innerHTML = '';
    if (tasks !== []) {
      tasks.forEach((element) => {
        const checked = element.completed ? 'checked' : '';
        list.innerHTML
        += `
          <li id="${element.index}" class="list-item">
            <input id="check${element.index}" type="checkbox" name="completed" class="check" ${checked}>
            <label for="check${element.index}">Task ${element.index}</label>
            <input value="${element.description}" type="text" name="description" class="description" disabled>
            <p class="vertical-menu show">
            &#8942;
            </p>
            <div class="delete-btn hide">
            <button class="delete-btn" type='button'>Delete</button>
            <button type='button' class="delete-btn">Save</button>
            </div>           
          </li>
        `;
      });
    }
  }
}