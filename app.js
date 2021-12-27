const inputToDo = document.querySelector(".input-todo");
const addBtn = document.querySelector(".add-btn");
const toDoList = document.querySelector(".todo-list");
const delBtn = document.querySelector("#delbtn");
const msgShow = document.querySelector("#msg-show-again");
const showBtn = document.querySelector("#show-btn")


addBtn.addEventListener("click", displayToDoList);



let list = JSON.parse(localStorage.getItem("items")) || [];
let checkboxes;
   toDoList.innerHTML = list.map((items, i) => {

    return `<li class="list-item" > 
     <input type="checkBox" class="checkBox"  data-index=${i}   id="item${i}"   />
     <label for="item${i}"  class="checkbox-name" id="lable${i}" > ${items.name} </label>
     </li> `
}).join("");





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

    // console.log(list);

    toDoList.innerHTML = list.map((items, i) => {

        return `<li class="list-item" > 
         <input type="checkBox" class="checkBox"  data-index=${i}   id="item${i}"   />
         <label for="item${i}"  class="checkbox-name" id="lable${i}" > ${items.name} </label>
         </li> `
    }).join("");
    


      localStorage.setItem("items", JSON.stringify(list) );

    // this.reset();

     checkboxes =  document.querySelectorAll(".checkBox");

     checkboxes.forEach((c,i) => c.addEventListener("click",() =>{
         let label = document.querySelector(`#lable${i}`)
         if(c.checked ){
           label.classList.add("line-through");
         }else{
             label.classList.remove("line-through")
             
         }
     }   )  );
btnVisibility()
    //  console.log(checkboxes);
}

// function populateList(list, toDoList) 

function btnVisibility() {
    delBtn.classList.add("del-visibility")
}

function clearDisplay () {
     localStorage.clear();
     toDoList.innerHTML = "";
     delBtn.classList.remove("del-visibility");
     return  msgShow.innerHTML =   ` <li class="li-class"   >❝ When you're  curious, you find lots of interesting things to do ❞   </li>`
}

delBtn.addEventListener("click",clearDisplay)


// btnVisibility()

// showBtn.addEventListener("click",() =>{
    //  localStorage.setItem("items", JSON.stringify(list) );


// }  )