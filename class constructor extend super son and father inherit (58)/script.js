
//بیاین یه کلاس ارثی بسازیم

class Father{
    constructor(name, lastName, skinColor){
        this.name = name
        this.lastName = lastName
        this.skinColor = skinColor
    }
}

var Mohammad = new Father('Mohammad', 'Bandesi', 'white')

console.log(Mohammad)



//حالا یه پسری کا خصوصیات نیم و لست نیم و اسکین کالر رو به ارث می بره
class Son extends Father{
    constructor(name, lastName, skinColor, eyecolor, haircolor){
        //اینجا میگی چه چیز هایی رو از پدر باید به ارث ببری
        super(name, lastName, skinColor)// اینا خصوصیات ارث پدری
        // اینا خصوصیات غیر ارثی و منحصر به فرد
        this.eyecolor = eyecolor
        this.haircolor = haircolor
    }
}

var Sepehr = new Son('Sepehr', 'bandesi', 'white', 'blue', 'brown')
console.log(Sepehr)