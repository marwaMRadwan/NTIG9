let d = document.querySelector('#formBtn')
document.querySelector('form').addEventListener('submit', function(e){
    if(d.innerText == "add") {
        alert('add')
    }
    else {
         alert('edit')
    }
})


document.querySelector('#editbtn').addEventListener('click', function(e){
    d.innerText="edit"
})

// heads = ['a','b','c']

// heads.forEach(element => {
//     tasks[i][element] = data.elements[element].value
// });
