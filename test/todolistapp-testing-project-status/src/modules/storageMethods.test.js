/** * @jest-environment jsdom */

import Methods from './storageMethods.js';

window.localStorage = Storage.prototype;
document.body.innerHTML = '<ol id="list"></ol>';

describe('Add task feature', () => {
  test('correct adding feature', () => {
    let tasks = Methods.add('Task 1');
    expect(tasks).toHaveLength(1);
    tasks = Methods.add('Task 2');
    expect(tasks).toHaveLength(2);
  });

  test('Empty task description', () => {
    const tasks = Methods.add('');
    expect(tasks).toBe(-1);
  });

  test('Add <li> elements', () => {
    const htmlTasks = document.querySelectorAll('.list-item');
    expect(htmlTasks).toHaveLength(2);
  });
});

describe('Remove task feature', () => {
  test('correct removing feature', () => {
    let htmlTasks = document.querySelectorAll('.list-item');
    expect(htmlTasks).toHaveLength(2);
    Methods.remove(1);
    htmlTasks = document.querySelectorAll('.list-item');
    expect(htmlTasks).toHaveLength(1);
  });
});