var idCounter = 0;
const input = document.querySelector("input[type='text']");
const userInput = document.getElementById("userInput");
const list = document.getElementById("list");
const stats = document.getElementById("stats")

userInput.addEventListener("submit", (event) => {
    event.preventDefault();
    addTask();
});

list.addEventListener("click", (event)=>{
    if(event.srcElement.nodeName == "INPUT"){
        updateStats();
    }else if(event.srcElement.nodeName == "IMG"){
         deleteTask(event.srcElement.parentNode.id);
    }
});

let deleteTask = (id)=>{
    let taskDelete = document.getElementById(id);
    list.removeChild(taskDelete);
    updateStats();
};

let addTask = ()=> {
    idCounter++;
    var newValue = input.value;
    const newTask = document.createElement("div");
    newTask.className = "task-container";
    newTask.id = idCounter;
    newTask.innerHTML = `
    <label>
        <input type="checkbox">
        ${newValue}
    </label>
    <img src="../recursos/imagenes/eliminar.png" class="closeBtn">
`;
if(list.firstChild){
list.insertBefore(newTask, list.firstChild);
}else{
    list.appendChild(newTask);
}
input.value="";
updateStats();
};

var updateStats = ()=>{
    var tasks = list.querySelectorAll("div");
    var completedTasks = list.querySelectorAll("input[type='checkbox']:checked");
    var pendingTasks = tasks.length - completedTasks.length;
    stats.innerHTML = `
        <p>Tareas pendientes: ${pendingTasks} Completadas: ${completedTasks.length}</p>
    `;
}
