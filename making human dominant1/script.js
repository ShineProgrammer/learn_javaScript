
function Person(name, lastName, age){
    this.name = name
    this.lastName = lastName
    this.age = age
}

var Sepehr = new Person('Sepehr', 'bandesi', 17.5)
var Parham = new Person('Parham', 'Dorani', 18.5)

console.log(Sepehr)
console.log(Parham)

console.log(Sepehr.age)
console.log(Parham.lastName)



