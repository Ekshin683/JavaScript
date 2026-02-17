// const products = ["product1","product2","product3"]
// products.forEach((product) => console.log(product))

const products = [{_id: 1, name: "iphone", price: 45000, description: "smartphone"},
    {_id:2,name:"Samsung",price:30000,description:"smartphone"},
    {_id:3,name:"bolt speaker",price:5000,description:"bluetooth speaker"}]

// products.forEach((product) => console.log(product))

const cart = []

products.forEach((product) => {
    // product.qty = 1
    // product.totalprice = product.price * product.qty
    // cart.push(product)
    // cart = [...cart, product] //spread operator

    const obj = {
        ...product,
        quantity: 1,
        // totalprice: product.price * 1,
    };
    cart.push(obj)
})
console.log(cart)