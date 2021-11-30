const inputToDo = document.querySelector(".input-todo");
const addBtn = document.querySelector(".add-btn");

addBtn.addEventListener("click",displayToDoList  )


let list =[];


function displayToDoList(event) {
    event.preventDefault()
    let input = inputToDo.value ;
    console.log(input);

    list.push(input);
    console.log(list);
}


