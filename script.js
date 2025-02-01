let todoList = [
    {
      item: 'Buy milk',
      dueDate: 1/2/2025
    },
    {
      item: 'Go to shopping',
      dueDate: 1/2/2025
    }
  ];

  displayItems();    

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    // console.log(todoItem);
    todoList.push({item: todoItem, dueDate: todoDate});
    inputElement.value = '';
    dateElement.value = '';

    displayItems();
}

function displayItems() {
    let displayElement = document.querySelector(".todo-container");
    let newHtml = '';
    for (let i=0; i < todoList.length; i++) {
    let {item, dueDate} = todoList[i];
        newHtml += `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class="btn-delete" onclick="todoList.splice(${i}, 1);
            displayItems();">Delete</button>
        `;
    }
    displayElement.innerHTML = newHtml;

}