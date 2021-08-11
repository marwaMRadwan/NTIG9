// const request = require('request')
const url ='https://jsonplaceholder.typicode.com/users' //http://localhost:300/b

// request({url:apiUrl, json:true}, (err, {body})=>{
//     console.log(body)
// })

// const https = require('https')
// const request = https.request(url, (response)=>{
//     let result = ""

//     response.on('data', (mainData)=>{
//         result+=mainData.toString()
//     })
//     response.on('end', ()=>{
//         const final = JSON.parse(result)
//         console.log(final)
//     })
// })
// request.on('error', (error)=>{
//     console.log(error)
// })
// request.end()


const fetch = require('node-fetch');
// fetch(url)
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(e=>{})

// let y = async function(){
//     try{
//         let x = await fetch(url)
//         let res = await x.json()
//         console.log(res)
    
//     }
//     catch(e){

//     }
// }

// y()

const body ={
    "role_id" : 3,
    "order" : "A-Z" 
};
 
fetch('http://medical.mind-techs.com/api/auth/LoadProviders/2/0/2', {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => console.log(json));

