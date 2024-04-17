const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
});

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const todoItem = document.createElement('li');
        todoItem.textContent = todoText;
        todoItem.addEventListener('click', () => {
            todoItem.classList.toggle('completed');
        });
        
        const checkboxLabel = document.createElement('label');
        checkboxLabel.classList.add('checkbox-label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');
        const checkIcon = document.createElement('i');
        checkIcon.classList.add('fas', 'fa-check', 'icon');
        checkboxLabel.appendChild(checkbox);
        checkboxLabel.appendChild(checkIcon);
        todoItem.appendChild(checkboxLabel);
        
        todoList.appendChild(todoItem);
        todoInput.value = '';
    }
}
