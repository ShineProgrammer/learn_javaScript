var a = ['sepehr', 'amir', 'taha', 'soren', 'sara']

// سورت به ترتیب حروف الفبا آرایه ها را مرتب می کند

b = a.sort()
console.log(b)


//ریورس برای برعکس ساختن ترتیب داده ها است
c = a.reverse()
console.log(c)



// حالا با این روش می توان داده های عددی را به صورت صعودی مرتب کرد
var d = ['5','10','8','7','2']

d.sort(function(x,y){
    return    x - y
})

console.log(d)


// حالا برعکس با این روش می توان داده های عددی را به صورت نزولی مرتب کرد
var d = ['5','10','8','7','2']

d.sort(function(x,y){
    return    y - x
})

console.log(d)

