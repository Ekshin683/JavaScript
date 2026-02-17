const products = [{_id: 1, name: "iphone", price: 45000, description: "smartphone"},
    {_id:2,name:"Samsung",price:30000,description:"smartphone"},
    {_id:3,name:"bolt speaker",price:5000,description:"bluetooth speaker"}]

    const cart = products.map((product) => {
        const obj = {
            ...product,
            quantity: 1
        }
        // console.log(obj)
        return obj
    })
console.log(cart)