var a = document.getElementById("modal")
var b = document.getElementById("header")
var t1 = document.getElementById("t1")
var t2 = document.getElementById("t2")

function navbar(){
    if(a.style.left === "-200px"){
        a.style.left = "0"
    }
    else if(a.style.left = "0px"){
        a.style.left = "-200px"
    }
}
if(b.style.width > "600px"){
    t1.style.opacity = "0"
}