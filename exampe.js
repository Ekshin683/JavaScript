const products = [{_id: 1, name: "iphone", price: 45000, description: "smartphone",category:"mobile"},
    {_id:2,name:"Samsung",price:30000,description:"smartphone",category:"mobile"},
    {_id:3,name:"boat speaker",price:5000,description:"bluetooth speaker",category:"electronics"},
    {_id:4,name:"Roadstar",price:1000,description:"its a shoe",category:"footwear"},
    {_id:5,name:"puma",price:2000,description:"its a shoe",category:"footwear"},
    {_id:6,name:"Lenovo laptop",price:45000,description:"laptop",category:"electronics"}
]

const cart = []

function addToCart(id){
    const product = products.find((product) => product._id === id)
    // console.log(product)
    cart.push({...product,quantity:1})
}
function increment(id){
    const item = cart.find(product => product._id === id)
    item.quantity++
}
function decrement(id){
    const item = cart.find(product => product._id === id);
    item.quantity--;
}
function placeorder(){
    if(cart.length === 0){
        console.log("cart is empty");
        return;
    }
    let ordervalue = 0
    cart.forEach((item) => {
        ordervalue += item.price * item.quantity
    })
    const order = {
        email:"john@gmail.com",
        //only date
        orderDate: new Date().toLocaleDateString(),
        items: cart,
        orderValue: ordervalue
    }
    console.log("Order Placed Successfully");
    console.log(order)
}

addToCart(1)
addToCart(3)
addToCart(5)
 
// console.log(cart)
increment(1)
increment(5)
// console.log(cart)
decrement(1)
decrement(5)
// console.log(cart)
placeorder()