import Methods from './storageMethods.js';

export default class Status {
  static Complete(id) {
    const storage = localStorage.getItem('tasks');
    const tasks = storage ? JSON.parse(storage) : [];
    if (tasks === []) return -1;
    tasks[id].completed = !tasks[id].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    Methods.render();
    return 'Completed';
  }

  static ClearCompleted() {
    const storage = localStorage.getItem('tasks');
    let tasks = storage ? JSON.parse(storage) : [];
    if (tasks === []) return -1;
    tasks = tasks.filter((element) => !element.completed);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    Methods.setIndex();
    Methods.render();
    return 'Cleared';
  }
}