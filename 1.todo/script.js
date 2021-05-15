let todoItems = ["wake", "sleep"];

const todoInput = document.querySelector("#todoInput");
let removeButtons = document.querySelectorAll(".removeBtn");

//returns a list of todo
function createList() {
  let list = document.createElement("ol");
  todoItems.forEach((ele, idx) => {
    let node = document.createElement("li");
    let textContainer = document.createElement("span");
    let textNode = document.createTextNode(ele);
    let removeButton = document.createElement("i");
    removeButton.setAttribute("class", "removeBtn fa fa-trash");
    removeButton.setAttribute("idx", idx);
    removeButton.setAttribute("aria-hidden", "true");
    textContainer.appendChild(textNode);
    node.appendChild(textContainer);
    node.appendChild(removeButton);
    list.appendChild(node);
  });
  return list;
}

// To create and display the List
function renderTodoList() {
  const todoList = document.querySelector(".todoList");
  todoList.innerHTML = createList().innerHTML;
  removeTodo();
}

// To remove the element

function removeTodo() {
  removeButtons = document.querySelectorAll(".removeBtn");

  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", () => {
      todoItems.pop(i);
      renderTodoList();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderTodoList();
  //Adding a new Todo Item
  todoInput.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData1 = new FormData(todoInput);
    let todoItem = formData1.get("enterTodo");
    // todoItem[0] = todoItem[0].toUpperCase();
    todoItems.unshift(todoItem);

    renderTodoList();
  });
});
