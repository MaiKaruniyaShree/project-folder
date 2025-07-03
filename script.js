const addBtn = document.getElementById("add-btn");
const newTaskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
  const taskText = newTaskInput.value.trim();
  if (taskText === "") {
    newTaskInput.focus();
    return;
  }

  const li = document.createElement("li");
  li.className = "task";

  const span = document.createElement("span");
  span.textContent = taskText;

  const actions = document.createElement("div");
  actions.className = "actions";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Done";
  completeBtn.className = "complete-btn";
  completeBtn.title = "Mark as completed";
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
    completeBtn.textContent = li.classList.contains("completed") ? "Undo" : "Done";
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.title = "Delete task";
  deleteBtn.onclick = () => {
    li.style.transform = "translateX(100px)";
    li.style.opacity = "0";
    setTimeout(() => {
      taskList.removeChild(li);
    }, 300);
  };

  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  taskList.appendChild(li);
  newTaskInput.value = "";
  newTaskInput.focus();
});

newTaskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

window.addEventListener('load', () => {
  newTaskInput.focus();
});
