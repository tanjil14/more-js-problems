const products = [
    { name: 'laptop', price: 43000 },
    { name: 'shirt', price: 500 },
    { name: 'watch', price: 3680 },
    { name: 'phone', price: 55000 }
];
/* let totalPrice=0
for(let product of products){
    let element=product.price
    totalPrice+=element
}
console.log(totalPrice) */
const cart = [
    { name: 'laptop', price: 43000, quantity: 1 },
    { name: 'shirt', price: 500, quantity: 8 },
    { name: 'watch', price: 3680, quantity: 3 },
    { name: 'phone', price: 55000, quantity: 1 }
];

let totalPrice=0
for(let product of cart){
    let element=product.price*product.quantity
    totalPrice+=element
}
console.log(totalPrice)