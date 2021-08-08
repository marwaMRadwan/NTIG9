// var x 
// let x
// const x
// var x = 10

// if(true){
//     var x=5
// }

// console.log(x)

// let y=3
// let y=7
// let y=3

// const z = 5

// const x = {
//     a:5, b:6
// }
// x.c=10
// let a = 1

// for(;;){

//     console.log(a)
//     a++
//     if(a==6) break

// }

// while(true){
//     if(a==1) break
// }

// f1()
// function f1(){
//     console.log('f1')
// }
// console.log(f2())

// let f2 = function(){
//     console.log('f2')
// }

// let f3 = () => console.log('f3')

// let f4 = () =>{
//     console.log('f4')
// }

// if(true) console.log('hello')

// let a=5
// let b=6

// a+b
///
///

// let c=7

// let x = ()=> 5*3/2+6

// let name =null
// name = []
// console.log(name)

// user => name, yearOfBirth, salary
// add user
// show user
// get age
/*
localStorage.setItem('x','h')
            .getItem('x')
*/

let users = [ ]
const heads = [
    {propertyName: 'name', msg:'name'},
    {propertyName: 'yearOfBirth', msg:'year of birth'},
    {propertyName: 'salary', msg:'salary'},
]
showSingle = (user)=>{
    console.log(`name: ${user.name} - salary: ${user.salary} - year of birth: ${user.yearOfBirth}`)
}
showAllUsers = () =>{
    
    if(users.length==0) return console.log('no data to show')

    users.forEach( user => showSingle(user))

}

addNewUser = ()=>{
    // let user = {
    //     name: prompt(),
    //     yearOfBirth: prompt('please enter user year of birth'),
    //     salary: prompt('please enter user salary')
    // }
    let user = {}
    heads.forEach(h=>{
        user[h.propertyName] = prompt(`please enter user ${h.msg}`)
    //user[h.pro] ====> user.name  user.h.propertName  user = { h : { propertyName:'s'}}
    
    }) 
    users.push(user)
    // console.log(user)
}

searchUser = (searchKey, attribute, searchType)=>{
    //searchType( single index, single data, array of data )
    switch(searchType){
        case 1:{
            return users.findIndex( user => user[attribute]==searchKey )
        }
        case 2:{
            return users.find( user => user[attribute]==searchKey )
        }
        case 3:{
            return users.filter( user => user[attribute]==searchKey )
        }
        default:{
            throw new Error("no search type with this key")
        }
    }
}
getUserData = (name) =>{
    try{
        let data = searchUser(name, 'name', 1 )
        if(data) showSingle(data)
        else console.log('no data found')
    }
    catch(e){
        console.log(e)
    }
}

getUserAge = (id) =>{

}
addNewUser()
// showAllUsers()

getUserData('marwa')
console.log('test')












