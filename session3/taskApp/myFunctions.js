const fs = require('fs')
class Task {
    addData(data){ 
        let task = {a:1,b:2}
        fs.writeFileSync('all.json', JSON.stringify(task))
    }
    
}

let mytask = new Task()
module.exports = mytask