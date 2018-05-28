describe('Cart', () => {
it('should add an item to the shopping cart array', () => {
    const shoppingCart = new ShoppingCart([]);

    shoppingCart.scan(razor)
    expect(shoppingCart.cartArray.length).toEqual(1);

    shoppingCart.scan(tweezers)
    expect(shoppingCart.cartArray.length).toEqual(2)
})

it("Should only allow 5 items to be stored", () => {
    const shoppingCart = new ShoppingCart([]);
    shoppingCart.scan(razor)
    shoppingCart.scan(tweezers)
    shoppingCart.scan(deodorant)
    shoppingCart.scan(loofah)
    shoppingCart.scan(shampoo)

    expect(shoppingCart.scan(toothpaste)).toBe("Your cart is full!")
})

it("Should remove the last item", () => {
    const shoppingCart = new ShoppingCart([]);
    shoppingCart.scan(razor)
    shoppingCart.scan(tweezers)
    shoppingCart.scan(loofah)
    shoppingCart.remove(loofah)

    expect(shoppingCart.cartArray.length).toBe(2);
})

it ("should only take 5 items at once in the constructor", () => {
    const shoppingCart = new ShoppingCart([razor, tweezers, deodorant, loofah, shampoo]);

    expect(shoppingCart.cartArray.length).toBe(5)
})

it('should remove the last product from the cart if the cart is not empty', () => {
    const shoppingCart = new ShoppingCart([]);

    expect(shoppingCart.remove(loofah)).toBe("Your cart is empty")
})

it ('should build a new shopping cart by taking in items into the constructor', () => {
    const shoppingCart = new ShoppingCart([razor, tweezers, shampoo, deodorant, loofah]);
    
    expect(shoppingCart.cartArray).toEqual([razor, tweezers, shampoo, deodorant, loofah]);
})
it ('should apply a discount of x% depending on what discount is inputted', () => {
    const shoppingCart = new ShoppingCart([]);
    
    shoppingCart.scan(loofah);

    expect(shoppingCart.discount(40)).toEqual(3.5999999999999996)        
})
it('should apply a discount of 50% if a number is inputted that is greater than 50', () => {
    const shoppingCart = new ShoppingCart([]);
    
    shoppingCart.scan(loofah);

    expect(shoppingCart.discount(60)).toEqual(3)
})
it('should display the total bill of sale', () => {
    const shoppingCart = new ShoppingCart();

    expect(shoppingCart.total()).toEqual(20.50)
})
it('should apply discounts to total bill', () => {
    const shoppingCart = new ShoppingCart();
    
    shoppingCart.discount(40);
    
    expect(shoppingCart.total(shoppingCart.cartArray)).toEqual(12.30)
})

})
