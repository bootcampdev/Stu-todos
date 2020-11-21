var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderTodos();

function renderTodos() {    
    todoList.innerHTML = "";
    for (var i=0; i<todos.length; i++){

        var li = document.createElement("li");
        li.innerText = todos[i];

        todoList.appendChild(li);
    }
}

function addTodos(e) {
    e.preventDefault();

    if (!todoInput.value)
        return;

    todos.push(todoInput.value);
    todoInput.value = '';
    
    renderTodos()
}

todoForm.addEventListener("submit", addTodos)