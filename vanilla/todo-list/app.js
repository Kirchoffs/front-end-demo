const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')

document.addEventListener('DOMContentLoaded', getLocalTodos)
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo);

function addOneTodo(content) {
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  const newTodo = document.createElement('li');
  newTodo.innerText = content;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  completedButton.classList.add('completed-btn');
  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);
}

function addTodo(event) {
  event.preventDefault();
  addOneTodo(todoInput.value);
  saveLocalTodos(todoInput.value);
  todoInput.value = '';
}

function deleteCheck(event) {
  const item = event.target;

  if (item.classList.contains('trash-btn')) {
    const todo = item.parentElement;
    todo.classList.add('fall');
    removeLocalTodos(todo);
    todo.addEventListener('transitionend', function () {
      todo.remove();
    });
  }

  if (item.classList.contains('completed-btn')) {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

function filterTodo(event) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (event.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'uncompleted':
        if (!todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
    }
  });
}

function saveLocalTodos(todo) {
  let todos;

  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function removeLocalTodos(todo) {
  let todos;

  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  console.log(todo.children);
  const todoContent = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoContent), 1);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getLocalTodos() {
  let todos;

  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.forEach(function (todo) {
    addOneTodo(todo);
  });
}
