const inputToDo = document.querySelector(".input-todo");
const addBtn = document.querySelector(".add-btn");
const toDoList = document.querySelector(".todo-list");

addBtn.addEventListener("click", displayToDoList)


let list = [];



function displayToDoList(event) {
    let listObj = {};
    event.preventDefault();
    let input = inputToDo.value;

    if (input === "" || input === null) {
        return alert("Please! Dont let the field empty")
    }
    listObj.name = input;
    listObj.status = false;

    list.push(listObj);


    toDoList.innerHTML = list.map(items => {

        return ` <div class="list-container" >
          <ul class="todo-list" >
        <li>  <input type="checkBox" class="checkBox"  >
        ${items.name}</li>
    </ul></div>
    `
    }).join("");

    // this.reset();
}



