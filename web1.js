const tasksList = document.querySelector('#tasks ul');
const eventsList = document.querySelector('#events ul');
const addTaskButton = document.querySelector('#add-task');
const addEventButton = document.querySelector('#add-event');
function createTask(taskName) {
  const taskItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const taskText = document.createElement('span');
  taskText.classList.add('task-text');
  taskText.textContent = taskName;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskText);
  taskItem.appendChild(deleteButton);
  checkbox.addEventListener('change', () => {
    taskText.classList.toggle('completed');
  });
  deleteButton.addEventListener('click', () => {
    tasksList.removeChild(taskItem);
  });
  return taskItem;
}
addTaskButton.addEventListener('click', () => {
  const taskName = prompt("Enter task name:");
  const taskItem = createTask(taskName);
  tasksList.appendChild(taskItem);
});
addEventButton.addEventListener('click', () => {
});
