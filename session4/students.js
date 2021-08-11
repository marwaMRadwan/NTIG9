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

const changeStatus = (id, changeStatus)=>{ //1 activate 2 deactivate
    let allStudents = readStudentFromJSON()
    const index = searchById(allStudents, id)
    if(index ==-1) return console.log('no users found')
    if(changeStatus==1 && allStudents[index].status) return console.log('already active')
    if(changeStatus==2 && !allStudents[index].status) return console.log('already deactivate')
    allStudents[index].status= !allStudents[index].status
    writeStudentsInJSON(allStudents)
    console.log('done')
}
const editSingleStudent = (id, newData) =>{

}
const deleteStudent = (id) =>{

}
const showAllStudents = () =>{
    allStudents=readStudentFromJSON()
    allStudents.forEach(s =>{
        if(s.status) console.log(`name: ${s.name}`)
    })
}
// addStudent({"name":"a", "class":"r", grade:150})
showAllStudents()

const gradeEdit = (id, newDegree , editType) =>{ //editType 1=> add 2=> sub
    allStudents = readStudentFromJSON()
    index = searchById(allStudents, id)
    if(index==-1 || !allStudents[index].status) return console.log('invalid user');
    if(editType==1){
        if(newDegree>20 || newDegree<=0) return console.log('must be between 0 and 20')
        newDegree+=allStudents[index].degree
        if(newDegree>100) return console.log('cann\'t be more than 100')
        allStudents[index].degree = newDegree
    }
    else if(editType==2){
        if(newDegree>10 || newDegree<=0) return console.log('must be between 0 and 10')
        newDegree = allStudents[index].degree-newDegree
        if(newDegree<0) return console.log('cann\'t be less than 0');
        allStudents[index].degree = newDegree
    }
    writeStudentsInJSON(allStudents)
}

