

document.write("ساده کردن" + "<br>")
text = Math.round(3.1)
document.write(text + "<br>")

text = Math.round(3.9)
document.write(text + "<br>")

text = Math.round(3.49)
document.write(text + "<br>")

text = Math.round(3.5)
document.write(text + "<br>")

//کلا گرد می کنه دیگه
//یادته خونده بوده از خود نیم به بالا به عدد بالاتر گرد میشه؟
//بالاخره اینم کاربردش

document.write("<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"<br>")


document.write("ساده از بالا" + "<br>")
text = Math.ceil(8.1)
document.write(text + "<br>")

text = Math.ceil(5.2)
document.write(text + "<br>")

// اینو توی گسسته خوندی دیگه 
//اعداد رو با نزدیک ترین عدد بعدی گرد می کنه


document.write("<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"<br>")



document.write("ساده کردن از پایین" + "<br>")
text = Math.floor(7.9)
document.write(text + "<br>")

text = Math.floor(5.4)
document.write(text + "<br>")

// اینو توی گسسته خوندی دیگه 
//اعداد رو با نزدیک ترین عدد قبلی گرد می کنه



document.write("<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"<br>")


document.write("حذف اعشار: تبدیل به عدد صحیح" + "<br>")
text = parseInt(3.14156875)
document.write(text + "<br>")
//حذف اعشار دیگه



document.write("<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"<br>")





document.write("عدد اول به توان عدد دوم" + "<br>")
text = Math.pow(5, 2)
document.write(text + "<br>")

text = Math.pow(2, 5)
document.write(text + "<br>")

// این هم عدد اول رو به توان عدد دوم می رسونه
//* ********************** بسیار مهم



document.write("<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"<br>")


document.write("عدد اول رادیکال به فرجه عدد دوم" + "<br>")
text = Math.sqrt(25, 2)
document.write(text + "<br>")

text = Math.sqrt(64, 3)
document.write(text + "<br>")

// عدد اول رو به فرجه عدد دوم رادیکال می گیره
//* ********************** بسیار مهم


document.write("<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"<br>")


document.write("نماد اعداد مثبت 1، و اعداد منفی -1، و عدد صفر 0 است" + "<br>")
text = Math.sign(-27)
document.write(text + "<br>")
//این عدد منفیه پس جوابش میشه -1

text = Math.sign(+55)
document.write(text + "<br>")
//این عدد مثبته پس جوابش میشه +1

text = Math.sign(0)
document.write(text + "<br>")
//این عدد صفره پس جوابش میشه 0

//شاید برای تشخیص منفی یا مثبت بودن اعداد به کار بیاد خب



document.write("<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"<br>")


document.write("این همون قدل مطلق خودمونه" + "<br>")
text = Math.abs(-21)
document.write(text + "<br>")
//این همون قدر مطلق خودمونه



document.write("<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"<br>")


document.write("سینوس" + "<br>")
text = Math.sin(3.141)
document.write(text + "<br>")
//این همون آقای سینوسه



document.write("<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"<br>")


document.write("کسینوس" + "<br>")
text = Math.cos(3.141)
document.write(text + "<br>")
//این همون خانم کسینوسه به رادیان


document.write("<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"<br>")


document.write("تانژانت" + "<br>")
text = Math.tan(3.141)
document.write(text + "<br>")
//این همون جناب تانژانته به رادیان



document.write("<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"<br>")


document.write("لگاریتم" + "<br>")
text = Math.log10(2)
document.write(text + "<br>")
//این همون جناب تانژانته به رادیان






document.write("<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"<br>")






document.write("اعمال رندوم و شانسی" + "<br>")
text = Math.random()
document.write(text + "<br>")
//شبیه رندوم رندینت پایتونه
//همیشه یه عدد رندوم بین 0 تا 1 میده
//برای خوشگل کردن عدد میشه اونو ضرب در 10 یا 100 کرد


text = Math.random() * 10
document.write(text + "<br>")
//شبیه رندوم رندینت پایتونه
//همیشه یه عدد رندوم بین 0 تا 1 میده
//برای خوشگل کردن عدد میشه اونو ضرب در 10 یا 100 کرد


//خب این که به درد نمی خوره که! باید یه عدد صحیح به ما بده
// خب بریزش توی پارز اینت دیگه! م

text = Math.random() * 10
document.write(parseInt(text) + "<br>")
//الان خوبه دیگه! یه عدد رندوم از یک تا 10 میده! م

text = Math.random() * 100
document.write(parseInt(text) + "<br>")
//الان خوبه دیگه! یه عدد رندوم از یک تا 100 میده! م
