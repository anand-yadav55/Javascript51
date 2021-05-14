let todoItems = [];

const todoInput = document.querySelector("#todoInput");
let removeButtons = document.querySelectorAll(".removeBtn");

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
    removeButton.addEventListener("click", () => console.log("remom"));
  });
  console.log(list);
  return list;
}

// To create and display the List
function renderTodoList() {
  const todoList = document.querySelector(".todoList");
  todoList.innerHTML = createList().innerHTML;
}

// To remove the element
function removeTodo(ele) {
  //   console.log(ele);
}
function addRemoveFunction() {
  removeButtons = document.querySelectorAll(".removeBtn");

  //   removeButtons.forEach((ele) =>
  //     ele.addEventListener("click", () => console.log(ele))
  //   );
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", () => console.log(ele));
  }
}

todoInput.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData1 = new FormData(todoInput);

  todoItems.unshift(formData1.get("enterTodo"));

  console.log(todoItems);

  renderTodoList();
});
