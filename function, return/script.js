// var i = 2
// var j = 4

// function zarb(first, second){
//     document.write(first*second)
// }

// zarb(i, j)

// //روش 1






// روش 2 برای استفاده از فانکشن خارج خود فانکشن از ریترن استفاده میشه

var i = 2
var j = 4

function zarb(first, second){
    return first*second
}

zarb(i, j)
var value = zarb(i, j)
document.write(value)