let todoItems = [];

const todoInput = document.querySelector("#todoInput");
let removeButtons = document.querySelectorAll(".removeBtn");

//returns a list of todo
function createList() {
  let list = document.createElement("ul");
  todoItems.forEach((ele, idx) => {
    let node = document.createElement("li");
    let textNode = document.createTextNode(ele);
    let removeButton = document.createElement("button");
    let removeButtonTextNode = document.createTextNode("Remove it");
    removeButton.setAttribute("class", "removeBtn");
    removeButton.setAttribute("idx", idx);
    removeButton.appendChild(removeButtonTextNode);
    node.appendChild(textNode);
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
  todoInput.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData1 = new FormData(todoInput);

    todoItems.unshift(formData1.get("enterTodo"));

    console.log(todoItems);

    renderTodoList();
  });
});
