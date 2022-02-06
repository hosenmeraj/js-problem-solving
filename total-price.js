const cart = [
    { name: 'laptop', price: 30000, quantity: 1 },
    { name: 'shirt', price: 600, quantity: 3 },
    { name: 'watch', price: 1000, quantity: 2 },
    { name: 'phone', price: 15000, quantity: 1 }
];
let cardTotal = 0;
for (const product of cart) {
    console.log(product);
    const productTotal = product.price * product.quantity;
    cardTotal = cardTotal + productTotal;

}
console.log(cardTotal);