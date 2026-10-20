// روش قدیمی
function Person(name, lastName, age){
    this.name = name
    this.lastName = lastName
    this.age = age
    this.fullNameMaker = function(){
        console.log(this.name + " " +  this.lastName)
    }
}


class Adam{
    constructor(name, lastName){
        this.name = name
        this.lastName = lastName
    }
    // دیگه فول نیم میکر رو نباید توی کانستراکتور بزاریم 
    //باید بیرونش توی کلاس گذاشته بشه
    //نیازی به نوشتن فانکشن هم نیست خودش می فهمه
    fullNameMaker(){
        console.log(this.name + " " + this.lastName)
    }
}

var Sepehr = new Adam('Sepehr', 'Bandesi')
var Parham = new Adam('Parham', 'Dorani')

Sepehr.fullNameMaker()
Parham.fullNameMaker()