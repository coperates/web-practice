const todoFrom = document.querySelector("#todo-from");
const todoInput = document.querySelector("#todo-from input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveToDos();
}

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function paintToDo(newtodo){
    const li = document.createElement("li");
    li.id = newtodo.id;
    const span = document.createElement("span");
    span.innerText = newtodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button); 
    todoList.appendChild(li);
}
 

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

todoFrom.addEventListener("submit", handleToDoSubmit);

const savedToDo = localStorage.getItem(TODOS_KEY);

if(savedToDo !== null){
    const parsedToDo = JSON.parse(savedToDo);
    toDos = parsedToDo;
    parsedToDo.forEach(paintToDo);
}