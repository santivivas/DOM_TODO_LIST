//Manipulacion del DOM
// La manipulación del DOM (Document Object Model), se refiere a la capacidad 
// de modificar estructura, contenido y estilo de un documento HTML.

//Formas de acceder a un elemento DOM

//document.getElementById()
//document.getElementsByClassName()
//document.getElementsByTagName()
//document.querySelector()
//document.querySelectorAll()

let tasks = [];

function addTask(){
    const taskInput = document.getElementById('taskInput');
    console.log(taskInput)
    const taskInputValue = taskInput.value.trim();

    if(taskInputValue !== ''){
        tasks.push({
            id: Date.now(),
            text: taskInputValue,
            completed: false
        })
        renderTask();
        taskInput.value = "";
    }
}

function renderTask(){
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = "";
    tasks.forEach(data =>{
        //Crear el elemento de la lista
        const li = document.createElement("li");
        li.textContent = data.text;
        taskList.appendChild(li);
    })
}