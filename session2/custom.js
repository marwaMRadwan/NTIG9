// //clousers
// // const myClouser = () =>{
// //     let x = 5
// //     return {
// //         x,
// //         show() { console.log('show')},
// //         edit() { console.log('edit') }
// //     }
// // }

// // const y = myClouser()
// // y.show()
// // console.log(y.x)

// // const myClouser2 = (a,b)=>{
// //     return {
// //         add() { return a+b},
// //         sub() {return a-b}
// //     }
// // }
// // const z = myClouser2(6,3)
// // console.log(z.add())

// // setTimeout(()=> {console.log('a')},2000)
// // console.log('test 1')
// // var x
// // setTimeout(()=> {x=5}, 2000)
// // console.log(x)

// //callback
// // const myCallBack = (val, cb) =>{
// //     if(typeof val == "number") cb(false, val)
// //     else cb (true, false)
// // }
// // myCallBack('a', (err, value)=>{ 
// //     if(err) console.log('error');
// //     else console.log(value);
// // })

// //promises
// // const myPromise = (v) => new Promise((resolve, reject)=>{ 
// //         setTimeout(()=>{
// //             if(typeof v=='number')  resolve(v)
// //             else reject('not a number')
// //         }, 3000)
// //     })

// // // myPromise('hello').then(
// // //     (data)=>{ console.log(data)},
// // //     (err)=>{ console.log(err)}
// // // )
// // const myCall = async() =>{
// //     let x =  await myPromise(8)
// //     console.log(x)
// // }
// // myCall()
// // console.log('g')
// // api read (fetch data)
// const getData = async (cb) =>{
//     try{
//         let data =await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
//         cb(false, data)
//     }
//     catch(e){
//         cb(e, false)
//     }
// }
// let y = getData((err, res)=>{
//     if(err) console.log(err)
//     else  console.log(res);
// })

// const myData = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     return data;
// }

// let data = await myData();

// console.log(data);
