fetch("https://reqres.in/api/users?page=2", {
    method: "post",
    // بعد از اضافه کردن بادی 
    // قسمت پیلود باز میشه
    //inspect/network/name/user?page=2
    body: JSON.stringify({
        title: "test"
    })
    
})
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
