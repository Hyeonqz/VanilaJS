const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");
const toDos = [];

const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)); // webBrowser 로컬 스토리지에 저장하는 것
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handlerToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    console.log(toDoInput.value);
    toDoInput.value = "";
    toDos.push(newTodo);

    paintTodo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit",handlerToDoSubmit);

function sayHello(item) {
    console.log("this is the turn of : ",item);
}

const savedTodos = localStorage.getItem(TODOS_KEY);
console.log(savedTodos)
// Null 처리
if(savedTodos !== null) {
    const parsedToDos = JSON.parse(savedTodos);
    console.log(parsedToDos);
    parsedToDos.forEach(sayHello);
}



































