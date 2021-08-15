const fs = require('fs')
let data = []
const readJsonFile = ()=>{
    try{
    data = JSON.parse(fs.readFileSync('src/model/data.json').toString())
    if(!Array.isArray(data)) throw new Error()
    }
    catch(e){ data = [] 
    console.log(data)}
}
const saveJsonFile = () =>{
    fs.writeFileSync('src/model/data.json', JSON.stringify(data))
}
class User{
    addNewUser(name, balance, age){
        readJsonFile()
        let newUser = {
            _id:new Date().getTime(),
            name,balance, age
        }
        data.push(newUser)
        saveJsonFile()
    }
    editUser(userId, newData){
        readJsonFile()
        let index = data.findIndex(user=> user._id === userId)
        data[index] = newData
        saveJsonFile()
    }
    showAllUsers(){
        readJsonFile()
        return data
    }
    searchUser(userId){
        readJsonFile()
        let index = data.findIndex(user=> user._id === userId)
        return index
    }
    deleteUser(userId){
        readJsonFile()
        let index = data.findIndex(user=> user._id === userId)
        data.splice(index, 1)
        saveJsonFile()
    }
}

const userObj = new User()
module.exports = userObj