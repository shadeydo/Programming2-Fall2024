let tasks = ["carve sculpture", "play fortnite", "c"];

function showTasks() {
    let taskListUl = document.getElementById("task-list");
    taskListUl.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");
        li.innerText = tasks[i];
        taskListUl.appendChild(li);
    }
}

function add() {
    let task = prompt("Enter your task: ");
    tasks.push(task);
    showTasks();
}

function remove() {
    let task = prompt("Enter your task to remove: ");
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i] == task) {
            tasks.splice(i, 1);
        }
    }
    showTasks();
}

function reset() {
    tasks = [];
    showTasks();
}

function priority() {
    let task = prompt("Enter your task to prioritize: ");
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i] == task) {
            tasks[i].style.backgroundColor = "yellow";
        }
    }
    showTasks();
}
