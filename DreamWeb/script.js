var resultBar = document.getElementById("resultBar")
var settingBar = document.getElementById("settingBar")
var settingBarDiv = document.getElementById("settingBarDiv")
function tagButton(){
    resultBar.innerHTML += "<div id='div1' style='width: 100px; height: 100px; background-color: aqua; color: white; border-style: solid;'></div>"
    settingBar.style.opacity = "1"
    settingBarDiv.style.opacity = "1"
}


let width1 = document.getElementById("width1")
width1.addEventListener("change", function(){
    let div1 = document.getElementById("div1")
    div1.style.width = width1.value
})

let height1 = document.getElementById("height1")
height1.addEventListener("change", function(){
    let div1 = document.getElementById("div1")
    div1.style.height = height1.value
})



let bgcolor1 = document.getElementById("bgcolor1")
bgcolor1.addEventListener("change", function(){
    let div1 = document.getElementById("div1")
    div1.style.background = bgcolor1.value
})

let padding1 = document.getElementById("padding1")
padding1.addEventListener("change", function(){
    let div1 = document.getElementById("div1")
    div1.style.padding = padding1.value
})

let margin1 = document.getElementById("margin1")
margin1.addEventListener("change", function(){
    let div1 = document.getElementById("div1")
    div1.style.margin = margin1.value
})

let borderColor1 = document.getElementById("borderColor1")
borderColor1.addEventListener("change", function(){
    let div1 = document.getElementById("div1")
    div1.style.borderColor = borderColor1.value
})

let borderSize1 = document.getElementById("borderSize1")
borderSize1.addEventListener("change", function(){
    let div1 = document.getElementById("div1")
    div1.style.borderWidth = borderSize1.value
})

let borderRadius1 = document.getElementById("borderRadius1")
borderRadius1.addEventListener("change", function(){
    let div1 = document.getElementById("div1")
    div1.style.borderRadius = borderRadius1.value
})