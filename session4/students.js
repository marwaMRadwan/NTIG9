const fs = require('fs')
const chalk = require('chalk')

const readStudentFromJSON = () => {
    let students
    try{
        students = JSON.parse(fs.readFileSync('s.json').toString())
        if(!Array.isArray(students)) throw new Error()
    }
    catch(e){
        students = []
    }
    return students
}

const writeStudentsInJSON = (data)=>{
    fs.writeFileSync('s.json', JSON.stringify(data))
}

const addStudent = (studentData) =>{

}
