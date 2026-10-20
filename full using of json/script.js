// fetch("https://reqres.in/api/users?page=2")
fetch("https://reqres.in/api/users?page=1")
// users?page=2
//حالت بعدیه
.then(function(result){
    return result.json()
})
.then(function(a){
    console.log(a);
    let b = document.getElementById("box")
    // b.innerHTML += a.data[0].email


    a.data.map(function(x){
        box.innerHTML +=
        `<img src="${x.avatar}">
        <p>${x.first_name}</p>`
    })
})
