// modules built-in fs=> filesystem   path os 
// const fileSys = require('fs')
// fileSys.writeFileSync('data.txt', 'hello from node js')

// const myModule = require('./myModule')
// myModule.myFun2()

// //npm init   npm init --y
// const validator = require('validator');
// let check = validator.isMobilePhone('01978523698', ['ar-EG'])
// console.log(check);

// console.log(process.argv[3])

// const yargs = require('yargs')
// yargs.command({
//     command:'test',
//     describe: 'test command description',
//     builder:{
//         name:{
//            demandOption: true ,
//            describe: 'name',
//            type:"string"
//         },
//         age:{
//             demandOption:true,
//             describe:"age",
//             type:"number"
//         }
//     },
//     handler :function(argv){
//         console.log(`your name is ${argv.name} and age ${argv.age}`);
//     }
// })

// yargs.argv




const fs = require('fs')
// data = [ 1,2,3]
// fs.writeFileSync('all.json', JSON.stringify(data))
data = fs.readFileSync('all.json').toString()
console.log(JSON.parse(data))












