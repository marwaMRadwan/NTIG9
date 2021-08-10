const fs = require('fs')

class Task {
    myData = null
    readData(){
        try{
            this.myData = JSON.parse(fs.readFileSync('all.json').toString())
            if(!Array.isArray(this.myData)) throw new Error('')
        }
        catch(e){
            this.myData=[]
        }
    }

    writeData(){
        fs.writeFileSync('all.json', JSON.stringify(this.myData))
    }

    addData(data){ 
        let task = { 
            id: new Date().getTime(), 
            title:data.title, 
            content:data.content, 
            status:false
        }
        this.readData()
        this.myData.push(task)
        this.writeData()    
    }
    showAll(){
        this.readData()
        this.myData.forEach(task=>{
            console.log(`${task.id} - ${task.title} - ${task.content} - ${task.status}`)
        })
    }
    searchData(argv){
        let searchKey = null
        for(let x in argv)  if(x!="_" && x!="$0") searchKey = x
        this.readData()
        let result = this.myData.filter(task=> task[searchKey] == argv[searchKey] )
        result.forEach(task=>{
            console.log(`${task.id} - ${task.title} - ${task.content} - ${task.status}`)
        })    
    }
    delete(argv){
        this.readData()
        let x = this.myData.findIndex(task =>  task.id== argv.id)
        if(x==-1) return console.log('not found');
        this.myData.splice(x,1)
        this.writeData()
    }
    edit(argv){
        this.readData()
        let x = this.myData.findIndex(task =>  task.id== argv.id)
        console.log(x)
        if(x==-1) return console.log('not found');
        // let isFound = this.myData.findIndex(task=>task.title==argv.newtitle)
        // if(isFound !=-1 || isFound!=x)
        this.myData[x].title=argv.newtitle
        this.myData[x].content = argv.newcontent
        this.writeData()
    }

}

let mytask = new Task()
module.exports = mytask
