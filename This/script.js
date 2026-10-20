var a = 100
var b = 50


var number = {
    a: 4,
    b: 2,
    sum: function(){
        console.log(a+b)
        //عدد بیرونی رو بر می داره
        console.log(number.a + number.b)
        //عدد داخلی رو بر می داره
        console.log(this.a + this.b)
        //دیس داخل پروپرتی رو میده
        //میره سراغ نامبر
        //درواقع دیس همون نامبریه کا بالا تعریف شده
    }
}

number.sum()

//ولی این دیس فرق داره
console.log(this.a + this.b)