class Father{
    constructor(name, lastName){
        this.name = name
        this.lastName = lastName
    }
    fullNameMaker(){
        console.log(this.name + ' ' + this.lastName)
    }
}

class Son extends Father{
    constructor(name, lastName, eyecolor){
        super(name, lastName)
        this.eyecolor = eyecolor
    }
    mixer(){
        console.log(this.name + ' ' + this.lastName);
    }
}

var Mmd = new Father('mmd', 'Bandesi')
var Sepehr = new Son('Sepehr', 'Bandesi', 'Brown')

console.log(Sepehr)
console.log(Mmd);


Mmd.fullNameMaker()
Sepehr.mixer()
