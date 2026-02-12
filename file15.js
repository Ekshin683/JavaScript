let cart = []

//Click on add to cart button on iphone product
cart = [...cart, {name:"iphone",price:"450000",qty:1}]

// console.log(cart)

//Click on add to cart button on speaker product
cart = [...cart, {name:"speaker",price:"5000",qty:1}]

console.log(cart)

const order = {
    email:"john@gmail.com",
    items:cart,
    ordervalue:455000,
    status:"pending"
}
// db.orders.insertOne(order)

//create flipkart database 
//create collection orders => email,items,ordervalue,status,orderDate
//create collection users => name,email,password,role
//insert seed data
//write aggregate query to display all the orders
//placed by a particular user



