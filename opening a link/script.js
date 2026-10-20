let openButton = document.getElementById("open")
let closeButton = document.getElementById("close")

openButton.addEventListener("click", function(){
    window.open("https://google.com")
})
closeButton.addEventListener("click", function(){
    window.close("https://google.com")
})