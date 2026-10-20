
function Person(name, lastName, age){
    this.name = name
    this.lastName = lastName
    this.age = age
    this.fullNameMaker = function(){
        console.log(this.name + " " +  this.lastName)
    }
}

var Sepehr = new Person('Sepehr', 'bandesi', 17.5)
var Parham = new Person('Parham', 'Dorani', 18.5)

console.log(Sepehr)
console.log(Parham)

console.log(Sepehr.age)
console.log(Parham.lastName)


Sepehr.fullNameMaker()
Parham.fullNameMaker()



//به این روش اصلا نمیشه به پروپرتی آیتم اضافه کرد
Person.eyecolor = "blue"




//فقط به این روش میشه به پروپرتی ها آیتم اضافه کرد
Sepehr.eyecolor = "Brown"
Parham.height = "185cm"