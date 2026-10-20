a = document.getElementById("in")
candlefat = document.getElementById("candle-fat")
a.addEventListener("change", () => {
    candlefat.style.height = a.value

})



let t = 0

setInterval(() => {
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    random = randomInt(-5, 10)
    

    t += random

    h = String(t) + "px"

    candlefat.style.height = h
    console.log(h)
},
    1000

)
