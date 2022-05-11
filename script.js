
const todo_list = document.getElementById("todo-list");
const todo_input = document.querySelector("#todo-form [name='todo'");

document.getElementById("todo-form").onsubmit = event => {
    event.preventDefault();
    const todo = todo_input.value;

    if (!todo) {
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = todo;
    li.classList = "card shadow";
    todo_list.appendChild(li);

    todo_input.value = "";
};

