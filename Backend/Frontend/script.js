const task_input = document.getElementById("task_input");
const add_btn = document.getElementById("add_btn");
const task_list = document.getElementById("task_list");

add_btn.addEventListener("click", function () {

    const task = task_input.value;

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const list_item = document.createElement("li");

    const comp_btn = document.createElement("button");
    comp_btn.className = "comp_btn";

    const task_text = document.createElement("span");
    task_text.className = "task_text";
    task_text.textContent = task;

    const dlt_btn = document.createElement("button");
    dlt_btn.className = "delete_btn";
    dlt_btn.textContent = "Delete";

    comp_btn.addEventListener("click", function () {
        if (comp_btn.textContent === "✓") {
            comp_btn.textContent = "";
        } else {
            comp_btn.textContent = "✓";
        }

        comp_btn.classList.toggle("marked");
        task_text.classList.toggle("task_marked");
    });

    dlt_btn.addEventListener("click", function () {
        task_list.removeChild(list_item);
    });

    list_item.appendChild(comp_btn);
    list_item.appendChild(task_text);
    list_item.appendChild(dlt_btn);

    task_list.appendChild(list_item);

    task_input.value = "";
});