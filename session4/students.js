const fs = require('fs')
const chalk = require('chalk')

const classesList = ['A', 'B', 'C', 'D']

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

const generateID =(allStudents) =>{
    let id = 1
    try{ id = allStudents[allStudents.length-1].id+1 }
    catch(e){}
    return id;
}
const addStudent = (studentData) =>{
    let allStudents = readStudentFromJSON()
    if( classesList.findIndex(c=> c == studentData.class.toUpperCase()) == -1 ) return console.log(chalk.red('invalid class name'))
    const student = {
        id : generateID(allStudents),
        name: studentData.name,
        class: studentData.class.toUpperCase()
    }
    console.log(student)
}

addStudent({class:"b"})