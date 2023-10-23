const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Digite uma tarefa válida.");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="deleteTask(this)">Excluir</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = "";
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);
}