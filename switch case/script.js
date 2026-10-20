var drink = 2

switch(drink){
    case 1 : document.write(11)
    case 2 : document.write(22)
    case 3 : document.write(33)
}


//عه چرا گفت 2233؟
//چون توی سوییچ کیس باید از بریک استفاده کنی 
// تا وقتی که به یک درست رسید خرکی همه رو چاپ نکنه

document.write("<br>")
document.write("<br>")
document.write("<br>")


switch(drink){
    case 1 : document.write(11)
    break
    case 2 : document.write(22)
    break
    case 3 : document.write(33)
}

//حالا 
// default 
//چیه؟
// اگه هیچ کدوم از کیس ها نبود دیفالت اجرا میشه
//دقیقا عین 
//else!

document.write("<br>")
document.write("<br>")
document.write("<br>")

var drinkoo = 7

switch(drinkoo){
    case 1 : document.write(11)
    break
    case 2 : document.write(22)
    break
    case 3 : document.write(33)
    default : document.write("nothing!")
}