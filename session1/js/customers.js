// let mydiv = document.querySelector('#mydiv')
// mydiv.innerHTML = '<h2>new data</h2>'
// mydiv.remove()

// mydiv.innerHTML += "<h3>new text</h3>"
// const newDiv = document.createElement('div')
// newDiv.textContent="hello from js"
// mydiv.appendChild(newDiv)

// mydiv.addEventListener('click', function(e){
//     console.log(e.target)
// })
// const addForm = document.querySelector('#addForm')
// customerHeads = ['name', 'address', 'accNum', 'balance']


// users = []
// addForm.addEventListener('submit', function(e){
//     let noErr =true
//     let user = {}
//     e.preventDefault()
//     customerHeads.forEach(cHead => {
//         user[cHead] = this.elements[cHead].value
//     });

//     if(!user.name) {
//        noErr=false
//        myErr = document.createElement('div')
//        myErr.className = 'alert alert-danger mt-2'
//        myErr.innerText = "please add name"
//        document.querySelector('#userName').appendChild(myErr)
//     }
//     if(!user.balance) {
//         noErr=false
//         myErr = document.createElement('div')
//         myErr.className = 'alert alert-danger mt-2'
//         myErr.innerText = "please add balance"
//         document.querySelector('#balance').appendChild(myErr)
//      }
//      else{
//         if(  isNaN(Number(user.balance)) ) alert('not a number')
//      }
//      if(!user.address) {
//         noErr=false
//         myErr = document.createElement('div')
//         myErr.className = 'alert alert-danger mt-2'
//         myErr.innerText = "please add addresss"
//         document.querySelector('#address').appendChild(myErr)
//      }
//      if(!user.accNum) {
//         noErr=false
//         myErr = document.createElement('div')
//         myErr.className = 'alert alert-danger mt-2'
//         myErr.innerText = "please add accNum"
//         document.querySelector('#accNum').appendChild(myErr)
//      }
   
//     if(noErr) {users.push(user); alert('done')}
// })

userPost =[
    {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    },
    {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
    },
    {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
    },
    {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque"
    },
    {
    userId: 1,
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae"
    },
    {
    userId: 1,
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas"
    },
    {
    userId: 1,
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
    userId: 1,
    id: 9,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas"
    },
    {
    userId: 1,
    id: 10,
    title: "optio molestias id quia eum",
    body: "quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error"
    }
    ]
mainWrap = document.querySelector('#userDataWrap')
let createNewElement = (elementTag, elementTxt, elementClasses,parent, attributes) =>{
    myNewEl = document.createElement(elementTag)
    if(elementTxt!='') myNewEl.innerText = elementTxt
    if(elementClasses!="") myNewEl.className =elementClasses
    parent.appendChild(myNewEl)  

    attributes.forEach(attr=>{
            myNewEl.setAttribute(attr.attrName, attr.attrVal)
        })

        return myNewEl  
}
// attributes = [ {attrName:"id", attrval:"x"}, {attrName:"src", attrVal:'bbbb'}]
rowDiv = createNewElement("div", "", "row", mainWrap,[{attrName:"id", attrVal:"x"}, {attrName:"name", attrVal:"d"}])
userPost.forEach(post => {
    col4Div = createNewElement("div", "", "col-4", rowDiv,[])
    single = createNewElement("div", "","m-3 border border-3 border-primary", col4Div,[])
    createNewElement('h1', post.userId, "", single,[])
    createNewElement('h3', post.title, "", single,[])
    createNewElement('p', post.content, "", single,[])
    createNewElement('a', 'google', "btn btn-success", rowDiv, 
    [
        {attrName: "href", attrVal:"https://www.google.com"},
        {attrName:"id", attrVal: "y"}
    ]
    )
});



images = [
    {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
    },
    {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796"
    },
    {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355"
    },
    {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
    thumbnailUrl: "https://via.placeholder.com/150/d32776"
    },
    {
    albumId: 1,
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url: "https://via.placeholder.com/600/f66b97",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97"
    },
    {
    albumId: 1,
    id: 6,
    title: "accusamus ea aliquid et amet sequi nemo",
    url: "https://via.placeholder.com/600/56a8c2",
    thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
    },
    {
    albumId: 1,
    id: 7,
    title: "officia delectus consequatur vero aut veniam explicabo molestias",
    url: "https://via.placeholder.com/600/b0f7cc",
    thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
    },
    {
    albumId: 1,
    id: 8,
    title: "aut porro officiis laborum odit ea laudantium corporis",
    url: "https://via.placeholder.com/600/54176f",
    thumbnailUrl: "https://via.placeholder.com/150/54176f"
    },
    {
    albumId: 1,
    id: 9,
    title: "qui eius qui autem sed",
    url: "https://via.placeholder.com/600/51aa97",
    thumbnailUrl: "https://via.placeholder.com/150/51aa97"
    },
    {
    albumId: 1,
    id: 10,
    title: "beatae et provident et ut vel",
    url: "https://via.placeholder.com/600/810b14",
    thumbnailUrl: "https://via.placeholder.com/150/810b14"
    },
    {
    albumId: 1,
    id: 11,
    title: "nihil at amet non hic quia qui",
    url: "https://via.placeholder.com/600/1ee8a4",
    thumbnailUrl: "https://via.placeholder.com/150/1ee8a4"
    },
    {
    albumId: 1,
    id: 12,
    title: "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
    url: "https://via.placeholder.com/600/66b7d2",
    thumbnailUrl: "https://via.placeholder.com/150/66b7d2"
    }
    ]