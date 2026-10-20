let data = {
    page : 2,
    per_page : 5,
    data : [
        {
            id : 1,
            name : "sepehr"
        },
        {
            id : 2,
            name : "taha"
        },
        {
            id : 3,
            name : "parham"
        }
    ]
}

console.log(data)
console.log(data.page);
console.log(data.data[0].name);

console.log("/////////////////////////////////////");


let box = document.getElementById("box")
data.data.map(function(value){
    box.innerHTML += `<p> ${value.name} </p>`
})
