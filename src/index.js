
document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.querySelector("#tasks");
  const createNewTask = event => {
    event.preventDefault();
    const newTask = document.createElement("li")
    newTask.innerText = document.getElementById("new-task-description").value
    taskList.appendChild(newTask);
    event.target.reset();

    
  }
  document.querySelector("#create-task-form").addEventListener("submit", createNewTask);
})