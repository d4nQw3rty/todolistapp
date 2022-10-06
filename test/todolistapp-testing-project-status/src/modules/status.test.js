/** * @jest-environment jsdom */

import Methods from './storageMethods.js';
import Status from './status.js';

window.localStorage = Storage.prototype;
document.body.innerHTML = '<ol id="list"></ol>';

describe('update task input', () => {
  test('add a task return the new task', () => {
    Methods.add('I have to be change');
    expect(Methods.edit('Do not delete me', 0)).toBe('Do not delete me');
  });

  test('Edit a task should replace the task in the local storage', () => {
    Methods.edit('Do not delete me', 0);
    const storage = localStorage.getItem('tasks');
    const localTask = storage ? JSON.parse(storage) : [];
    expect(localTask[0].description).toBe('Do not delete me');
  });
});

describe('Update to complete status', () => {
  test('add a new task should return a new task', () => {
    Methods.add('I have to be change');
    expect(Methods.edit('Do not delete me', 0)).toBe('Do not delete me');
  });
  test('Checking the checkbox have to change the task completed to true', () => {
    Status.Complete(0);
    const storage = localStorage.getItem('tasks');
    const localTask = storage ? JSON.parse(storage) : [];
    expect(localTask[0]).toBeTruthy();
  });
});
describe('Clear all Completed', () => {
  Methods.add('Deleteme');
  Methods.add('Delete me too');
  Methods.add('Delete me eather');

  test('check the local task length', () => {
    const storage = localStorage.getItem('tasks');
    const localTask = storage ? JSON.parse(storage) : [];
    expect(localTask).toHaveLength(5);
  });

  Status.Complete(0);
  Status.Complete(1);
  Status.Complete(2);
  test('Clicking "Clear all completed" button should filter local storage tasks', () => {
    Status.ClearCompleted();
    const storage = localStorage.getItem('tasks');
    const localTask = storage ? JSON.parse(storage) : [];
    expect(localTask).toHaveLength(3);
  });
});
