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
    
}

let mytask = new Task()
module.exports = mytask