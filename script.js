let taskNameInput = document.querySelector('#task-name-input');
let addTaskBtn = document.querySelector ("#add-task-btn");
let taskList = document.querySelector('.task-list');
let startMessage = document.querySelector('#start-message');

addTaskBtn.addEventListener('click', addTaskHandler)


function createTask(text){
    let div = document.createElement("div");
    div.classList.add('task');

    let input = document.createElement("input");
    input.addEventListener('click', changeTaskState )
    input.type = 'checkbox';

    let p = document.createElement("p");
    p.innerText = text

    div.append(input);
    div.append(p);

    return div;
}

function changeTaskState() {
    if (this.checked){
        this.parentElement.classList.add('complited')
    }else{
        this.parentElement.classList.remove('complited')
    }
}

function addTaskHandler(){
    if(taskNameInput.value){
    if(!startMessage.hidden)startMessage.hidden = true 
    let newTask = createTask(taskNameInput.value);
    taskList.append(newTask);
    taskNameInput.value = ''
    }else{
        alert('Add New Task')
    }
}