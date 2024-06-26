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
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach(data =>{
        //Crear el elemento de la lista
        const li = document.createElement("li");
        li.textContent = data.text;
        li.id = "check";
        //li.id = "listItem";
        taskList.appendChild(li);
        const input = document.createElement("input");
        input.type = "checkbox";
        input.id = "check";
        //input.id = "listCheck";
        li.appendChild(input);
    })
}

function deleteList (){
    const deleteList = document.getElementById("check");
    //const deleteList = document.getElementById("listItem");
    //const deleteListCheck = document.getElementById("listCheck");
    deleteList.remove();
    //deleteListCheck.remove();
}

function addTaskSecond(){
    const taskInputSecond = document.getElementById("taskInputSecond");
    console.log(taskInputSecond)
    const taskInputSecondValue = taskInputSecond.value.trim();

    if(taskInputSecondValue !== ''){
        tasks.push({
            id: Date.now(),
            text: taskInputSecondValue,
            completed: false
        })
        renderTaskSecond();
        taskInputSecond.value = "";
    }
}

function renderTaskSecond(){
    const taskListSecond = document.getElementById("taskListSecond");
    taskListSecond.innerHTML = "";
    tasks.forEach(data =>{
        //Crear el elemento de la lista
        const li = document.createElement("li");
        li.textContent = data.text;
        li.id = "check2";
        //li.id = "listItem";
        taskListSecond.appendChild(li);
        const input = document.createElement("input");
        input.type = "checkbox";
        input.id = "check2";
        //input.id = "listCheck";
        li.appendChild(input);
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";
        deleteButton.id = "check2"
        deleteButton.onclick = "deleteWithSingularButton()";
        li.appendChild(deleteButton);
    })
}

function deleteListSecond (){
    const deleteList = document.getElementById("check2");
    //const deleteList = document.getElementById("listItem");
    //const deleteListCheck = document.getElementById("listCheck");
    deleteList.remove();
    //deleteListCheck.remove();
}

function deleteWithSingularButton (){
    const deleteSingularButton = document.getElementById("check2");
    deleteSingularButton.remove();
}