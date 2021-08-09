const showHidebtn = document.querySelector('#showHidebtn button')
const myForm = document.querySelector('#myForm')
const formData = document.querySelector('#myForm form')
const mainDataHeads = ['taskTitle', 'taskContent', 'taskType']
let tasks = []
const getTasks = () =>{
    tasks = localStorage.getItem('tasks') || '[]'
    return JSON.parse(tasks)
}
const setTasks = (tasks) =>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
showHideEvent = function(e){
    myForm.classList.toggle('d-none')
    if(e.target) this.innerText === "show form"?  this.innerText = "hide form" : this.innerText = "show form"
    else{ e.innerText="show form" }
}
addTask = function(e){
    e.preventDefault()
    task = { status:false, id : new Date().getTime()}
    mainDataHeads.forEach( head => task[head] = this.elements[head].value );
    tasks = getTasks()
    tasks.push(task)
    setTasks(tasks)
    this.reset()
    showHideEvent(showHidebtn)
}

showHidebtn.addEventListener('click', showHideEvent )
formData.addEventListener('submit', addTask)

