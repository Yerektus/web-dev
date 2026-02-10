const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const taskText = todoInput.value.trim();
    if (taskText === '') return;
    
    addTask(taskText);
    todoInput.value = '';
});

function addTask(text) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    
    li.innerHTML = `
        <input type="checkbox" class="todo-checkbox">
        <span class="todo-text">${text}</span>
        <button class="delete-btn" aria-label="Delete task"></button>
    `;
    
    todoList.appendChild(li);
}

todoList.addEventListener('click', function(event) {
    const item = event.target.closest('.todo-item');

    if (event.target.classList.contains('todo-checkbox')) {
        item.classList.toggle('completed');
    }

    if (event.target.classList.contains('delete-btn')) {
        item.remove();
    }
});