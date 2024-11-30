const todoInput = document.getElementById('todo-input');
const addTAskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("add todo list");


let tasks = []

addTAskButton.addEventListener('click', () => {

    const taskText = todoInput.value.trim()
    if(taskText === "") return;

    const neTask = {
        id:Date.now(),
        text:taskText,
        completed: false
    }

    addTAskButton.push(newTask);
    todoInput.Value = "";
    console.log(tasks);

})