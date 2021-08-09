const showHidebtn = document.querySelector('#showHidebtn button')
const myForm = document.querySelector('#myForm')
const formData = document.querySelector('#myForm form')
showHideEvent = function(e){
    myForm.classList.toggle('d-none')
    this.innerText === "show form"?  this.innerText = "hide form" : this.innerText = "show form"
}
addTask = function(e){
    e.preventDefault()
    task = {
        status:false,
        id : new Date().getTime()
    }
    alert(`${task.id} - ${task.status}`)
}

showHidebtn.addEventListener('click', showHideEvent )
formData.addEventListener('submit', addTask)