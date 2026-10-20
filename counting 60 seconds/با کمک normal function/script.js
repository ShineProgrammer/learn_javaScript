let counter = 60

var sum = document.getElementById("sum")

setInterval(function(){
    if(counter > 0){
        counter--
        sum.innerHTML = counter
    }
    else if(counter < 0){
        counter == ""
    }
},
    1000
)
