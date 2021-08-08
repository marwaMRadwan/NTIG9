// let mydiv = document.querySelector('#mydiv')
// mydiv.innerHTML = '<h2>new data</h2>'
// mydiv.remove()

// mydiv.innerHTML += "<h3>new text</h3>"
// const newDiv = document.createElement('div')
// newDiv.textContent="hello from js"
// mydiv.appendChild(newDiv)

// mydiv.addEventListener('click', function(e){
//     console.log(e.target)
// })
const addForm = document.querySelector('#addForm')
customerHeads = ['name', 'address', 'accNum', 'balance']
users = []
addForm.addEventListener('submit', function(e){
    let user = {}
    e.preventDefault()
    customerHeads.forEach(cHead => {
        // console.log(this.elements[cHead].value)
        user[cHead] = this.elements[cHead].value
    });
    console.log(user)
    // console.log(this)
    users.push(user)
})