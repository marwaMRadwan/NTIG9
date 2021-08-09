let score = 0
let errCount = 0
let wordArr = []
getWord((data, err)=>{
    if(err) alert('please try again later')
    else{
        document.querySelector('#word').innerText = data
        wordArr = data.split('')
        window.addEventListener('keypress', (e)=>{

            checkChar(data, e.key)
            // console.log(e.key)
            // if(data.includes(e.key)) {
            //     score++
            //     console.log(`score: ${score} error count ${errCount}`)
            // }
            // else{
            //     errCount++
            //     console.log(`score: ${score} error count ${errCount}`)

            // }
        })
    }
})

checkChar = (word, c) =>{
    let t = word.length
    wordArr = wordArr.filter( w=> { return c!=w })
    console.log(wordArr)
    score = t- wordArr.length
    console.log(score)
    
}

