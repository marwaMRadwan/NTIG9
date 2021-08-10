/* 
tasks =>[ {id,title, content, status} ]  => all.json
yargs +> add, delete, show all, show single , edit tasks inside all.json

yargs create commands => add, dele, edir, sing, all
fs => write file , read
*/
const yargs = require('yargs')
const functions = require('./myFunctions')

yargs.command({
    command:"addTask",
    describe:"add new task",
    builder:{
        title:{ demandOption:true, type:"string"},
        content:{demandOption:true, type:"string"}
    },
    handler:function(argv){ functions.addData(argv)}
})


yargs.argv