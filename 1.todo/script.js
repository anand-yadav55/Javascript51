let todoItems = [];

const todoInput = document.querySelector("#todoInput");

function createList() {
  let list = document.createElement("ul");
  todoItems.forEach((ele) => {
    let node = document.createElement("li");
    let textnode = document.createTextNode(ele);
    node.appendChild(textnode);
    list.appendChild(node);
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
function removeTodo() {}

todoInput.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData1 = new FormData(todoInput);

  todoItems.unshift(formData1.get("enterTodo"));

  console.log(todoItems);

  renderTodoList();
});
