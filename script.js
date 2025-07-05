document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('task-form');
    const input = document.getElementById('task-input');
    const list = document.getElementById('task-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const taskText = input.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            input.value = '';
        }
    });

    function addTask(text) {
        const li = document.createElement('li');
        li.className = 'task-item';

        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = text;
        span.addEventListener('click', function() {
            span.classList.toggle('completed');
        });

        const btn = document.createElement('button');
        btn.className = 'delete-btn';
        btn.textContent = 'Eliminar';
        btn.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(span);
        li.appendChild(btn);
        list.appendChild(li);
    }
});
