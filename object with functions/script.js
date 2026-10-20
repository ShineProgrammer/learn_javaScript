var person = {
    name : 'sepehr',
    lastName : 'bandesi',
    age : 17.5,
    sum : function(){
        return 2+8
    }
}

var a = person.sum()
console.log(a)
// اما اینجوری نمیشه
console.log(person.sum)


