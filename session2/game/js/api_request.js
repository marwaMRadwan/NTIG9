const getWord = async(cb) =>{
    try{
        const data = await fetch('http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=5&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5')
        const word = (await data.json())[0].word
        cb(word, false)
    }
    catch(e){
        cb(false, e)
    }
}

