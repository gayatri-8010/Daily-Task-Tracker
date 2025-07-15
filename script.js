let taskList = document.getElementById('task-list');

function addTask() {
  let taskInput = document.getElementById('task');
  let taskText = taskInput.value.trim();

  if (taskText === '') {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement('li');
  li.textContent = taskText;

  // Complete task on click
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete button
  let delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.onclick = () => {
    taskList.removeChild(li);
  };

  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = '';
}
