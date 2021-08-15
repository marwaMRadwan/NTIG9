const fs = require('fs')
let data = []
const readJsonFile = ()=>{
    try{
    data = JSON.parse(fs.readFileSync('../model/data.json').toString())
    if(!Array.isArray(data)) throw new Error()
    }
    catch(e){ data = [] }
}
const saveJsonFile = () =>{
    fs.writeFileSync('../model/data.json', JSON.stringify(data))
}
class User{
    addNewUser(name, balance, age){
        data = readJsonFile()
        let newUser = {
            _id:new Date().now(),
            name,balance, age
        }
        data.push(newUser)
    }
    editUser(){}
    showAllUsers(){}
    searchUser(){}
    deleteUser(){}
}

const userObj = new User()
module.exports = userObj