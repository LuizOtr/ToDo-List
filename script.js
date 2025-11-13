const textArea = document.getElementById("newTask");
textArea.addEventListener("input", () =>{
    textArea.style.height = "auto";
    textArea.style.height = textArea.scrollHeight + "px";
})




const newTask = document.getElementById('Task')
newTask.addEventListener('submit', submitTask)

function submitTask(evt){
    evt.preventDefault();
    const task = document.querySelector('#submit').value
    console.log("conteudo da tarefa" ,task)
    
    //(marcação de estudos)
    // PASSO 1: CRIAÇÃO
    const task_list = document.createElement('li','checkbox')
    //const task_list = document.createElement('checkbox')
    // PASSO 2: CONTEÚDO
    task_list.textContent = task
    //task_checkbox.textContent = task
    // PASSO 3: ANEXAÇÃO
    document.getElementById('list').append(task_list)
}

function doneTask(){

}

function previousTask(){
    
}

function saveTask(){

}

function taskHistory(){

}

function deleteTask(){

}

function editTask(){

}



