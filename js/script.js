let todos = [];

function addToDo() {
  const todoText = document.getElementById("todoInput").value;
  const todoDate = document.getElementById("todoDate").value;

  if (todoText === "") {
    alert("silakan isi todo terlrbih dahulu!");
    return;
  }


  const tbody = document.getElementById("todoList");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td class="border px-2 py-1">${tbody.rows.length + 1}</td>
    <td class="border px-2 py-1">${todoText}</td>
    <td class="border px-2 py-1">${todoDate}</td>
        <button onclick="deleteToDo(this)" 
            class="bg-red-500 text-white px-2 py-1 rounded">
      Delete
    </button>
  </td>
  `;


  tbody.appendChild(row);

  
  document.getElementById("todoInput").value = "";

  const li = document.createElement("li");
  li.textContent = `${todoText} - ${todoDate}`;
  document.getElementById("todoList").appendChild(tr);
  
  document.getElementById("todoInput").value = "";
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  document.getElementById("todoDate").value = `${yyyy}-${mm}-${dd}`;
}


function displayToDo() {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";

    todos.forEach((todo, index) => {
        todoList.innerHTML +=`
     
        <li
            ${todo.task} <span>${todo.date}</span>
            <button onclick="deleteToDo(${index})"> hapus </button>
        </li>
       ` ;
    });
    
            }
            
        
        

function deleteToDo(button) {
  const row = button.parentElement.parentElement;
  row.remove();
}

function filterToDo(){
    const keyword =
    document.getElementById ("filter-input").value.tolowerCase() ;
    const todoList = document.getElementById("todo-list");
todoList.innerHTML = "";

}

function filterToDo() {
  const filterValue = document.getElementById("filter-input").value.toLowerCase();
  const todos = document.querySelectorAll("#todoList tr"); 
  todos.forEach(row => {
    const todoText = row.cells[0].textContent.toLowerCase(); 
    const todoDate = row.cells[1].textContent.toLowerCase(); 

    if (todoText.includes(filterValue) || todoDate.includes(filterValue)) {
      row.style.display = "";  
    } else {
      row.style.display = "none";
    }
  });
}

