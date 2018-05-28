
deodorant = {
    itemId: 100,
    price: 3.00
}

soap = {
    itemId: 110,
    price: 2.50
}

toothpaste = {
    itemId: 120,
    price: 3.50
}

razor = {
    itemId: 130,
    price: 1.50
}

shampoo = {
    itemId: 140,
    price: 5.50
}

tweezers = {
    itemId: 150,
    price: 4.50
}

loofah = {
    itemId: 160,
    price: 6.00
}




class ShoppingCart {
    constructor(cartArray) {
        this.cartArray = cartArray;
        this.totalBill = 0;

    }
    scan (product) {
        if (this.cartArray.length < 5) {
            this.cartArray.push(product)
            this.totalBill = this.totalBill + product.price
        } else if (this.cartArray.length >= 5) {
            return "Your cart is full!"
        };

    };

    remove (product) {
        if (this.cartArray.length === 0) {
            return "Your cart is empty"
        } else {
            this.cartArray.pop();
        }
        
        
    };

    
    total () {
        
        for (let i = 0; i <= 5; i++) {
            this.totalBill = (this.totalBill + (product[i].price));
        };
            return this.cartArray.totalBill;
    };
    
    
    discount (num) {
        
        if (num <= 50) {
            let discount = ((num / 100) * this.totalBill);
            return this.totalBill - discount;
             
        } else if (num > 50) {
            let discount = (this.totalBill * .5);
            return this.totalBill - discount;
        }

    };

};