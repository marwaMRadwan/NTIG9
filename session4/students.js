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
const checkClass = (studentData) =>{
    return classesList.findIndex(c=> c == studentData.class.toUpperCase()) == -1
}

const checkUniqueData = (studentData, allStudents) =>{
    return allStudents.findIndex(s => 
        s.name == studentData.name.toLowerCase()  && s.class ==studentData.class.toUpperCase()
    ) != -1
}

const searchById = (allStudents, id)=>{
   return allStudents.findIndex( s => s.id == id)
}

const addStudent = (studentData) =>{
    let allStudents = readStudentFromJSON()
    let errors = []
    if( checkClass(studentData) )  errors.push('invalid class name')
    if( checkUniqueData(studentData, allStudents)) errors.push('invalid data')
    if(studentData.grade<0 || studentData.grade>100) errors.push('invalid grade')
    if(errors.length>0){
        errors.forEach(
            err=> console.log(chalk.red(err))
        )
        return;
    }
    const student = {
        id : generateID(allStudents),
        name: studentData.name.toLowerCase(),
        class: studentData.class.toUpperCase(),
        status: false,
        grade: studentData.grade
    }
    console.log(student)
    allStudents.push(student)
    writeStudentsInJSON(allStudents)
    console.log(chalk.green('data added successfuly'))
}
const showSingleStudent = (id) =>{
    const allStudents = readStudentFromJSON()
    const index = searchById(allStudents, id)
    if(index==-1) return console.log(chalk.red('no data'))
    if(!allStudents[index].status) return console.log(chalk.red('student deactivated'))
    console.log(chalk.green(`name: ${allStudents[index].name}`))
}

const activateStudent = (id) =>{

}
const deActivateStudent = (id) =>{
    
}
const editSingleStudent = (id) =>{

}
const deleteStudent = (id) =>{

}
const showAllStudents = () =>{

}
// addStudent({"name":"a", "class":"r", grade:150})
showSingleStudent(1)