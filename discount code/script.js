var number = {
    price : 250,
    discount : 0.2,
    handleDiscount : function(){
        return this.price * (1 - this.discount)
    }
}
document.write("Price : " + number.price)
document.write("<br>" + "Discount : " + number.discount * 100 + "%")
document.write("<br>" + "New price : " + number.handleDiscount())