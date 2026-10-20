let a = document.getElementById("title")
a.addEventListener("click", function(){
    alert("سلام من الفویم")
})




//هر کلیک در واقع دو کلیکه و دو تا صدا میده
//توی آن مووس دوون به محضه اینکه کلیک می کنی کار می کنه
// ولی آن کلیک باید حتما برداری تا فعال شه
let b = document.getElementById("title")
b.addEventListener("mousedown", function(){
    b.style.color = "red"
})


//بری روش تغییر می کنه
let c = document.getElementById("title")
c.addEventListener("mousemove", function(){
    c.style.color = "red"
})
