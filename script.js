var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

//var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
// if there is nothing in storage then return an empty array
var todos = JSON.parse(localStorage.getItem("todos")) || []


renderTodos();

function renderTodos() {    
    todoList.innerHTML = "";
    for (var i=0; i<todos.length; i++){

        var li = document.createElement("li");

        li.innerText = todos[i];

        // add data-index attribute with the li number
        li.setAttribute("data-index", i)

        var button = document.createElement("button");
        button.innerText = "Complete";
                
        li.appendChild(button);

        todoList.appendChild(li);
    }

}

function addTodos(e) {
    e.preventDefault();

    if (!todoInput.value)
        return;

    todos.push(todoInput.value);
    todoInput.value = '';

    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos()
}

function removeTodo(e) {
    
    var target = e.target;
    if (e.target.matches("button"))
    {
        
        console.log(e.target);
        var button = e.target;

        var i = e.target.parentNode.getAttribute("data-index");
        var index = parseInt(target.parentNode.getAttribute("data-index"));
        todos.splice(index, 1);
        //todos
        renderTodos();
        localStorage.setItem("todos", JSON.stringify(todos));
    }
}

todoForm.addEventListener("submit", addTodos)
todoList.addEventListener("click", removeTodo);